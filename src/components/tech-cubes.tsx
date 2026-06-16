"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Text } from "@react-three/drei";
import { Group } from "three";
import { useRef } from "react";

const labels = [
  { text: "Agentic AI", position: [-1.9, 1.2, 0] as [number, number, number] },
  { text: "LLMs", position: [1.2, 0.8, -0.4] as [number, number, number] },
  { text: "RAG", position: [-0.5, -1.2, 0.5] as [number, number, number] },
  { text: "SAP AI", position: [2.2, -0.8, -0.7] as [number, number, number] },
  { text: "ServiceNow", position: [0.2, 2, -1] as [number, number, number] },
];

function CubeCluster() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.2;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
  });

  return (
    <group ref={group}>
      {labels.map((item, index) => (
        <Float key={item.text} speed={1.2 + index * 0.08} floatIntensity={0.7} rotationIntensity={0.45}>
          <group position={item.position}>
            <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.12} smoothness={4}>
              <meshStandardMaterial color="#101010" emissive="#d4a017" emissiveIntensity={0.18} metalness={0.7} roughness={0.18} />
            </RoundedBox>
            <Text position={[0, 0, 0.62]} fontSize={0.16} color="#f7db96" maxWidth={0.9} textAlign="center">
              {item.text}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}

export function TechCubes() {
  return (
    <div className="h-[420px]">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 46 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#fff0c2" />
        <pointLight position={[-4, -4, 0]} intensity={1.6} color="#d4a017" />
        <CubeCluster />
      </Canvas>
    </div>
  );
}
