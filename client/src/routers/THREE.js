import { React, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { AmbientLight } from "three";

function CoinMesh() {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.01)); // #2
  return (
    <>
      <mesh ref={mesh} scale={0.7}>
        <cylinderBufferGeometry args={[1, 1, 0.3, 50]} /> // #1
        <meshLambertMaterial attach="material" color="#ff9800" />
      </mesh>
      <mesh ref={mesh} scale={0.7}>
        <cylinderBufferGeometry args={[1, 1, 0.3, 50]} /> // #1
        <meshLambertMaterial attach="material" color="#ff9800" />
      </mesh>
    </>
  );
}

const ThreeStarter = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <CoinMesh></CoinMesh>
        <Stars />
      </Canvas>
    </>
  );
};

export default ThreeStarter;
