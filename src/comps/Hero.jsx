import { Canvas } from "@react-three/fiber";
import React from "react";
import Blob from "./Blob";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <div className="h-screen ">
      {" "}
      <Canvas camera={{ position: [-10, 0, 0], fov: 25 }}>
        <OrbitControls
          enableZoom={false}
          // autoRotate={true}
          // autoRotateSpeed={1}
        />

        <Blob />
      </Canvas>
    </div>
  );
};

export default Hero;
