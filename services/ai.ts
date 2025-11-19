import { GoogleGenAI, Type } from "@google/genai";
import { ArtConfig } from "../context/ArtContext";

// Helper to safely get env var without crashing
const getApiKey = () => {
  try {
    // Check for Vite/Modern Browsers
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_KEY) {
      // @ts-ignore
      return import.meta.env.VITE_API_KEY;
    }
    // Check for Node/Webpack/Process
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Error accessing environment variables");
  }
  return undefined;
};

export const generateArtConfigFromPrompt = async (prompt: string): Promise<ArtConfig | null> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI generation skipped.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: `You are an expert 3D Art Director and Physics Engine Tuner.
        Your job is to translate a natural language description of a liquid/material into specific physics parameters.
        
        Parameters guide:
        - flowSpeed: 0.0 (static) to 5.0 (rushing water). Slow = 0.2.
        - turbulence: 0.0 (smooth) to 3.0 (chaotic).
        - viscosity: 0.1 (fine noise) to 5.0 (large blobs).
        - displacementScale: 0.1 (flat) to 3.0 (deep waves).
        - metalness: 0.0 (plastic/stone) to 1.0 (metal).
        - roughness: 0.0 (mirror) to 1.0 (matte).
        - clearcoat: 0.0 (dry) to 1.0 (wet/lacquered).
        - iridescence: 0.0 (standard) to 1.0 (holographic).
        
        Return a JSON object matching the schema.
        For colors, generate two complementary or analogous hex codes that fit the description.`,
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                flowSpeed: { type: Type.NUMBER },
                turbulence: { type: Type.NUMBER },
                viscosity: { type: Type.NUMBER },
                displacementScale: { type: Type.NUMBER },
                metalness: { type: Type.NUMBER },
                roughness: { type: Type.NUMBER },
                clearcoat: { type: Type.NUMBER },
                iridescence: { type: Type.NUMBER },
                colorPrimary: { type: Type.STRING },
                colorSecondary: { type: Type.STRING },
            },
            required: ["flowSpeed", "turbulence", "viscosity", "displacementScale", "metalness", "roughness", "clearcoat", "iridescence", "colorPrimary", "colorSecondary"]
        }
      }
    });
    
    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as ArtConfig;
  } catch (e) {
    console.error("AI Generation failed:", e);
    return null;
  }
};