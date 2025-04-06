import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl || ""]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[Math.PI * 2, 0, Math.PI / 4]} // Adjusted rotation
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({ icons }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {icons.map((icon, index) => (
          <Ball key={index} imgUrl={icon} />
        ))}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BallCanvas;
