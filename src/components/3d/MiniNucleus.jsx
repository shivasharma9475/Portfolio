import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Nucleus from "./Nucleus";

/**
 * MiniNucleus
 * A small, cheap instance of the signature nucleus, used as a
 * recurring marker at the top of every major section — visually
 * ties every part of the page back to the hero.
 */
export default function MiniNucleus({
  size = 56,
  color = "#3A2D6B",
  emissive = "#5FE0D4",
  emissiveIntensity = 0.4,
}) {
  return (
    <div style={{ width: size, height: size }} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Nucleus
            radius={1}
            detail={3}
            blobScale={0.14}
            color={color}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity}
            speed={1.4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
