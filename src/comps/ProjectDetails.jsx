import { projects } from "../content/projects";
import { useThemeContext } from "../context/ThemeContext";

const ProjectDetails = ({ projectNumber, setProjectNumber }) => {
  const { colorData } = useThemeContext();

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
      <section
        className="text-white mt-7 flex flex-col items-center rounded-[10px] mx-2 md:mx-20 bg-[#120d14]"
        style={{
          background: `linear-gradient(130deg, ${colorData.base}, 10%, #120d14)`,
        }}
      >
        <h6 className="text-xl">Context: {projects[projectNumber].context}</h6>
        <h6 className="text-xl">
          Timeframe: {projects[projectNumber].timeFrame}
        </h6>
        <h6 className="text-xl">Team: {projects[projectNumber].team}</h6>
        <p className="text-center text-sm p-5 mx-1 md:mx-9 md:text-md">
          {projects[projectNumber].description}
        </p>
      </section>
      <div className="flex text-white justify-center gap-10 mt-5">
        <a
          href={projects[projectNumber].readme}
          target="_blank"
          className="m-[10px] w-[100px] h-[40px]  p-[5px] flex justify-center items-center text-white"
          style={{
            boxShadow: `${colorData.base} 10px 5px 40px -8px`,
            borderRadius: "20px",
            backgroundImage: `linear-gradient(
              144deg,
              ${colorData.base},
              30%,
              rgb(251, 251, 249),
              75%,
              #120d14
            )`,
          }}
        >
          <div
            className="flex flex-col justify-center items-center h-full w-full rounded-full"
            style={{ backgroundColor: "rgb(5, 6, 45)" }}
          >
            Github
          </div>
        </a>
        <a
          href={projects[projectNumber].website}
          target="_blank"
          className="m-[10px] w-[100px] h-[40px]  p-[5px] flex justify-center items-center text-white"
          style={{
            boxShadow: `${colorData.base} 10px 5px 40px -10px`,
            borderRadius: "20px",
            backgroundImage: `linear-gradient(
              144deg,
              ${colorData.base},
              30%,
              rgb(251, 251, 249),
              75%,
              #120d14
            )`,
          }}
        >
          <div
            className="flex flex-col justify-center items-center h-full w-full rounded-full"
            style={{ backgroundColor: "rgb(5, 6, 45)" }}
          >
            {" "}
            Site
          </div>
        </a>
      </div>
    </>
  );
};

export default ProjectDetails;
