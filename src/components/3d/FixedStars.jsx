import { useMemo } from "react";
import * as THREE from "three";
import { createStarSprite } from "../../lib/starSprite";

/**
 * FixedStars
 * A static scattering of distant points — the ambient backdrop
 * layer, separate from the animated foreground StarField so we
 * only pay per-frame cost where it actually adds motion.
 */
export default function FixedStars({ count = 400, radius = 30, size = 0.05, color = "#C9CEE0" }) {
  const sprite = useMemo(() => createStarSprite(), []);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.randFloat(radius * 0.5, radius);
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        map={sprite}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        alphaTest={0.01}
      />
    </points>
  );
}
