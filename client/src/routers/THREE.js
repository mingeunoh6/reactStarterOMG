import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  AnimationClip,
  BooleanKeyframeTrack,
  ColorKeyframeTrack,
  NumberKeyframeTrack,
  Vector3,
  VectorKeyframeTrack,
} from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AmbientLight } from "three";
import useInput from "../hooks/useInput";

const ThreeEditFrame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;
const ThreeScreen = styled.div`
  position: relative;

  background-color: black;
  & canvas {
    height: 100%;
  }
`;

const ThreeAnimator = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 30%;
  background-color: ivory;
`;

const ThreeStarter = () => {
  const [currentObject, setCurrentObject] = useState({});
  const [rotateX, setRotateX] = useState(1);
  const [rotateY, setRotateY] = useState(1);
  const [rotateZ, setRotateZ] = useState(1);

  const onChangeRotateX = useCallback(
    (e) => {
      setRotateX(e.target.value);
    },
    [rotateX]
  );
  const onChangeRotateY = useCallback(
    (e) => {
      setRotateY(e.target.value);
    },
    [rotateY]
  );
  const onChangeRotateZ = useCallback(
    (e) => {
      setRotateZ(e.target.value);
    },
    [rotateZ]
  );

  const getTargetMesh = (e) => {
    console.log(e.object);
    e.stopPropagation();
    setCurrentObject(e.object);
  };

  return (
    <>
      <ThreeEditFrame>
        <ThreeScreen>
          <Canvas camera={{ position: [5, 0, -5] }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Mesh
              getTargetMesh={getTargetMesh}
              rotationX={rotateX}
              rotationY={rotateY}
              rotationZ={rotateZ}
            />
          </Canvas>
        </ThreeScreen>
        <ThreeAnimator>
          {Object.keys(currentObject).length === 0 ? (
            <h1>No target</h1>
          ) : (
            <h1>{currentObject.uuid}</h1>
          )}

          <div>
            <fieldset>
              <legend>Rotate:</legend>
              <label htmlFor="rotateX">rotateX</label>

              <input
                id="rotateX"
                value={rotateX}
                onChange={onChangeRotateX}
                type="number"
              />
              <br />
              <label htmlFor="rotateY">rotateY</label>

              <input
                id="rotateY"
                value={rotateY}
                onChange={onChangeRotateY}
                type="number"
              />
              <br />
              <label htmlFor="rotateZ">rotateZ</label>

              <input
                id="rotateZ"
                value={rotateZ}
                onChange={onChangeRotateZ}
                type="number"
              />
              <br />
            </fieldset>
          </div>
        </ThreeAnimator>
      </ThreeEditFrame>
    </>
  );
};

const Mesh = React.memo(
  ({ getTargetMesh, rotationX, rotationY, rotationZ }) => {
    const myMesh = React.useRef();

    return (
      <>
        <mesh
          visible
          userData={{ hello: "world" }}
          position={[1, 2, 3]}
          rotation={[
            Math.PI / rotationX,
            Math.PI / rotationY,
            Math.PI / rotationZ,
          ]}
          onClick={getTargetMesh}
          ref={myMesh}
          scale={[0.2, 0.2, 0.2]}
        >
          <boxGeometry args={[16, 16, 16]} />
          <meshStandardMaterial color="hotpink" transparent />
        </mesh>
      </>
    );
  }
);

const CreateRotationAnimation = (
  period,
  axis = "x",
  rotateX,
  rotateY,
  rotateZ
) => {
  const times = [0, period],
    values = [0, rotateX];

  const trackName = ".rotation[" + axis + "]";

  const track = new NumberKeyframeTrack(trackName, times, values);

  return new AnimationClip("rotateX", period, [track]);
};

export default ThreeStarter;
