import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, SpotLight } from '@react-three/drei';
import * as THREE from 'three';
import { SafePresentationControls } from './SafePresentationControls';

// The Speaker (Abstract Human Form)
const Speaker = () => {
    return (
        <group position={[0, 0, 0]}>
             {/* Body */}
            <mesh position={[0, 0.5, 0]}>
                <capsuleGeometry args={[0.3, 1, 4, 16]} />
                <MeshTransmissionMaterial 
                    backside
                    samples={8} // Reduced samples for performance
                    resolution={256} // Reduced resolution for performance
                    transmission={1}
                    roughness={0.1}
                    thickness={0.5}
                    ior={1.5}
                    chromaticAberration={0.3}
                    anisotropy={0.3}
                    distortion={0.2}
                    distortionScale={0.3}
                    temporalDistortion={0.1}
                    color="#a5b4fc"
                />
            </mesh>
            {/* Head */}
            <mesh position={[0, 1.3, 0]}>
                <sphereGeometry args={[0.25, 32, 32]} />
                 <MeshTransmissionMaterial 
                    backside
                    samples={8}
                    resolution={256}
                    transmission={1}
                    roughness={0.1}
                    thickness={0.5}
                    ior={1.5}
                    color="#e0e7ff"
                />
            </mesh>
            {/* Podium */}
            <mesh position={[0, -0.5, 0.5]} rotation={[0, 0, 0]}>
                <boxGeometry args={[1, 1.2, 0.5]} />
                <meshStandardMaterial color="#312e81" roughness={0.2} metalness={0.8} opacity={0.8} transparent />
            </mesh>
        </group>
    );
};

// The Audience (Instanced Particles)
const Audience = () => {
    const count = 150; // Optimized count
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    
    // Generate positions in a semi-circle
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const angle = Math.PI + (Math.random() - 0.5) * Math.PI; // Semi-circle behind camera/facing speaker
            const radius = 3 + Math.random() * 5;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius + 2; // Offset back
            const y = -1 + Math.random() * 0.2;
            const speed = 0.5 + Math.random();
            temp.push({ x, y, z, speed, initialY: y });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        particles.forEach((p, i) => {
            // Bobbing effect (clapping/attention)
            const yPos = p.initialY + Math.sin(time * p.speed * 2 + i) * 0.05;
            
            // Look at speaker
            dummy.position.set(p.x, yPos, p.z);
            dummy.lookAt(0, 0.5, 0);
            
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <coneGeometry args={[0.1, 0.3, 8]} />
            <meshStandardMaterial color="#4f46e5" emissive="#312e81" roughness={0.5} />
        </instancedMesh>
    );
};

const DynamicSpotlight = () => {
    const lightRef = useRef<THREE.SpotLight>(null);
    useFrame((state) => {
        if (lightRef.current) {
            // Light follows mouse slightly to create dynamic shadows
            lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, state.mouse.x * 5, 0.1);
            lightRef.current.position.z = THREE.MathUtils.lerp(lightRef.current.position.z, 2 + state.mouse.y * 2, 0.1);
            lightRef.current.target.position.set(0, 0, 0);
            lightRef.current.target.updateMatrixWorld();
        }
    });
    
    return (
        <SpotLight 
            ref={lightRef}
            position={[0, 5, 2]} 
            angle={0.3} 
            penumbra={0.5} 
            intensity={2} 
            castShadow 
            color="white" 
        />
    );
};

export const Presenter3D: React.FC = () => {
    return (
        <div className="w-full h-[500px] rounded-3xl overflow-hidden relative border border-white/5 bg-gradient-to-b from-indigo-900/20 to-black/40 cursor-grab active:cursor-grabbing">
            <Canvas shadows dpr={[1, 1.5]} camera={{ position: [4, 2, 6], fov: 45 }}>
                <ambientLight intensity={0.2} />
                
                <DynamicSpotlight />
                
                {/* Blue ambient light for crowd */}
                <pointLight position={[0, 2, -5]} intensity={1} color="#4338ca" />
                
                <SafePresentationControls
                    global={false}
                    cursor={false}
                    snap={true}
                    speed={1.5}
                    zoom={1}
                    rotation={[0, 0, 0]}
                    polar={[-0.2, 0.2]}
                    azimuth={[-0.4, 0.2]} 
                >
                    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                        <Speaker />
                    </Float>
                </SafePresentationControls>
                
                <Audience />
                
                <Environment preset="city" />
            </Canvas>
            
            {/* Overlay */}
            <div className="absolute top-6 right-6 font-mono text-[10px] text-white/30 uppercase tracking-widest text-right pointer-events-none">
                Simulated Event<br/>
                Keynote Address
            </div>
            <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/30 uppercase tracking-widest pointer-events-none">
                Drag to rotate view
            </div>
        </div>
    );
};
