import { Ball } from "./canvas"; // Import Ball instead of BallCanvas
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Tech = () => {
  return (
    <div className="flex justify-center">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 1]} />
        {technologies.map((technology, index) => (
          <Ball key={index} imgUrl={technology.icon} />
        ))}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
