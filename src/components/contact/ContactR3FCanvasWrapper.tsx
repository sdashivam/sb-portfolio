"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface Node {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  connections: number[];
}

function ContactNeuralScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { nodes, geometry, lineGeometry } = useMemo(() => {
    const nodeCount = 40;
    const nodes: Node[] = [];
    const positions: number[] = [];
    const connectionDistance = 3.5;

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 8;

      nodes.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.003,
          0
        ),
        connections: [],
      });
      positions.push(x, y, z);
    }

    const linePositions: number[] = [];
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i < j && node.position.distanceTo(other.position) < connectionDistance) {
          node.connections.push(j);
          linePositions.push(node.position.x, node.position.y, node.position.z, other.position.x, other.position.y, other.position.z);
        }
      });
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));

    return { nodes, geometry, lineGeometry };
  }, []);

  useEffect(() => {
    return () => {
      geometry.dispose();
      lineGeometry.dispose();
    };
  }, [geometry, lineGeometry]);

  useFrame((state, delta) => {
    const timeStep = Math.min(delta, 0.1) * 60;
    nodes.forEach((node) => {
      node.position.addScaledVector(node.velocity, timeStep);
      if (Math.abs(node.position.x) > 12) node.velocity.x *= -1;
      if (Math.abs(node.position.y) > 7) node.velocity.y *= -1;
    });

    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      nodes.forEach((node, i) => posAttr.setXYZ(i, node.position.x, node.position.y, node.position.z));
      posAttr.needsUpdate = true;
    }

    if (linesRef.current) {
      const posAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      let idx = 0;
      nodes.forEach((node) => {
        node.connections.forEach((j) => {
          posAttr.setXYZ(idx++, node.position.x, node.position.y, node.position.z);
          posAttr.setXYZ(idx++, nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
        });
      });
      posAttr.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial size={0.12} color="#10b981" transparent opacity={0.6} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#34d399" transparent opacity={0.1} />
      </lineSegments>
    </>
  );
}

export function ContactR3FCanvasWrapper() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }} gl={{ alpha: true }}>
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <ContactNeuralScene />
      </Float>
    </Canvas>
  );
}