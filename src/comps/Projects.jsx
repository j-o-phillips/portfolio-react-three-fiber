import { Carousel } from "react-responsive-carousel";
import mock from "../assets/images/displays/mockUp2.png";

const Projects = () => {
  return (
    <div className="bg-black">
      {" "}
      <Carousel showThumbs={false}>
        <div>
          <img src={mock} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
