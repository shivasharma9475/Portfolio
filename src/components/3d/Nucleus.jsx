import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SimplexNoise } from "../../lib/simplexNoise";

/**
 * Nucleus
 * The site's signature element: an icosahedron whose surface is
 * continuously deformed with simplex noise, producing an organic,
 * breathing "living organism" look. Reused at multiple scales —
 * full-size in the hero, miniature as a recurring section marker.
 */
export default function Nucleus({
  radius = 1,
  detail = 4,
  blobScale = 0.12,
  color = "#5B4B9E",
  emissive = "#F9B31C",
  emissiveIntensity = 0.15,
  wireframe = false,
  speed = 1,
  ...props
}) {
  const meshRef = useRef();
  const noise = useMemo(() => new SimplexNoise(), []);

  // Cache the pristine, un-deformed vertex positions once so we can
  // always deform from the original sphere rather than drifting.
  const basePositions = useRef(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const geometry = mesh.geometry;
    const posAttr = geometry.attributes.position;

    if (!basePositions.current) {
      basePositions.current = Float32Array.from(posAttr.array);
    }

    const base = basePositions.current;
    const t = clock.getElapsedTime() * speed;
    const v = new THREE.Vector3();

    for (let i = 0; i < posAttr.count; i++) {
      const ix = i * 3;
      v.set(base[ix], base[ix + 1], base[ix + 2]).normalize();

      const n = noise.noise3D(
        v.x + t * 0.25,
        v.y + t * 0.18,
        v.z + t * 0.3
      );
      const displaced = radius + n * blobScale * radius;

      posAttr.array[ix] = v.x * displaced;
      posAttr.array[ix + 1] = v.y * displaced;
      posAttr.array[ix + 2] = v.z * displaced;
    }

    posAttr.needsUpdate = true;
    geometry.computeVertexNormals();

    mesh.rotation.y += 0.0016 * speed;
    mesh.rotation.z += 0.0004 * speed;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <icosahedronGeometry args={[radius, detail]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        roughness={0.55}
        metalness={0.15}
        wireframe={wireframe}
      />
    </mesh>
  );
}
