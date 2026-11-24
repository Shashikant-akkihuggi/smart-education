import React, { Suspense, useState, useEffect, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { IslandScene } from './IslandScene';
import { StaticIslandFallback } from './StaticIslandFallback';

// Error Boundary for WebGL context loss or runtime failure
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('WebGL rendering encountered an error, falling back to 2D map:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StaticIslandFallback
          onSelectZone={this.props.onSelectZone}
          onSelectRobot={this.props.onSelectRobot}
        />
      );
    }
    return this.props.children;
  }
}

function CanvasLoader() {
  return null;
}

export function IslandCanvas({ onSelectZone, onSelectRobot, orbitRef, autoRotate = false }) {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
      }
    } catch (e) {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    return (
      <StaticIslandFallback
        onSelectZone={onSelectZone}
        onSelectRobot={onSelectRobot}
      />
    );
  }

  return (
    <div className="w-full h-full relative">
      <WebGLErrorBoundary onSelectZone={onSelectZone} onSelectRobot={onSelectRobot}>
        <Canvas
          shadows
          camera={{ position: [13, 11, 13], fov: 42 }}
          className="w-full h-full bg-gradient-to-b from-sky-300 via-sky-100 to-indigo-100"
        >
          {/* Soft pastel atmosphere fog */}
          <fog attach="fog" args={['#e0f2fe', 16, 42]} />

          {/* Ambient & Directional Sun Lighting */}
          <ambientLight intensity={0.9} color="#ffffff" />
          <directionalLight
            position={[10, 16, 8]}
            intensity={1.4}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={35}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            color="#fffbeb"
          />
          <hemisphereLight skyColor="#bae6fd" groundColor="#fed7aa" intensity={0.4} />

          <Suspense fallback={<CanvasLoader />}>
            <IslandScene onSelectZone={onSelectZone} onSelectRobot={onSelectRobot} />
          </Suspense>

          {/* Constrained camera controls */}
          <OrbitControls
            ref={orbitRef}
            enablePan={false}
            minDistance={8}
            maxDistance={25}
            maxPolarAngle={Math.PI / 2.1}
            minPolarAngle={Math.PI / 6}
            autoRotate={autoRotate}
            autoRotateSpeed={0.8}
          />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
