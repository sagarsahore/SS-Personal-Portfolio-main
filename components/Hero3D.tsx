import React, { useRef, useMemo, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { SafePresentationControls } from './SafePresentationControls';

// LiDAR Scanning Beam
const ScanningBeam = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            // Move up and down
            meshRef.current.position.y = Math.sin(t * 1.5) * 1.2;
            // Scale pulse
            const s = 1 + Math.sin(t * 10) * 0.02;
            meshRef.current.scale.set(s, 1, s);
        }
    });

    return (
        <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.5, 1.55, 64]} />
            <meshBasicMaterial color="#00ffcc" transparent opacity={0.5} side={THREE.DoubleSide} />
            <mesh rotation={[0, 0, 0]}>
                <ringGeometry args={[0, 1.5, 64]} />
                <meshBasicMaterial color="#00ffcc" transparent opacity={0.05} side={THREE.DoubleSide} />
            </mesh>
        </mesh>
    );
};

// Procedural "Brain" - A glowing wireframe structure inside the head
const NeuralBrain = ({ glitch }: { glitch: boolean }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            meshRef.current.rotation.y = t * 0.2;
            meshRef.current.rotation.z = t * 0.1;
            
            // Glitch Effect
            if (glitch) {
                 meshRef.current.position.x = (Math.random() - 0.5) * 0.2;
                 meshRef.current.scale.setScalar(0.6 + Math.random() * 0.1);
            } else {
                 meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, 0, 0.1);
                 const scale = 1 + Math.sin(t * 2) * 0.05;
                 meshRef.current.scale.setScalar(0.6 * scale);
            }
        }
    });

    return (
        <mesh ref={meshRef} scale={0.6}>
            <icosahedronGeometry args={[1, 2]} />
            <meshStandardMaterial 
                color={glitch ? "#ff0055" : "#6366f1"}
                emissive={glitch ? "#ff0000" : "#4f46e5"}
                emissiveIntensity={glitch ? 5 : 2}
                wireframe 
                transparent
                opacity={0.5}
            />
        </mesh>
    );
};

// The Glass Shell representing the Human Head
const CyberHead = ({ active }: { active: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Subtle head tracking even inside PresentationControls
  useFrame((state) => {
    const { x, y } = state.mouse;
    
    if (groupRef.current) {
        // Smooth head tracking
        const targetRotX = y * 0.2; 
        const targetRotY = x * 0.2; 
        
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.1);
    }
  });

  const glassConfig = {
    backside: true,
    samples: 16,
    resolution: 512,
    transmission: 1,
    roughness: 0.2,
    thickness: 0.5,
    ior: 1.5,
    chromaticAberration: active ? 1 : 0.2, // High chromatic aberration on click
    anisotropy: 0.3,
    distortion: active ? 1.0 : 0.2,
    distortionScale: 0.3,
    temporalDistortion: 0.1,
    attenuationDistance: 0.5,
    attenuationColor: '#ffffff',
    color: '#e0e7ff',
  };

  return (
    <group ref={groupRef}>
        <ScanningBeam />
        
        {/* Skull/Head */}
        <mesh position={[0, 0.2, 0]}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshTransmissionMaterial {...glassConfig} />
            <NeuralBrain glitch={active} />
        </mesh>
        
        {/* Neck */}
        <mesh position={[0, -1, -0.1]} scale={[0.5, 0.8, 0.5]}>
            <cylinderGeometry args={[1, 1, 1, 32]} />
            <MeshTransmissionMaterial {...glassConfig} />
        </mesh>

        {/* Shoulders (simplified) */}
        <mesh position={[0, -1.8, 0]} scale={[2.5, 0.8, 1]}>
             <capsuleGeometry args={[0.5, 1, 4, 16]} />
             <MeshTransmissionMaterial {...glassConfig} roughness={0.4} />
        </mesh>
    </group>
  );
};

const DataStreamParticles = () => {
    const count = 150;
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const speed = 0.5 + Math.random();
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 5 - 2; // Behind the head
            temp.push({ x, y, z, speed });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;
        const time = state.clock.getElapsedTime();

        particles.forEach((p, i) => {
            // Move particles up like data flow
            let yPos = p.y + time * p.speed;
            if (yPos > 5) yPos = -5; // Reset

            dummy.position.set(p.x, yPos % 10 - 5, p.z);
            
            // Pulse scale
            const s = Math.sin(time * 2 + i) * 0.02 + 0.02;
            dummy.scale.set(s, s, s);
            
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshBasicMaterial color="#a5b4fc" transparent opacity={0.3} />
        </instancedMesh>
    );
}

const LoadingPlaceholder = () => (
    <mesh>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="white" wireframe opacity={0.1} transparent />
    </mesh>
)

export const Hero3D: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div 
        className="w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden relative border border-white/5 bg-white/5 backdrop-blur-sm cursor-grab active:cursor-grabbing"
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        onMouseLeave={() => setActive(false)}
    >
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 5, 5]} angle={0.5} penumbra={1} intensity={1} castShadow color="#818cf8" />
        <spotLight position={[-5, 5, 5]} angle={0.5} penumbra={1} intensity={1} castShadow color="#2dd4bf" />
        
        <Suspense fallback={<LoadingPlaceholder />}>
            <Environment preset="city" />
            
            {/* Interactive Controls */}
            <SafePresentationControls
            global={false}
            cursor={false} // We handle cursor in CSS
            snap={true} // Snaps back to center
            speed={1.5}
            zoom={1}
            rotation={[0, 0, 0]}
            polar={[-0.4, 0.4]} // Vertical limits
            azimuth={[-0.4, 0.4]} // Horizontal limits
            >
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <CyberHead active={active} />
                </Float>
            </SafePresentationControls>
        </Suspense>
        
        <DataStreamParticles />
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
      
      {/* Overlay UI */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
         <div className="text-xs text-white/30 uppercase tracking-widest font-mono">
            System: Online<br/>
            Module: CV-LiDAR<br/>
            State: {active ? <span className="text-red-400">ANOMALY</span> : <span className="text-emerald-400">STABLE</span>}
         </div>
         <div className="flex gap-2">
            <div className={`w-2 h-2 rounded-full ${active ? 'bg-red-500 animate-ping' : 'bg-indigo-500 animate-pulse'}`}></div>
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse delay-150"></div>
         </div>
      </div>
    </div>
  );
};
