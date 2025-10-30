import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // Kiểm tra và sửa lỗi NaN trong geometry sau khi tải
  useEffect(() => {
    if (earth.scene) {
      earth.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          const geometry = child.geometry;
          const positions = geometry.attributes.position?.array;

          if (positions) {
            let hasNaN = false;
            for (let i = 0; i < positions.length; i++) {
              if (isNaN(positions[i])) {
                hasNaN = true;
                positions[i] = 0; // Thay NaN bằng 0
              }
            }

            if (hasNaN) {
              geometry.attributes.position.needsUpdate = true;
              geometry.computeBoundingBox();
              geometry.computeBoundingSphere();
              geometry.computeVertexNormals();
            }
          }
        }
      });
    }
  }, [earth.scene]);

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
      dispose={null} // Ngăn dispose tự động gây lỗi
    />
  );
};

const EarthCanvas = () => {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={!prefersReducedMotion}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

// Preload GLTF for better perceived performance
useGLTF.preload("/planet/scene.gltf");