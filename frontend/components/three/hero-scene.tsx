"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingCoin() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.02;
  });
  return (
    <mesh ref={ref} position={[-1.5, 0.5, 0]}>
      <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
      <meshStandardMaterial color="#6EE7FF" metalness={0.9} roughness={0.1} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <div className="h-[360px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#9B5CFF" />
        <Float speed={1.4} rotationIntensity={1.2}>
          <RoundedBox args={[2, 1.2, 0.1]} radius={0.08} position={[1.3, -0.2, 0]}>
            <meshStandardMaterial color="#1e293b" emissive="#6EE7FF" emissiveIntensity={0.3} />
          </RoundedBox>
        </Float>
        <Float speed={2.2}>
          <Torus args={[0.7, 0.12, 16, 100]} position={[0, 1.2, -1]}>
            <meshStandardMaterial color="#9B5CFF" />
          </Torus>
        </Float>
        <RotatingCoin />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
