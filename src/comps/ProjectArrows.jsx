import { projects } from "../content/projects";

const ProjectArrows = ({ projectNumber, setProjectNumber }) => {
  console.log(projectNumber);
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
    <div className="overlay">
      <div className="arrow-cont">
        <div className="arrow-left" onClick={handleToggleProjectLeft}></div>
      </div>
      <div className="arrow-cont">
        {" "}
        <div className="arrow-right" onClick={handleToggleProjectRight}></div>
      </div>
    </div>
  );
};

export default ProjectArrows;
