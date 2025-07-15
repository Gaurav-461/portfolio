import { useTexture } from "@react-three/drei";
import image from "../../assets/projects-img.png";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cylinder = () => {
  const texture = useTexture(image);
  const cylinderRef = useRef(null);
  useFrame((_, delta) => {
    cylinderRef.current.rotation.y += delta / 2;
  });

  return (
    <>
      <group rotation={[0, 0.4, 0.2]}>
        <mesh ref={cylinderRef}>
          <cylinderGeometry args={[2, 2, 1.5, 70, 70, true]}/>
          <meshBasicMaterial
            map={texture}
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </>
  );
};

export default Cylinder;
