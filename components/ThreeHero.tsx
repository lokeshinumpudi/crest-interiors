
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, SoftShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useArt } from '../context/ArtContext';

// --- 1. THE LIQUID PAINT WALL (PROCEDURAL) ---
const LiquidWall = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mode, config } = useArt();
  
  // Geometry settings
  const width = 12;
  const height = 16;
  // Optimized segments for performance vs visual quality
  const segmentsW = 100; 
  const segmentsH = 100;

  // Create geometry with vertex colors if needed
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, height, segmentsW, segmentsH);

    if (mode === 'paint') {
        const count = geo.attributes.position.count;
        const colors = new Float32Array(count * 3);
        const pos = geo.attributes.position;
        
        // Define a vibrant, architectural paint palette
        const palette = [
            new THREE.Color('#E74C3C'), // Vivid Red
            new THREE.Color('#3498DB'), // Blue
            new THREE.Color('#F1C40F'), // Yellow
            new THREE.Color('#9B59B6'), // Purple
            new THREE.Color('#1ABC9C'), // Teal
            new THREE.Color('#F7F4F0'), // Off-white
        ];

        for (let i = 0; i < count; i++) {
             const x = pos.getX(i);
             // Create "lanes" of color
             // Normalize x and map to palette index
             const nX = (x + width/2) / width;
             const laneNoise = Math.sin(x * 0.5) * 0.1; // Slight wavy lane edges
             const laneIndex = Math.floor((nX + laneNoise) * 8); // 8 lanes
             const color = palette[Math.abs(laneIndex) % palette.length];
             
             colors[i * 3] = color.r;
             colors[i * 3 + 1] = color.g;
             colors[i * 3 + 2] = color.b;
        }
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
    
    return geo;
  }, [mode]); // Re-generate when mode switches

  // Generate random offsets for each vertex to break repetition
  const vertexData = useMemo(() => {
    const count = geometry.attributes.position.count;
    const randomOffsets = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      randomOffsets[i] = Math.random() * Math.PI * 2;
    }
    return { randomOffsets, originalPos: geometry.attributes.position.array };
  }, [geometry]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const { position } = meshRef.current.geometry.attributes;
    const { randomOffsets, originalPos } = vertexData;
    
    for (let i = 0; i < position.count; i++) {
      const ix = i * 3;
      const x = originalPos[ix];
      const y = originalPos[ix + 1];
      
      // 1. CONFIGURABLE GRAVITY FLOW
      // config.flowSpeed controls how fast the paint slides down
      // 0.15 is base speed
      const flowTime = time * 0.15 * config.flowSpeed; 

      // 2. PROCEDURAL NOISE LAYERS
      // config.viscosity changes the 'scale' or frequency of the waves
      // config.turbulence changes the 'amplitude' of the chaotic noise
      
      // Layer A: Large Swells
      const largeSwell = Math.sin(x * 0.62 * config.viscosity + flowTime) * 
                         Math.cos(y * 0.27 * config.viscosity + flowTime) * 0.5;

      // Layer B: Rivulets (Vertical streaks)
      // Paint mode might want distincter rivulets
      const rivuletFreq = mode === 'paint' ? 4.0 : 2.5;
      const rivulets = Math.sin(x * rivuletFreq * config.viscosity + randomOffsets[i]) * 
                       Math.sin((y + flowTime * 1.5) * 0.5);

      // Layer C: Surface Turbulence
      const turbulence = Math.sin((x * 4.0) + (y * 4.0) + time) * 0.05 * config.turbulence; 

      // Combine
      const combinedZ = largeSwell + (rivulets * 0.8) + turbulence;
      
      position.setZ(i, combinedZ);
    }

    position.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh 
      ref={meshRef} 
      geometry={geometry}
      position={[3, 0, -1]} 
      rotation={[0, -0.25, 0]} 
      receiveShadow
      castShadow
    >
      {mode === 'gold' ? (
          <meshPhysicalMaterial 
            color="#B59457" 
            roughness={0.15} 
            metalness={0.7} 
            clearcoat={1.0} 
            clearcoatRoughness={0.1}
            reflectivity={1}
            envMapIntensity={1.2}
            side={THREE.DoubleSide}
          />
      ) : (
          <meshPhysicalMaterial 
            vertexColors={true} // Enable per-vertex coloring
            roughness={0.2} 
            metalness={0.1} // Paint is less metallic, more glossy
            clearcoat={1.0} // High gloss wet paint
            clearcoatRoughness={0.2}
            reflectivity={0.5}
            envMapIntensity={1.0}
            side={THREE.DoubleSide}
          />
      )}
    </mesh>
  );
};

// --- 2. DYNAMIC LIGHTING ---
const DynamicLights = () => {
  const lightRef = useRef<THREE.SpotLight>(null);

  useFrame((state) => {
    if (!lightRef.current) return;
    const t = state.clock.getElapsedTime();
    lightRef.current.position.x = 4 + Math.sin(t * 0.2) * 3;
    lightRef.current.position.y = 6 + Math.cos(t * 0.3) * 2;
  });

  return (
    <>
      <spotLight 
        ref={lightRef}
        position={[5, 8, 8]} 
        angle={0.5} 
        penumbra={0.4} 
        intensity={1.5} 
        castShadow 
        shadow-bias={-0.0001}
        shadow-mapSize={[1024, 1024]}
        color="#FFF5E6"
      />
      <spotLight position={[-6, 4, -2]} intensity={1.2} color="#e0f2fe" angle={0.6} />
      <ambientLight intensity={0.3} />
    </>
  );
};

// --- 3. CAMERA PARALLAX ---
const CameraParallax = () => {
  const { camera } = useThree();

  useFrame(() => {
    if (typeof window === 'undefined') return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight) return;

    const targetZ = 12 + (scrollY * 0.002);
    const targetY = 0 - (scrollY * 0.001);

    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
  });

  return null;
};

export const ThreeHero: React.FC = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0 pointer-events-none">
      <Canvas
        shadows
        dpr={[1, 1.25]} 
        camera={{ position: [0, 0, 12], fov: 24 }} 
        gl={{ 
          antialias: true, 
          toneMapping: THREE.ACESFilmicToneMapping, 
          toneMappingExposure: 1.0 
        }}
      >
        <fog attach="fog" args={['#F7F4F0', 8, 25]} />
        
        <CameraParallax />
        <DynamicLights />
        
        <Environment preset="city" blur={0.6} background={false} /> 
        
        <SoftShadows size={12} samples={8} focus={0.5} />

        <LiquidWall />
        
      </Canvas>
    </div>
  );
};
