import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';
import useIsMobile from '../hooks/useIsMobile.js';

// The morphing, light-catching blob — the centerpiece, inspired by the
// organic distorted geometry Lusion.co uses for its hero animations.
function DistortBlob({ mobile }) {
  const meshRef = useRef(null);
  const { viewport } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Idle rotation
    meshRef.current.rotation.y += delta * 0.18;
    meshRef.current.rotation.x = Math.sin(t * 0.25) * 0.15;

    // Mouse parallax (pointer is normalized -1..1 by r3f)
    target.current.x = state.pointer.x * 0.6;
    target.current.y = state.pointer.y * 0.4;
    meshRef.current.position.x += (target.current.x - meshRef.current.position.x) * 0.04;
    meshRef.current.position.y += (target.current.y - meshRef.current.position.y) * 0.04;

    // Gentle breathing scale
    const s = 1 + Math.sin(t * 0.6) * 0.03;
    meshRef.current.scale.setScalar((mobile ? 0.72 : 1) * s);
  });

  const scale = useMemo(() => Math.min(viewport.width, viewport.height) * 0.001, [viewport]);

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[mobile ? 0 : 1.1, 0, 0]}>
        <icosahedronGeometry args={[1.5, 6]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.42}
          speed={1.6}
          roughness={0.15}
          metalness={0.6}
          emissive="#db2777"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

// Faint orbiting ring outline for extra depth, à la Lusion's geometric accents.
function OrbitRing({ mobile }) {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.08;
      ref.current.rotation.x += delta * 0.03;
    }
  });
  return (
    <mesh ref={ref} position={[mobile ? 0 : 1.1, 0, 0]} rotation={[1.1, 0, 0]}>
      <torusGeometry args={[2.35, 0.006, 16, 120]} />
      <meshBasicMaterial color="#a78bfa" transparent opacity={0.35} />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 2, 4]} intensity={1.4} color="#db2777" />
      <pointLight position={[-3, -2, -2]} intensity={0.8} color="#7c3aed" />
    </>
  );
}

export default function HeroScene() {
  const mobile = useIsMobile(640);

  return (
    <div className="hero-3d" aria-hidden="true">
      <Canvas
        dpr={[1, mobile ? 1.3 : 2]}
        camera={{ position: [0, 0, 6], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Lights />
        <DistortBlob mobile={mobile} />
        <OrbitRing mobile={mobile} />
        <Sparkles
          count={mobile ? 25 : 60}
          scale={[6, 4, 4]}
          size={2}
          speed={0.3}
          opacity={0.5}
          color="#ffffff"
        />
      </Canvas>
    </div>
  );
}
