import { Canvas, useFrame } from "@react-three/fiber";
import Display from "./Display";
import ProjectArrows from "./ProjectArrows";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import ProjectArrowsMobile from "./ProjectDetails";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [projectNumber, setProjectNumber] = useState(0);

  //width must be even for iframe to be positioned correctly
  let setWidth = window.innerWidth;
  if (setWidth % 2 !== 0) {
    setWidth = window.innerWidth - 1;
    console.log("set odd");
  }
  window.addEventListener("resize", () => {
    if (setWidth % 2 !== 0) {
      setWidth = window.innerWidth - 1;
    }
  });

  return (
    <>
      <div className="bg-[#120d14] pt-12">
        <h3 className="text-center text-white text-5xl mb-12">
          Recent Projects
        </h3>

        <div
          className="flex justify-center items-center my-12"
          style={{ width: `${setWidth}px` }}
          id="overlay-cont"
        >
          <div className="md:h-[480px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]  w-[1000px] canvas-cont ">
            <Canvas
              className="r3f"
              camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: setWidth < 600 ? [0, 1.2, 3] : [-3, 1.5, 4],
              }}
            >
              <Display projectNumber={projectNumber} />
              <OrbitControls
                target={setWidth < 600 ? [0, 0.3, 0] : [0, 0, 0]}
                enableZoom={false}
                enableRotate={false}
                enablePan={false}
              />
            </Canvas>
          </div>
          {setWidth > 600 && (
            <ProjectArrows
              projectNumber={projectNumber}
              setProjectNumber={setProjectNumber}
            />
          )}
        </div>
        <ProjectDetails
          projectNumber={projectNumber}
          setProjectNumber={setProjectNumber}
        />
      </div>
    </>
  );
};

export default Projects;
