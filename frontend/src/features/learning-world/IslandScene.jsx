import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { RobotAvatar3D } from './RobotAvatar3D';
import { ZoneMarker } from './ZoneMarker';
import { LEARNING_ZONES } from '../../core/config';

// Low-poly cloud component that drifts
function Cloud({ position, speed = 0.2, scale = 1 }) {
  const cloudRef = useRef();

  useFrame((state, delta) => {
    if (cloudRef.current) {
      cloudRef.current.position.x += speed * delta;
      if (cloudRef.current.position.x > 18) {
        cloudRef.current.position.x = -18;
      }
    }
  });

  return (
    <group ref={cloudRef} position={position} scale={scale}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7, 8, 8]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} opacity={0.9} transparent />
      </mesh>
      <mesh position={[0.5, -0.1, 0.2]}>
        <sphereGeometry args={[0.55, 8, 8]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} opacity={0.9} transparent />
      </mesh>
      <mesh position={[-0.5, -0.1, -0.1]}>
        <sphereGeometry args={[0.55, 8, 8]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} opacity={0.9} transparent />
      </mesh>
    </group>
  );
}

// Low-poly tree
function Tree({ position, scale = 1, isPine = false }) {
  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.12, 0.8, 6]} />
        <meshStandardMaterial color="#78350f" roughness={0.8} />
      </mesh>
      {/* Foliage */}
      {isPine ? (
        <>
          <mesh position={[0, 0.9, 0]} castShadow>
            <coneGeometry args={[0.5, 0.8, 6]} />
            <meshStandardMaterial color="#047857" roughness={0.6} />
          </mesh>
          <mesh position={[0, 1.4, 0]} castShadow>
            <coneGeometry args={[0.38, 0.7, 6]} />
            <meshStandardMaterial color="#059669" roughness={0.6} />
          </mesh>
        </>
      ) : (
        <mesh position={[0, 1.0, 0]} castShadow>
          <sphereGeometry args={[0.5, 7, 7]} />
          <meshStandardMaterial color="#10b981" roughness={0.5} />
        </mesh>
      )}
    </group>
  );
}

export function IslandScene({ onSelectZone, onSelectRobot }) {
  const riverRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (riverRef.current) {
      riverRef.current.material.opacity = 0.75 + Math.sin(t * 2) * 0.1;
    }
  });

  return (
    <group>
      {/* 1. MAIN CENTRAL FLOATING ISLAND */}
      <group position={[0, 0, 0]}>
        {/* Top Grass Surface (layered vibrant green) */}
        <mesh position={[0, 0.2, 0]} receiveShadow>
          <cylinderGeometry args={[5.2, 5.0, 0.5, 24]} />
          <meshStandardMaterial color="#34d399" roughness={0.8} />
        </mesh>

        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[5.0, 4.4, 0.4, 24]} />
          <meshStandardMaterial color="#10b981" roughness={0.8} />
        </mesh>

        {/* Earth / Rock Underbelly tapering downward into the clouds */}
        <mesh position={[0, -1.2, 0]} castShadow>
          <coneGeometry args={[4.4, 2.2, 16]} rotation={[Math.PI, 0, 0]} />
          <meshStandardMaterial color="#78350f" roughness={0.9} />
        </mesh>

        {/* Stone details & ledges on underbelly */}
        <mesh position={[-1.2, -1.0, 1.0]}>
          <dodecahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#57534e" roughness={0.9} />
        </mesh>
        <mesh position={[1.5, -0.9, -1.2]}>
          <dodecahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#78716c" roughness={0.9} />
        </mesh>

        {/* Playful River / Water Canal flowing through island */}
        <mesh position={[0, 0.47, 0]} rotation={[-Math.PI / 2, 0, 0.4]} ref={riverRef}>
          <planeGeometry args={[1.2, 8.5]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.4} transparent opacity={0.8} />
        </mesh>

        {/* Wooden Bridges across the river */}
        <group position={[-0.4, 0.53, 0.2]} rotation={[0, 0.4, 0]}>
          <mesh castShadow>
            <boxGeometry args={[1.6, 0.08, 0.6]} />
            <meshStandardMaterial color="#b45309" roughness={0.7} />
          </mesh>
          {/* Bridge rails */}
          <mesh position={[0, 0.12, 0.28]}>
            <boxGeometry args={[1.6, 0.15, 0.05]} />
            <meshStandardMaterial color="#92400e" />
          </mesh>
          <mesh position={[0, 0.12, -0.28]}>
            <boxGeometry args={[1.6, 0.15, 0.05]} />
            <meshStandardMaterial color="#92400e" />
          </mesh>
        </group>
      </group>

      {/* 2. ZONE A: MATHEMATICS WONDER DOME (Left Island / Zone) */}
      <group position={[-3.8, 0.4, 0.5]} onClick={() => onSelectZone(LEARNING_ZONES[0])} cursor="pointer">
        {/* Floating platform */}
        <mesh position={[0, 0, 0]} receiveShadow>
          <cylinderGeometry args={[1.8, 1.5, 0.4, 12]} />
          <meshStandardMaterial color="#60a5fa" roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <coneGeometry args={[1.5, 1.0, 8]} rotation={[Math.PI, 0, 0]} />
          <meshStandardMaterial color="#1e40af" roughness={0.9} />
        </mesh>

        {/* Abacus / Math Temple Dome */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <sphereGeometry args={[0.9, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.2} />
        </mesh>

        {/* Colorful counting pillars around dome */}
        <mesh position={[-0.6, 0.4, 0.6]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.7, 8]} />
          <meshStandardMaterial color="#f59e0b" />
        </mesh>
        <mesh position={[0.6, 0.4, 0.6]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.7, 8]} />
          <meshStandardMaterial color="#ec4899" />
        </mesh>
        <mesh position={[0, 0.4, -0.7]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.7, 8]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>

        {/* Plus / Number Token Marker */}
        <mesh position={[0, 1.25, 0]} castShadow>
          <boxGeometry args={[0.25, 0.55, 0.15]} />
          <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* 3. ZONE B: SCIENCE & NATURE GROVE (Right Zone) */}
      <group position={[3.8, 0.4, -0.6]} onClick={() => onSelectZone(LEARNING_ZONES[1])} cursor="pointer">
        {/* Floating platform */}
        <mesh position={[0, 0, 0]} receiveShadow>
          <cylinderGeometry args={[1.8, 1.4, 0.4, 12]} />
          <meshStandardMaterial color="#34d399" roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <coneGeometry args={[1.4, 1.0, 8]} rotation={[Math.PI, 0, 0]} />
          <meshStandardMaterial color="#065f46" roughness={0.9} />
        </mesh>

        {/* Science Observatory Dome */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <sphereGeometry args={[0.85, 16, 16]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.3} />
        </mesh>

        {/* Observatory Telescope pointing up */}
        <mesh position={[0.2, 0.95, 0.2]} rotation={[0.5, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.14, 0.9, 12]} />
          <meshStandardMaterial color="#0284c7" metalness={0.6} roughness={0.2} />
        </mesh>

        {/* Orbiting Ring (Atom / Planet symbol) */}
        <mesh position={[0, 0.7, 0]} rotation={[1.1, 0.2, 0]}>
          <torusGeometry args={[1.1, 0.03, 8, 24]} />
          <meshBasicMaterial color="#34d399" />
        </mesh>
      </group>

      {/* 4. ZONE C: LANGUAGE & AKSHAR FOREST (Back Zone) */}
      <group position={[0.2, 0.5, -3.2]} onClick={() => onSelectZone(LEARNING_ZONES[2])} cursor="pointer">
        {/* Hill base */}
        <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
          <coneGeometry args={[2.0, 1.2, 10]} />
          <meshStandardMaterial color="#a855f7" roughness={0.6} />
        </mesh>

        {/* Giant Open Storybook Pavilion */}
        <mesh position={[-0.4, 1.1, 0]} rotation={[0, 0.2, 0.2]} castShadow>
          <boxGeometry args={[0.7, 0.06, 0.9]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.4, 1.1, 0]} rotation={[0, -0.2, -0.2]} castShadow>
          <boxGeometry args={[0.7, 0.06, 0.9]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* Book spine */}
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.9, 8]} />
          <meshStandardMaterial color="#7e22ce" />
        </mesh>

        {/* Glowing Word Lantern */}
        <mesh position={[0, 1.45, 0]}>
          <octahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* 5. ZONE D: CURIOSITY & GENERAL KNOWLEDGE (Front Zone) */}
      <group position={[0.0, 0.4, 3.4]} onClick={() => onSelectZone(LEARNING_ZONES[3])} cursor="pointer">
        {/* Stone Plaza base */}
        <mesh position={[0, 0.05, 0]} receiveShadow>
          <cylinderGeometry args={[1.6, 1.4, 0.3, 16]} />
          <meshStandardMaterial color="#fef3c7" roughness={0.7} />
        </mesh>

        {/* World Globe on Pedestal */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.12, 0.2, 0.5, 8]} />
          <meshStandardMaterial color="#78716c" />
        </mesh>
        <mesh position={[0, 0.95, 0]} castShadow>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.4} />
        </mesh>
        {/* Continents / Gold rim */}
        <mesh position={[0, 0.95, 0]} rotation={[0.3, 0, 0]}>
          <torusGeometry args={[0.52, 0.03, 8, 20]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.8} />
        </mesh>
      </group>

      {/* 6. FRIENDLY 3D ROBOT COMPANION (MITRA) AT ISLAND CENTER */}
      <RobotAvatar3D position={[0, 0.65, 0]} onInteract={onSelectRobot} />

      {/* 7. INTERACTIVE ZONE MARKERS */}
      {LEARNING_ZONES.map((zone) => (
        <ZoneMarker key={zone.id} zone={zone} onSelect={onSelectZone} />
      ))}

      {/* 8. NATURAL VEGETATION & DETAIL (Trees, Rocks, Flowers) */}
      <Tree position={[-1.8, 0.45, -1.2]} scale={1.1} />
      <Tree position={[-2.2, 0.45, -0.6]} scale={0.85} isPine />
      <Tree position={[1.8, 0.45, 1.4]} scale={0.9} />
      <Tree position={[2.4, 0.45, 0.8]} scale={1.0} isPine />
      <Tree position={[-1.2, 0.45, 2.0]} scale={0.8} />
      <Tree position={[1.4, 0.45, -1.8]} scale={1.0} isPine />

      {/* 9. DRIFTING LOW-POLY CLOUDS */}
      <Cloud position={[-10, 4.5, -4]} speed={0.4} scale={1.3} />
      <Cloud position={[6, 5.2, -8]} speed={0.3} scale={1.5} />
      <Cloud position={[-4, 3.8, 8]} speed={0.5} scale={1.1} />
      <Cloud position={[12, 4.0, 4]} speed={0.35} scale={1.2} />

      {/* 10. RAINBOW ARCH IN SKY */}
      <mesh position={[0, 4, -12]} rotation={[0, 0, 0]}>
        <torusGeometry args={[11, 0.35, 8, 32, Math.PI]} />
        <meshBasicMaterial color="#f472b6" opacity={0.4} transparent />
      </mesh>
      <mesh position={[0, 3.7, -12]} rotation={[0, 0, 0]}>
        <torusGeometry args={[10.6, 0.35, 8, 32, Math.PI]} />
        <meshBasicMaterial color="#38bdf8" opacity={0.4} transparent />
      </mesh>
      <mesh position={[0, 3.4, -12]} rotation={[0, 0, 0]}>
        <torusGeometry args={[10.2, 0.35, 8, 32, Math.PI]} />
        <meshBasicMaterial color="#facc15" opacity={0.4} transparent />
      </mesh>
    </group>
  );
}

