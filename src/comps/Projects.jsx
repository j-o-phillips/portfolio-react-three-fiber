import { Canvas, useFrame } from "@react-three/fiber";
import Display from "./Display";
import ProjectArrows from "./ProjectArrows";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import ProjectArrowsMobile from "./ProjectDetails";
import ProjectDetails from "./ProjectDetails";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Projects = () => {
  const [projectNumber, setProjectNumber] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // const debouncedResize = debounce(function handleResize() {
    //   setScreenWidth(window.innerWidth);
    // }, 1000);

    function debouncedResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", debouncedResize);
    return (_) => {
      window.removeEventListener("resize", debouncedResize);
    };
  });

  return (
    <>
      <div
        className="bg-[#120d14] pt-14 flex-col items-center justify-center"
        id="projects"
      >
        <h3 className="text-center text-white text-5xl mb-4">
          Recent Projects
        </h3>

        <div
          // className="md:h-[480px] lg:h-[600px] xl:h-[700px]
          // 2xl:h-[800px] w-[320px] sm:w-[600px] md:w-[768px] lg:w-[1024px] canvas-cont "
          className="w-100 md:h-[480px] lg:h-[600px] xl:h-[700px]
           2xl:h-[800px] canvas-cont  "
        >
          <Canvas
            className="r3f"
            camera={{
              fov: 45,
              near: 0.1,
              far: 2000,
              // position: screenWidth < 600 ? [0, 1.2, 3] : [-3, 1.5, 4],
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
