import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  PresentationControls,
} from "@react-three/drei";

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  
  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <OrbitControls
        // autoRotate={true}
        // autoRotateSpeed={10}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping={true}
      />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>

    // <Float
    //   speed={1.75}
    //   rotationIntensity={1}
    //   floatIntensity={2}
    //   floatingRange={[-0.1, 0.1]}
    // >
    //   <ambientLight intensity={1} />
    //   <directionalLight position={[0, 0, 0.05]} />
    //   <mesh castShadow receiveShadow scale={2.75}>
    //     <icosahedronGeometry args={[1, 1]} />
    //     <meshStandardMaterial
    //       color="#fff8eb"
    //       polygonOffset
    //       polygonOffsetFactor={-5}
    //       flatShading
    //     />
    //     <Decal
    //       position={[0, 0, 1]}
    //       rotation={[2 * Math.PI, 0, 6.25]}
    //       scale={1}
    //       map={decal}
    //       flatShading
    //     />
    //   </mesh>
    // </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

