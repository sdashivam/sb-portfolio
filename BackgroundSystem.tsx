'use client';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const WORKFLOW_STEPS = [
  { id: 'PLAN', label: 'PLANNER_NODE' },
  { id: 'RETR', label: 'VECTOR_RETRIEVAL' },
  { id: 'RANK', label: 'CROSS_ENCODER_RERANK' },
  { id: 'EVAL', label: 'GROUNDING_EVALUATOR' },
  { id: 'EXEC', label: 'AGENT_EXECUTOR' }
];

const LiveOrchestrator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute bottom-12 left-10 z-20 font-mono text-[10px] tracking-[0.2em] hidden lg:block pointer-events-none">
      <div className="flex flex-col gap-4">
        {WORKFLOW_STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center gap-4 transition-all duration-700">
            <div className={`h-px w-8 transition-all duration-700 ${i === activeStep ? 'bg-accent-cyan w-12' : 'bg-white/10'}`} />
            <span className={`transition-colors duration-700 ${i === activeStep ? 'text-accent-cyan' : 'text-white/20'}`}>
              {step.label}
            </span>
            {i === activeStep && <div className="w-1 h-1 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_#22D3EE]" />}
          </div>
        ))}
      </div>
    </div>
  );
};

const NeuralNetwork = () => {
  const count = 40;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const linePositions = [];
    // Create connections between nearby nodes
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
          Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
          Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
        );
        if (dist < 3) {
          linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
          linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        }
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    return geometry;
  }, [positions]);

  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Points positions={positions} stride={3}>
        <PointMaterial transparent color="#22D3EE" size={0.08} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
      </Points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#22D3EE" transparent opacity={0.1} />
      </lineSegments>
    </group>
  );
};

export const BackgroundSystem = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Layer 1: Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #1E293B 1px, transparent 1px), 
                            linear-gradient(to bottom, #1E293B 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Layer 2: Neural Network Animation */}
      {mounted && (
        <div className="absolute inset-0 z-[1] opacity-40">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <NeuralNetwork />
          </Canvas>
        </div>
      )}

      {mounted && <LiveOrchestrator />}

      {/* Layer 5: Gradient Glows */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent-cyan/20 blur-[120px]"
      />
      
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-accent-blue/10 blur-[100px]"
      />

      {/* Technical Overlay Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
};