import { projects } from "../content/projects";

const ProjectDetails = ({ projectNumber, setProjectNumber }) => {
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
      <div className="flex justify-center items-center">
        <div className="text-white text-xs m-3">prev</div>
        <div
          className="mob-arrow-left mr-6"
          onClick={handleToggleProjectLeft}
        ></div>
        <h5 className=" text-white text-xl sm:text-4xl  text-center">
          {projects[projectNumber].name}
        </h5>
        <div
          className="mob-arrow-right ml-6"
          onClick={handleToggleProjectRight}
        ></div>
        <div className="text-white text-xs m-3">next</div>
      </div>

      <p className="text-white text-center p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet
        voluptates tempora eos! Distinctio aspernatur illo dolore quibusdam
        aliquid dignissimos modi voluptatum doloremque, nostrum consequuntur
        nesciunt provident necessitatibus aliquam fugit?
      </p>
    </>
  );
};

export default ProjectDetails;
