import { projects } from "../content/projects";
import { useThemeContext } from "../context/ThemeContext";

const ProjectDetails = ({ projectNumber, setProjectNumber }) => {
  const { colorData } = useThemeContext();

  return (
    <>
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
