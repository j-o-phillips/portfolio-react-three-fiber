import { Canvas } from "@react-three/fiber";
import Display from "./Display";
import ProjectArrows from "./ProjectArrows";

const Projects = () => {
  let setWidth;
  if (setWidth % 2 !== 0) {
    setWidth = window.innerWidth - 1;
  }
  window.addEventListener("resize", () => {
    if (setWidth % 2 !== 0) {
      setWidth = window.innerWidth - 1;
    }
  });

  return (
    <>
      <div className="bg-[#120d14]">
        <h3 className="text-center text-white text-5xl">Recent Projects</h3>

        <div
          className="flex justify-center items-center  h-[800px]"
          style={{ width: `${setWidth}px` }}
          id="overlay-cont"
        >
          <div className="h-[700px] w-[1000px] ">
            <Canvas
              className="r3f"
              camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [-3, 1.5, 4],
              }}
            >
              <Display />
            </Canvas>
          </div>
          <ProjectArrows />
        </div>
        <h5 className="text-center text-white text-4xl">Space Academy</h5>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          amet voluptates tempora eos! Distinctio aspernatur illo dolore
          quibusdam aliquid dignissimos modi voluptatum doloremque, nostrum
          consequuntur nesciunt provident necessitatibus aliquam fugit?
        </p>
      </div>
    </>
  );
};

export default Projects;
