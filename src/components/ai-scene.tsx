"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sphere, Text } from "@react-three/drei";
import { Group, Mesh } from "three";
import { useMemo, useRef } from "react";

function NeuralSphere() {
  const group = useRef<Group>(null);
  const nodeRefs = useRef<Mesh[]>([]);
  const nodes = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => {
        const angle = (index / 18) * Math.PI * 2;
        const radius = index % 2 === 0 ? 2.25 : 1.75;
        const y = Math.sin(index * 1.3) * 1.2;
        return {
          position: [
            Math.cos(angle) * radius,
            y,
            Math.sin(angle) * radius,
          ] as [number, number, number],
        };
      }),
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.16;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;

    nodeRefs.current.forEach((node, index) => {
      if (!node) return;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.8 + index) * 0.14;
      node.scale.setScalar(scale);
    });
  });

  return (
    <group ref={group}>
      <Sphere args={[1.4, 48, 48]}>
        <meshStandardMaterial
          color="#0f0f0f"
          metalness={0.8}
          roughness={0.18}
          emissive="#d4a017"
          emissiveIntensity={0.25}
          wireframe
        />
      </Sphere>

      {nodes.map((node, index) => (
        <mesh
          key={index}
          ref={(element) => {
            if (element) nodeRefs.current[index] = element;
          }}
          position={node.position}
        >
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#f7d88f" emissive="#d4a017" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function HolographicAssistant() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.08 - 0.15;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.22;
  });

  return (
    <group ref={group} position={[3.1, -0.4, 0]}>
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshStandardMaterial color="#f6e2b0" emissive="#d4a017" emissiveIntensity={0.12} transparent opacity={0.72} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <capsuleGeometry args={[0.44, 1.35, 8, 16]} />
        <meshStandardMaterial color="#89d7ff" emissive="#5ab6ff" emissiveIntensity={0.24} transparent opacity={0.35} />
      </mesh>
      <mesh position={[-0.72, 0.62, 0.05]} rotation={[0, 0, -0.8]}>
        <capsuleGeometry args={[0.12, 0.9, 6, 12]} />
        <meshStandardMaterial color="#89d7ff" emissive="#5ab6ff" emissiveIntensity={0.24} transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.74, 0.68, 0.02]} rotation={[0, 0, 0.8]}>
        <capsuleGeometry args={[0.12, 0.95, 6, 12]} />
        <meshStandardMaterial color="#89d7ff" emissive="#5ab6ff" emissiveIntensity={0.26} transparent opacity={0.38} />
      </mesh>
      <Text position={[0, -1.1, 0]} fontSize={0.16} color="#f6d992">
        Holographic AI Assistant
      </Text>
    </group>
  );
}

export function AiScene() {
  return (
    <div className="glass absolute inset-0 overflow-hidden rounded-[2.5rem]">
      <Canvas camera={{ position: [0, 0.6, 8], fov: 48 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[4, 5, 3]} intensity={1.6} color="#fff3cb" />
        <pointLight position={[-4, -2, 2]} intensity={2} color="#d4a017" />
        <Environment preset="city" />
        <Float speed={1.4} rotationIntensity={0.24} floatIntensity={0.3}>
          <NeuralSphere />
        </Float>
        <HolographicAssistant />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
