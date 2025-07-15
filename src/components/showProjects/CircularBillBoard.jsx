// import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import Cylinder from "./Cylinder";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMediaQuery } from "react-responsive"
// import { OrbitControls } from "@react-three/drei";

const CircularBillBoard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Canvas flat camera={{ fov: isMobile ? 90 : 50 }}>
        {/* <OrbitControls  /> */}
        <ambientLight />
        <Cylinder />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0.27}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default CircularBillBoard;
