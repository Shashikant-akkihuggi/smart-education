import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export function RobotAvatar3D({ position = [0, 1.8, 0], onInteract }) {
  const groupRef = useRef();
  const antennaLightRef = useRef();
  const rightArmRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating bob
      groupRef.current.position.y = position[1] + Math.sin(t * 2) * 0.15;
      // Slight gentle wobble
      groupRef.current.rotation.y = Math.sin(t * 0.8) * 0.2;
    }

    if (rightArmRef.current) {
      // Friendly waving motion
      rightArmRef.current.rotation.z = -0.5 + Math.sin(t * 4) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position} onClick={onInteract} cursor="pointer">
      {/* Speech prompt above robot */}
      <Html position={[0, 1.7, 0]} center distanceFactor={12}>
        <div
          onClick={onInteract}
          className="cursor-pointer select-none px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-purple-300 shadow-xl text-purple-900 font-bubble text-xs font-bold whitespace-nowrap hover:scale-105 transition-transform flex items-center gap-1.5"
        >
          <span className="text-sm">🤖</span>
          <span>Hi, I'm Mitra! Click me!</span>
        </div>
      </Html>

      {/* Head */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[0.7, 0.55, 0.55]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Screen / Visor */}
      <mesh position={[0, 0.8, 0.28]}>
        <planeGeometry args={[0.55, 0.35]} />
        <meshBasicMaterial color="#0f172a" />
      </mesh>

      {/* Eyes (Glowing Sky Blue) */}
      <mesh position={[-0.14, 0.82, 0.29]}>
        <circleGeometry args={[0.07, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      <mesh position={[0.14, 0.82, 0.29]}>
        <circleGeometry args={[0.07, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Cheeks */}
      <mesh position={[-0.2, 0.73, 0.29]}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#fb7185" />
      </mesh>
      <mesh position={[0.2, 0.73, 0.29]}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#fb7185" />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 1.15, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
        <meshStandardMaterial color="#0284c7" />
      </mesh>
      <mesh position={[0, 1.28, 0]} ref={antennaLightRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.38, 0.8, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.1, 8]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>
      <mesh position={[0.38, 0.8, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.1, 8]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>

      {/* Body / Torso */}
      <mesh position={[0, 0.25, 0]} castShadow>
        <boxGeometry args={[0.6, 0.55, 0.45]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} />
      </mesh>

      {/* Chest Heart / Emblem */}
      <mesh position={[0, 0.28, 0.24]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#f43f5e" emissive="#f43f5e" emissiveIntensity={0.6} />
      </mesh>

      {/* Left Arm (Relaxed) */}
      <mesh position={[-0.38, 0.3, 0]}>
        <capsuleGeometry args={[0.06, 0.25, 4, 8]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>

      {/* Right Arm (Waving) */}
      <group position={[0.38, 0.4, 0]} ref={rightArmRef}>
        <mesh position={[0.1, 0.15, 0]}>
          <capsuleGeometry args={[0.06, 0.25, 4, 8]} />
          <meshStandardMaterial color="#e2e8f0" />
        </mesh>
      </group>

      {/* Jet Propulsion Ring / Glow Base */}
      <mesh position={[0, -0.05, 0]}>
        <torusGeometry args={[0.2, 0.04, 8, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      <pointLight position={[0, -0.15, 0]} color="#38bdf8" intensity={1.5} distance={1.5} />
    </group>
  );
}

