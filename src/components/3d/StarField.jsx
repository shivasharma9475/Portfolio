import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createStarSprite } from "../../lib/starSprite";

/**
 * StarField
 * Particles that drift inward from a spherical shell toward the
 * origin, then reset — a direct conceptual descendant of the
 * source page's "moving stars" effect, rebuilt with BufferGeometry
 * for current three.js APIs and reasonable particle counts for
 * mobile performance.
 */
export default function StarField({ count = 700, radius = 16 }) {
  const pointsRef = useRef();
  const sprite = useMemo(() => createStarSprite(), []);

  const { positions, velocities, startPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    const startPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      startPositions[i * 3] = x;
      startPositions[i * 3 + 1] = y;
      startPositions[i * 3 + 2] = z;

      velocities[i] = THREE.MathUtils.randInt(60, 220);
    }

    return { positions, velocities, startPositions };
  }, [count, radius]);

  useFrame(() => {
    const points = pointsRef.current;
    if (!points) return;
    const posAttr = points.geometry.attributes.position;
    const arr = posAttr.array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      arr[ix] += (0 - arr[ix]) / velocities[i];
      arr[ix + 1] += (0 - arr[ix + 1]) / velocities[i];
      arr[ix + 2] += (0 - arr[ix + 2]) / velocities[i];

      velocities[i] -= 0.25;

      const closeToCenter =
        Math.abs(arr[ix]) <= 0.3 &&
        Math.abs(arr[ix + 1]) <= 0.3 &&
        Math.abs(arr[ix + 2]) <= 0.3;

      if (closeToCenter || velocities[i] <= 1) {
        arr[ix] = startPositions[ix];
        arr[ix + 1] = startPositions[ix + 1];
        arr[ix + 2] = startPositions[ix + 2];
        velocities[i] = THREE.MathUtils.randInt(60, 260);
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#F9D58A"
        map={sprite}
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
        alphaTest={0.01}
      />
    </points>
  );
}
