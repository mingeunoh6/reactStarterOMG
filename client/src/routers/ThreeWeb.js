import React, { useRef, useState, KeyboardEvent } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import styled from "@emotion/styled";
import { css, jsx, ClassName } from "@emotion/react";
import { CanvasWrapper } from '../components/R3f/ThreeStyle';
import { OrbitControls } from '@react-three/drei';

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}





const ThreeWeb = () => {
  const handleKeyboardEvent = () => {
    console.log("hee")
  }


  const Wrapper = styled.div`
  font-size: 15px;

  height: 100%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  & > h1 {
    font-size: 2.3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
`;

  const controllPosition = (e) => {
    console.log(e.movementX, e.movementY)
  }

  const Keyboard = (e) => {

  }


  return (
    <CanvasWrapper onMouseMove={controllPosition} onKeyDown={handleKeyboardEvent}>
      <Canvas dpr={window.devicePixelRatio} camera={{ fov: 10, near: 0.1, far: 1000, position: [50, 50, 50] }}>
        <color attach="background" args={["#06092c"]} />
        <OrbitControls />
        <gridHelper
          args={[100, 20, "#4D089A", "#4D089A"]}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <axesHelper />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>,

    </CanvasWrapper >
  );
};

export default ThreeWeb;
