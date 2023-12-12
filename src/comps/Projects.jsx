import { Canvas } from "@react-three/fiber";
import Display from "./Display";

import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";

import ProjectDetails from "./ProjectDetails";
import { projects } from "../content/projects";

const Projects = () => {
  const [projectNumber, setProjectNumber] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function debouncedResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", debouncedResize);
    return (_) => {
      window.removeEventListener("resize", debouncedResize);
    };
  });

  const handleToggleProjectLeft = () => {
    if (projectNumber !== 0) {
      setProjectNumber((prev) => prev - 1);
    }
  };
  const handleToggleProjectRight = () => {
    if (projectNumber !== projects.length - 1) {
      setProjectNumber((prev) => prev + 1);
    }
  };

  return (
    <>
      <div
        className="bg-[#120d14] pt-14 flex-col items-center justify-center"
        id="projects"
      >
        <h3 className="text-center text-white text-5xl mb-12">
          Recent Projects
        </h3>
        <title className="flex justify-center items-center bg-[#120d14]">
          <div className="text-white text-xs m-3">prev</div>
          <div
            className="h-[25px] w-[25px] transform rotate-[45deg] mr-6 cursor-pointer"
            style={{
              borderLeft: "3px solid white",
              borderBottom: "3px solid white",
            }}
            onClick={handleToggleProjectLeft}
          ></div>
          <h5 className=" text-white text-xl sm:text-4xl  text-center">
            {projects[projectNumber].name}
          </h5>
          <div
            className="h-[25px] w-[25px] transform rotate-[45deg] cursor-pointer  ml-6"
            style={{
              borderTop: "3px solid white",
              borderRight: "3px solid white",
            }}
            onClick={handleToggleProjectRight}
          ></div>
          <div className="text-white text-xs m-3">next</div>
        </title>

        <div
          className="w-100 md:h-[480px] lg:h-[600px] xl:h-[700px]
           2xl:h-[800px] canvas-cont  "
        >
          <Canvas
            className="r3f"
            camera={{
              fov: 45,
              near: 0.1,
              far: 2000,
              position: [-3, 1.5, 4],
            }}
          >
            <Display projectNumber={projectNumber} screenWidth={screenWidth} />
            <OrbitControls
              target={screenWidth < 600 ? [0, 0.3, 0] : [0, 0, 0]}
              enableZoom={false}
              enableRotate={false}
              enablePan={false}
            />
          </Canvas>
        </div>
      </div>
      <ProjectDetails
        projectNumber={projectNumber}
        setProjectNumber={setProjectNumber}
      />
    </>
  );
};

export default Projects;
