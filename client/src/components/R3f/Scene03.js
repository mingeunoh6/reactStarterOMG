import React from 'react';
import { Canvas } from '@react-three/fiber'
import MemoizedBox from './objects/basicObject';
import Controller from './Controller';



const Scene03 = (props) => {
    return (
        <>
            <Controller />
            <Canvas dpr={window.devicePixelRatio} camera={{ fov: 10, near: 0.1, far: 1000, position: [50, 50, 50] }}>
                <color attach="background" args={["black"]} />
                {/* <OrbitControls /> */}
                <gridHelper
                    args={[100, 20, "#4D089A", "#4D089A"]}
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                />
                <axesHelper />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <group rotation={[0, 0, 0]}>
                    <MemoizedBox />
                    <MemoizedBox position={[1, 1, 1]} />
                </group>

            </Canvas>
        </>
    );
};

export default React.memo(Scene03);