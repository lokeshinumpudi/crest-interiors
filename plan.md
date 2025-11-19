# Feature: AI-Powered Designer Pad (Gemini Integration)

**Goal:** Allow users to generate complex 3D art configurations (materials, physics, colors) using natural language prompts.

## Architecture

### 1. AI Service Layer (`services/ai.ts`)
*   **Model:** `gemini-2.5-flash`
*   **Function:** `generateArtConfig(prompt: string): Promise<ArtConfig>`
*   **Prompt Engineering:**
    *   System instruction acting as a "3D Art Director".
    *   Input: User description (e.g., "Molten lava flowing slowly").
    *   Output: Strict JSON matching the `ArtConfig` interface.
    *   Mapping Logic:
        *   "Slime/Goo" -> High viscosity, high clearcoat, low roughness.
        *   "Metal" -> High metalness, low roughness.
        *   "Cyberpunk" -> Neon colors, high turbulence.

### 2. State Management (`context/ArtContext.tsx`)
*   Add state: `isGenerating` (boolean).
*   Add function: `generateArt(prompt: string)`.
*   Logic:
    1.  Set loading state.
    2.  Call `aiService.generateArtConfig`.
    3.  Update `config` state with result.
    4.  Switch `mode` to a generic 'custom' mode or map to existing modes if applicable.

### 3. UI Layer (`components/ArtSettings.tsx`)
*   Add a new Tab: **"AI Studio"**.
*   Components:
    *   `TextArea`: For user prompt.
    *   `Button`: "Generate" (with loading spinner).
    *   `PresetSave`: Option to save generated config as a local preset.

### 4. 3D Rendering (`components/ThreeHero.tsx`)
*   No major changes needed if `LiquidWall` is fully data-driven.
*   Ensure `useEffect` hooks trigger geometry regeneration if the AI changes the `mode` or `colors`.

## Data Structure (Target JSON)

```typescript
interface ArtConfig {
  flowSpeed: number;      // 0.0 - 5.0
  turbulence: number;     // 0.0 - 3.0
  viscosity: number;      // 0.1 - 5.0
  displacementScale: number; // 0.0 - 3.0
  
  metalness: number;      // 0.0 - 1.0
  roughness: number;      // 0.0 - 1.0
  clearcoat: number;      // 0.0 - 1.0
  iridescence: number;    // 0.0 - 1.0
  
  colorPrimary: string;   // Hex
  colorSecondary: string; // Hex
}
```

## Implementation Steps

1.  **Setup API Key**: Ensure `process.env.API_KEY` is accessible.
2.  **Create Service**: Implement `services/ai.ts` with `GoogleGenAI` SDK.
3.  **Update Context**: Expose the generation function.
4.  **Build UI**: Add the input form to `ArtSettings`.
5.  **Test**: Verify "Cyberpunk", "Milk", "Liquid Gold", "Concrete" prompts.
