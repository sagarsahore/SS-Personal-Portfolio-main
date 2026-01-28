import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { isMobileDevice, isLowPowerDevice, prefersReducedMotion } from '../hooks/useMobileOptimization';

const ParticleWave = ({ particleCount = 2000 }: { particleCount?: number }) => {
    const ref = useRef<THREE.Points>(null);
    
    // Generate particles in a cube/grid
    const particles = useMemo(() => {
        const count = particleCount;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();
        
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 10;
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            
            // Computer Vision colors: Cyan/Teal/White
            if (i % 2 === 0) color.set("#2dd4bf"); // Teal
            else color.set("#a5b4fc"); // Indigo
            
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return { positions, colors, count };
    }, [particleCount]);

    useFrame((state) => {
        if (!ref.current || !ref.current.geometry || !ref.current.geometry.attributes.position) return;
        
        const t = state.clock.getElapsedTime();
        const positions = ref.current.geometry.attributes.position.array as Float32Array;
        
        // Morph particles based on time
        for (let i = 0; i < particles.count; i++) {
            const i3 = i * 3;
            if (i3 + 2 >= positions.length) break;

            const x = particles.positions[i3];
            const z = particles.positions[i3 + 2];
            
            // Create a wave effect
            positions[i3 + 1] = Math.sin(t * 0.5 + x * 0.5) * 2 + Math.cos(t * 0.3 + z * 0.5) * 2;
        }
        
        ref.current.geometry.attributes.position.needsUpdate = true;
        ref.current.rotation.y = t * 0.1;
    });

    return (
        <Points ref={ref} positions={particles.positions} colors={particles.colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.15}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    );
}

// Static fallback for low-power devices
const StaticVision: React.FC = () => (
    <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#0A0A0A] via-[#0A1A2A] to-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2dd4bf10_0%,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(5,5,5,0.8)]"></div>
        <div className="absolute bottom-4 left-4 font-mono text-[10px] text-teal-400 uppercase tracking-widest bg-teal-900/20 px-2 py-1 rounded">
            Point Cloud Visualization
        </div>
    </div>
);

export const Vision3D: React.FC = () => {
  const [shouldRender3D, setShouldRender3D] = useState(true);
  const [particleCount, setParticleCount] = useState(2000);

  useEffect(() => {
    const mobile = isMobileDevice();
    const lowPower = isLowPowerDevice();
    const reducedMotion = prefersReducedMotion();

    if (reducedMotion || lowPower) {
      setShouldRender3D(false);
    } else if (mobile) {
      setParticleCount(500); // Significantly reduce particles on mobile
    }
  }, []);

  if (!shouldRender3D) {
    return <StaticVision />;
  }

  return (
    <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden relative">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 60 }} 
        gl={{ 
          alpha: true,
          antialias: false,
          powerPreference: "high-performance"
        }} 
        dpr={[1, 1.5]}
        frameloop="always" // Keep animation running for particle wave
        performance={{ min: 0.3 }} // Allow frame drops for performance
      >
        <ParticleWave particleCount={particleCount} />
      </Canvas>
       <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(5,5,5,0.8)]"></div>
       <div className="absolute bottom-4 left-4 font-mono text-[10px] text-teal-400 uppercase tracking-widest bg-teal-900/20 px-2 py-1 rounded">
           Real-time Point Cloud
       </div>
    </div>
  );
};