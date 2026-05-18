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

function NeuralNetworkScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { nodes, geometry, lineGeometry } = useMemo(() => {
    const nodeCount = 50;
    const nodes: Node[] = [];
    const positions: number[] = [];
    const colors: number[] = [];
    const connectionDistance = 2.5;

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;

      nodes.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005
        ),
        connections: [],
      });

      positions.push(x, y, z);

      const t = i / nodeCount;
      colors.push(
        0.024 + t * 0.53,
        0.71 + t * 0.07,
        0.83 - t * 0.38
      );
    }

    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i !== j) {
          const distance = node.position.distanceTo(other.position);
          if (distance < connectionDistance) {
            node.connections.push(j);
          }
        }
      });
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const linePositions: number[] = [];
    nodes.forEach((node, i) => {
      node.connections.forEach((j) => {
        if (j > i) {
          linePositions.push(
            node.position.x,
            node.position.y,
            node.position.z,
            nodes[j].position.x,
            nodes[j].position.y,
            nodes[j].position.z
          );
        }
      });
    });

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));

    return { nodes, geometry, lineGeometry };
  }, []);

  // Explicitly dispose of geometries created via 'new THREE' to prevent memory leaks
  useEffect(() => {
    return () => {
      geometry.dispose();
      lineGeometry.dispose();
    };
  }, [geometry, lineGeometry]);

  useFrame((state, delta) => {
    // Normalize speed using delta time (targeting 60fps as baseline)
    const timeStep = Math.min(delta, 0.1) * 60;

    nodes.forEach((node) => {
      node.position.addScaledVector(node.velocity, timeStep);

      if (Math.abs(node.position.x) > 10) node.velocity.x *= -1;
      if (Math.abs(node.position.y) > 5) node.velocity.y *= -1;
      if (Math.abs(node.position.z) > 5) node.velocity.z *= -1;
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
        node.connections.forEach((j) => {
          if (j > i) {
            posAttr.setXYZ(idx++, node.position.x, node.position.y, node.position.z);
            posAttr.setXYZ(idx++, nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
          }
        });
      });
      posAttr.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial size={0.08} vertexColors transparent opacity={0.8} sizeAttenuation />
      </points>

      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#34d399" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
}

export function R3FCanvasWrapper() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <NeuralNetworkScene />
      </Float>
    </Canvas>
  );
}