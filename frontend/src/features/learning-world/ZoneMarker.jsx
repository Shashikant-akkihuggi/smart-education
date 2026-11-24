import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export function ZoneMarker({ zone, onSelect }) {
  const pinRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pinRef.current) {
      pinRef.current.position.y = zone.position[1] + 1.2 + Math.sin(t * 3 + zone.position[0]) * 0.12;
    }
  });

  return (
    <group position={zone.position}>
      {/* 3D Pin / Floating Marker */}
      <group ref={pinRef} onClick={() => onSelect(zone)} cursor="pointer">
        <Html center distanceFactor={14} zIndexRange={[100, 0]}>
          <button
            onClick={() => onSelect(zone)}
            className="group px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center gap-1.5 select-none"
            style={{ borderColor: zone.color }}
          >
            <span
              className="w-3 h-3 rounded-full animate-ping"
              style={{ backgroundColor: zone.color }}
            />
            <div className="text-left">
              <p className="font-bubble text-xs font-bold text-slate-800 leading-tight">
                {zone.vernacular}
              </p>
              <p className="text-[10px] text-slate-500 font-semibold">{zone.english}</p>
            </div>
          </button>
        </Html>

        {/* Small 3D diamond indicator */}
        <mesh position={[0, -0.3, 0]}>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial
            color={zone.color}
            emissive={zone.color}
            emissiveIntensity={0.5}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}

