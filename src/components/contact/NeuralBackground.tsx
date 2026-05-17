"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useMounted } from "@/hooks/useMounted";

interface Node {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
}

function ContactNeuralScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { nodes, linePositions } = useMemo(() => {
    const nodeCount = 35;
    const nodes: Node[] = [];
    const positions: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 5;

      nodes.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.004,
          0
        ),
      });

      positions.push(x, y, z);
    }

    const linePositions: number[] = [];
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i !== j) {
          const distance = node.position.distanceTo(other.position);
          if (distance < 3) {
            linePositions.push(
              node.position.x, node.position.y, node.position.z,
              other.position.x, other.position.y, other.position.z
            );
          }
        }
      });
    });

    return { nodes, linePositions: new Float32Array(linePositions) };
  }, []);

  useFrame(() => {
    nodes.forEach((node) => {
      node.position.add(node.velocity);
      if (Math.abs(node.position.x) > 12.5) node.velocity.x *= -1;
      if (Math.abs(node.position.y) > 6) node.velocity.y *= -1;
    });

    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      nodes.forEach((node, i) => {
        posAttr.setXYZ(i, node.position.x, node.position.y, node.position.z);
      });
      posAttr.needsUpdate = true;
    }

    if (linesRef.current) {
      const posAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      let idx = 0;
      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i !== j && j > i) {
            const dist = node.position.distanceTo(other.position);
            if (dist < 3) {
              posAttr.setXYZ(idx++, node.position.x, node.position.y, node.position.z);
              posAttr.setXYZ(idx++, other.position.x, other.position.y, other.position.z);
            }
          }
        });
      });
      posAttr.needsUpdate = true;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = nodes.map(n => [n.position.x, n.position.y, n.position.z]).flat();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    return geo;
  }, [nodes]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  return (
    <>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial size={0.1} color="#10b981" transparent opacity={0.9} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#34d399" transparent opacity={0.2} />
      </lineSegments>
    </>
  );
}

export function NeuralBackground() {
  const mounted = useMounted();

  if (!mounted) {
    return <div className="absolute inset-0 pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Float speed={0.3} rotationIntensity={0.05} floatIntensity={0.3}>
          <ContactNeuralScene />
        </Float>
      </Canvas>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 animate-pulse" style={{
        background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
        filter: "blur(40px)",
      }} />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-15" style={{
        background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
        filter: "blur(30px)",
      }} />
    </div>
  );
}