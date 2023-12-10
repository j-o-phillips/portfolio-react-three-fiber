import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useThemeContext } from "../context/ThemeContext";
import { experience } from "../content/experience";

const Experience = () => {
  const { colorData } = useThemeContext();

  return (
    <div className="bg-[#120d14] pt-14" id="experience">
      <h3 className="text-center text-white text-5xl mb-12">Experience</h3>
      <div className=" mx-2 md:mx-12  text-white">
        <VerticalTimeline lineColor="white">
          {experience.map((role) => (
            <VerticalTimelineElement
              key={role.company}
              className="vertical-timeline-element--work shadow-none"
              contentStyle={{
                background: `linear-gradient(130deg, ${colorData.base}, 20%, #120d14)`,
              }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={`${role.dateStart} - ${role.dateEnd}`}
              iconStyle={{
                background: `linear-gradient(130deg, ${colorData.base}, 50%, #120d14)`,
              }}
            >
              <h3 className="vertical-timeline-element-title ">
                {role.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {role.title}
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                {role.subtitle}
              </h5>
              <p>{role.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
