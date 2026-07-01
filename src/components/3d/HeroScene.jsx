import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nucleus from "./Nucleus";
import StarField from "./StarField";
import FixedStars from "./FixedStars";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 7.5], fov: 50, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} color="#C9CEE0" />
        <directionalLight position={[4, 5, 3]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-5, -3, -2]} intensity={3} color="#5FE0D4" distance={12} />
        <pointLight position={[3, 2, 4]} intensity={2.5} color="#F9B31C" distance={10} />

        <Nucleus
          radius={1.1}
          detail={4}
          blobScale={0.09}
          color="#6B5BB5"
          emissive="#F9B31C"
          emissiveIntensity={0.3}
          speed={1}
          position={[0, 0.3, -4]}
        />
        <StarField count={500} radius={9} />
        <FixedStars count={350} radius={20} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.6}
        />
      </Suspense>
    </Canvas>
  );
}
