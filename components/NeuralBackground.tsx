import React, { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMobileOptimization } from '../hooks/useMobileOptimization';

const NeuralNetwork = ({ particleCount = 250 }: { particleCount?: number }) => {
    const pointsRef = useRef<THREE.Points>(null);
    const mousePosition = useRef(new THREE.Vector3(0, 0, 0));

    // Generate neurons (particles)
    const { positions, colors } = useMemo(() => {
        const count = particleCount;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        // Vision/Eye shape distribution
        for (let i = 0; i < count; i++) {
            const theta = THREE.MathUtils.randFloatSpread(Math.PI * 2); 
            const phi = THREE.MathUtils.randFloatSpread(Math.PI); 
            const r = 15 + Math.random() * 5;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi) * 0.5;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Vision-themed colors
            const color = new THREE.Color();
            if (Math.random() > 0.8) color.set("#DC2626");
            else if (Math.random() > 0.5) color.set("#0066FF");
            else color.set("#ffffff");

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        
        return { positions, colors };
    }, [particleCount]);

    useFrame((state) => {
        if (pointsRef.current) {
            // Gentle rotation - reduced for performance
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
            pointsRef.current.rotation.z = state.clock.elapsedTime * 0.015;

            // Mouse Interaction
            const x = (state.mouse.x * 15);
            const y = (state.mouse.y * 15);
            mousePosition.current.lerp(new THREE.Vector3(x, y, 5), 0.05);
            
            // Subtle breathing effect
            const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
            pointsRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group>
            <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.12}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.5}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
            
            {/* Central glow */}
            <mesh position={[0,0,-5]}>
                <sphereGeometry args={[8, 16, 16]} />
                <meshBasicMaterial color="#000000" />
            </mesh>
            <mesh position={[0,0,-8]}>
                <sphereGeometry args={[12, 16, 16]} />
                <meshBasicMaterial color="#DC2626" transparent opacity={0.03} blending={THREE.AdditiveBlending} />
            </mesh>
        </group>
    );
}

const BackgroundEnvironment = () => {
     useFrame(({ camera, mouse }) => {
        const targetX = mouse.x * 1.5;
        const targetY = mouse.y * 1.5;
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.015);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.015);
        camera.lookAt(0, 0, 0);
    });
    return null;
}

// Lightweight fallback for reduced motion or very slow devices
const StaticBackground: React.FC = () => (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0066FF05_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/80" />
    </div>
);

export const NeuralBackground: React.FC = () => {
    const { shouldRender3D, particleCount, isLowPower, isMobile, dpr } = useMobileOptimization();

    // Use static background if 3D is disabled
    if (!shouldRender3D) {
        return <StaticBackground />;
    }

    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#030303]">
            <Canvas
                camera={{ position: [0, 0, 30], fov: 60 }}
                gl={{ 
                    antialias: false, // Disable for performance
                    powerPreference: "high-performance",
                    alpha: true,
                    stencil: false,
                    depth: false
                }}
                dpr={dpr} // Dynamic pixel ratio based on device
                frameloop={isMobile ? "demand" : "always"} // Only render on demand for mobile
                performance={{ min: 0.5 }} // Allow frame drops
            >
                <Suspense fallback={null}>
                    <NeuralNetwork particleCount={particleCount} />
                    {!isMobile && <BackgroundEnvironment />}
                    <fog attach="fog" args={['#030303', 10, 60]} />
                    <ambientLight intensity={0.4} />
                </Suspense>
            </Canvas>
            
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/80 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] opacity-80 pointer-events-none" />
        </div>
    );
};