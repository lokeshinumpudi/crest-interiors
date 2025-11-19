import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, SoftShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const ArchitecturalComposition = () => {
  // Refs for animation
  const panelRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const archRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (panelRef.current) {
        // Gentle vertical float for the slab
        panelRef.current.position.y = 0.5 + Math.sin(t * 0.2) * 0.1;
        panelRef.current.rotation.y = Math.sin(t * 0.1) * 0.05;
    }
    
    if (sphereRef.current) {
        // Independent float for the sphere
        sphereRef.current.position.y = 2.2 + Math.cos(t * 0.3) * 0.15;
    }

    if (archRef.current) {
        // Very slow rotation for the background element
        archRef.current.rotation.z = -0.1 + Math.sin(t * 0.1) * 0.02;
    }
  });

  // Materials - Precise luxury finishes
  const plasterMaterial = new THREE.MeshStandardMaterial({
    color: '#F7F4F0', // Lighter stone 50
    roughness: 0.9,
    metalness: 0.1,
  });

  const concreteMaterial = new THREE.MeshStandardMaterial({
    color: '#D6CCC2', // Stone 200
    roughness: 0.8,
    metalness: 0.0,
  });

  const brassMaterial = new THREE.MeshStandardMaterial({
    color: '#b78a2c', // Deep rich brass
    roughness: 0.15,
    metalness: 1.0,
    envMapIntensity: 1.5
  });

  return (
    <group position={[0.5, -1.5, 0]} rotation={[0, -0.3, 0]}>
      
      {/* Main Vertical Monolith (Slab) - using RoundedBox for soft luxury edges */}
      <mesh ref={panelRef} position={[-1, 0.5, 1]} castShadow receiveShadow>
        <RoundedBox args={[2, 5, 0.2]} radius={0.05} smoothness={4}>
            <primitive object={concreteMaterial} />
        </RoundedBox>
      </mesh>

      {/* The Brass Sphere - The Focus Point */}
      <mesh ref={sphereRef} position={[0.8, 2.2, 1.5]} castShadow receiveShadow>
        <sphereGeometry args={[0.7, 64, 64]} />
        <primitive object={brassMaterial} />
      </mesh>

      {/* Background Arch / Curved Wall */}
      <group ref={archRef} position={[-1, 2, -2]} rotation={[0, 0, -0.1]}>
         <mesh castShadow receiveShadow rotation={[1.5, 0.2, 0]}>
             <torusGeometry args={[3.5, 0.8, 32, 100, 2]} />
             <primitive object={plasterMaterial} />
         </mesh>
      </group>

      {/* Compositional Balance Element - Low Plinth */}
      <mesh position={[2, -1, -0.5]} rotation={[0, 0.4, 0]} receiveShadow>
          <RoundedBox args={[3, 0.5, 3]} radius={0.05} smoothness={4}>
              <primitive object={plasterMaterial} />
          </RoundedBox>
      </mesh>

      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.5} 
        scale={20} 
        blur={2} 
        far={4} 
        color="#292524"
      />
    </group>
  );
};

export const ThreeHero: React.FC = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0 pointer-events-none">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 9], fov: 30 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <fog attach="fog" args={['#F7F4F0', 5, 20]} />
        
        {/* Studio Lighting Setup */}
        <ambientLight intensity={0.8} color="#ffffff" />
        <spotLight 
            position={[5, 8, 5]} 
            angle={0.4} 
            penumbra={0.5} 
            intensity={1} 
            castShadow 
            shadow-bias={-0.0001}
            color="#fffcf0"
        />
        <spotLight 
            position={[-5, 2, -2]} 
            angle={0.5} 
            intensity={0.5} 
            color="#e0f7fa" 
        />

        {/* Studio Preset for cleaner reflections */}
        <Environment preset="studio" />
        <SoftShadows size={8} samples={10} focus={0.5} />

        <ArchitecturalComposition />
      </Canvas>
    </div>
  );
};