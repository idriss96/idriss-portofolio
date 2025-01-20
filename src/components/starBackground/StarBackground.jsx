import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const StarGroup = ({ count, radius, speed, size }) => {
  const ref = useRef();
  const [positions] = useState(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      const r = Math.random() * radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * speed.x;
      ref.current.rotation.y -= delta * speed.y;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#fff"
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const Stars = () => {
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <StarGroup count={500} radius={1.5} speed={{ x: 0.1, y: 0.15 }} size={0.005} />
      <StarGroup count={300} radius={2} speed={{ x: 0.05, y: 0.1 }} size={0.004} />
      <StarGroup count={200} radius={2.5} speed={{ x: 0.02, y: 0.05 }} size={0.003} />
    </group>
  );
};

const StarsCanvas = () => (
  <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
    <Canvas camera={{ position: [0, 0, 1.5], fov: 75, near: 0.1, far: 1000 }}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
