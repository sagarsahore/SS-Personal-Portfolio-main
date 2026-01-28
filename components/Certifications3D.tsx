import React, { useRef, Suspense, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Text, Float, Environment, Center, Sparkles, Grid } from '@react-three/drei';
import * as THREE from 'three';

interface Cert3DProps {
    activeCert: any;
}

const categoryColors: Record<string, string> = {
    Salesforce: '#00A1E0', // Salesforce Blue
    AWS: '#FF9900',        // AWS Orange
    AI: '#EF4444',         // Red
    Google: '#4285F4',     // Google Blue
    Stanford: '#8C1515',   // Stanford Cardinal
};

// Adjust camera distance based on screen width to fit card
const ResponsiveCamera = () => {
  const { camera, size } = useThree();
  
  useEffect(() => {
     // If width is small (mobile), move camera back
     if (size.width < 600) {
        camera.position.z = 9; 
     } else if (size.width < 900) {
        camera.position.z = 7.5;
     } else {
        camera.position.z = 6; 
     }
     camera.updateProjectionMatrix();
  }, [size, camera]);

  return null;
}

// A scanning laser line that moves up and down
const ScanningBeam = ({ color }: { color: string }) => {
    const ref = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if (ref.current) {
            // Scan continuously
            const t = state.clock.getElapsedTime();
            ref.current.position.y = Math.sin(t * 1.5) * 1.0;
            
            // Random glitch scale
            if (Math.random() > 0.98) {
                ref.current.scale.x = 0.9 + Math.random() * 0.2;
            } else {
                ref.current.scale.x = 1;
            }
        }
    });

    return (
        <group>
            {/* The Beam Line */}
            <mesh ref={ref} position={[0, 0, 0.06]}>
                <planeGeometry args={[3.2, 0.03]} />
                <meshBasicMaterial color={color} transparent opacity={0.8} toneMapped={false} />
            </mesh>
            {/* Faint trail plane */}
             <mesh position={[0, 0, 0.055]}>
                <planeGeometry args={[3.2, 2.0]} />
                 <meshBasicMaterial color={color} transparent opacity={0.03} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} depthWrite={false} />
            </mesh>
        </group>
    )
}

const HolographicCard = ({ cert, color }: { cert: any, color: string }) => {
    const groupRef = useRef<THREE.Group>(null);
    
    // Create geometry once
    const boxGeo = useMemo(() => new THREE.BoxGeometry(3.4, 2.1, 0.05), []);
    const edgesGeo = useMemo(() => new THREE.EdgesGeometry(boxGeo), [boxGeo]);

    useFrame((state) => {
        const { x, y } = state.mouse;
        if (groupRef.current) {
            // Dynamic tilt
            const targetRotX = -y * 0.3; 
            const targetRotY = x * 0.5;
            
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.1);
            
            // Parallax
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x * 0.1, 0.1);
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, y * 0.1, 0.1);
        }
    });

    return (
        <group scale={0.85}>
            <Float floatIntensity={0.5} rotationIntensity={0.2} speed={2}>
                <group ref={groupRef}>
                    
                    {/* 1. The Glass Body - Unified Color Tint */}
                    <mesh geometry={boxGeo}>
                        <MeshTransmissionMaterial 
                            backside={false}
                            samples={12}
                            resolution={512}
                            transmission={0.9} 
                            roughness={0.1}
                            thickness={0.1}
                            ior={1.2}
                            chromaticAberration={1} // Strong holographic splitting
                            anisotropy={0.5}
                            distortion={0.3}
                            distortionScale={0.3}
                            temporalDistortion={0.2} // Wobbly data feel
                            color={color} // Base tint
                            attenuationColor={color} // Inner absorption
                            attenuationDistance={2}
                            toneMapped={false} // Glowy
                        />
                    </mesh>

                    {/* 2. The Frame (Clean Edges, No X Lines) */}
                    <lineSegments geometry={edgesGeo}>
                        <lineBasicMaterial color={color} transparent opacity={0.6} toneMapped={false} linewidth={2} />
                    </lineSegments>

                    {/* 3. Holographic Scanning Beam */}
                    <ScanningBeam color={color} />

                    {/* 4. Tech Corners - Anchors */}
                    {[-1.71, 1.71].map((x) => (
                        [-1.06, 1.06].map((y) => (
                            <mesh key={`${x}-${y}`} position={[x, y, 0]}>
                                <boxGeometry args={[0.1, 0.1, 0.06]} />
                                <meshBasicMaterial color={color} toneMapped={false} />
                            </mesh>
                        ))
                    ))}

                    {/* 5. Content Layer - Floating Text */}
                    <group position={[0, 0, 0.06]}>
                        
                        {/* Top Label */}
                        <Text
                            position={[0, 0.85, 0]}
                            fontSize={0.09}
                            color={color}
                            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                            anchorX="center"
                            anchorY="middle"
                            letterSpacing={0.25}
                        >
                            {cert.category.toUpperCase()} // SECURE
                        </Text>

                        {/* Main Title */}
                        <Text
                            position={[0, 0.15, 0]}
                            fontSize={0.24}
                            color="#ffffff" 
                            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={3.0}
                            textAlign="center"
                            lineHeight={1.1}
                            outlineWidth={0.005}
                            outlineColor={color}
                        >
                            {cert.title}
                        </Text>

                        {/* Issuer */}
                        <Text
                            position={[0, -0.4, 0]}
                            fontSize={0.11}
                            color="#e4e4e7"
                            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                            anchorX="center"
                            anchorY="middle"
                            letterSpacing={0.05}
                        >
                            Authored by {cert.issuer}
                        </Text>

                        {/* ID Footer */}
                        <group position={[0, -0.85, 0]}>
                            <mesh position={[0, 0.12, 0]}>
                                <planeGeometry args={[1.5, 0.005]} />
                                <meshBasicMaterial color={color} transparent opacity={0.6} toneMapped={false} />
                            </mesh>
                            <Text
                                fontSize={0.08}
                                color={color}
                                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                                anchorX="center"
                                anchorY="middle"
                                letterSpacing={0.15}
                            >
                                {cert.credentialId || 'ID: PENDING'}
                            </Text>
                        </group>
                    </group>

                </group>
            </Float>
        </group>
    );
};

const BackgroundEnvironment = ({ color }: { color: string }) => {
    return (
        <group>
            {/* Digital Floor Grid */}
            <Grid
                position={[0, -2.5, 0]}
                args={[20, 20]}
                cellSize={0.5}
                cellThickness={1}
                cellColor={new THREE.Color(color).multiplyScalar(0.5)}
                sectionSize={2}
                sectionThickness={1.5}
                sectionColor={new THREE.Color(color).multiplyScalar(0.8)}
                fadeDistance={12}
                fadeStrength={2}
                infiniteGrid
            />

            {/* Floating Background Particles/Data */}
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                {Array.from({ length: 15 }).map((_, i) => (
                    <mesh 
                        key={i} 
                        position={[
                            (Math.random() - 0.5) * 10, 
                            (Math.random() - 0.5) * 6, 
                            -3 - Math.random() * 5
                        ]}
                        rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
                        scale={Math.random() * 0.5 + 0.1}
                    >
                        <octahedronGeometry args={[0.5, 0]} />
                        <meshBasicMaterial 
                            color={color} 
                            transparent 
                            opacity={0.1} 
                            wireframe 
                            toneMapped={false} 
                        />
                    </mesh>
                ))}
            </Float>

             {/* Volumetric Glow behind the card */}
             <mesh position={[0, 0, -4]}>
                <planeGeometry args={[10, 10]} />
                <meshBasicMaterial color={color} transparent opacity={0.05} blending={THREE.AdditiveBlending} depthWrite={false} />
            </mesh>
        </group>
    )
}

export const Certifications3D: React.FC<Cert3DProps> = ({ activeCert }) => {
    const activeColor = categoryColors[activeCert.category] || '#DC2626';

    return (
        <div 
            className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-inner transition-colors duration-1000"
            style={{
                background: `radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)`,
                boxShadow: `inset 0 0 100px ${activeColor}10` // Subtle inner glow tint
            }}
        >
            <Canvas dpr={[1, 2]} gl={{ antialias: true, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }} camera={{ position: [0, 0, 6], fov: 35 }}>
                <ResponsiveCamera />
                <color attach="background" args={['#020202']} />
                
                {/* Lighting setup to emphasize the glow */}
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="white" />
                <pointLight position={[-10, -5, 5]} intensity={2} color={activeColor} distance={20} />
                
                <Suspense fallback={null}>
                    <Environment preset="city" blur={0.8} />
                    
                    <Center>
                        <HolographicCard cert={activeCert} color={activeColor} />
                    </Center>
                    
                    <BackgroundEnvironment color={activeColor} />

                    <Sparkles 
                        count={60} 
                        scale={8} 
                        size={3} 
                        speed={0.2} 
                        opacity={0.5} 
                        color={activeColor}
                    />
                </Suspense>
            </Canvas>
            
            {/* Minimal Overlay */}
            <div className="absolute top-8 left-8 pointer-events-none">
                 <div className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeColor, boxShadow: `0 0 10px ${activeColor}` }}></div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Holographic Preview</span>
                 </div>
            </div>
        </div>
    );
};