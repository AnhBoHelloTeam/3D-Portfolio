import React from "react";
import PropTypes from "prop-types";
import { Float, Decal, useTexture } from "@react-three/drei";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl || ""]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
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
            rotation={[Math.PI * 2, 0, Math.PI / 4]}
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

export { Ball };
