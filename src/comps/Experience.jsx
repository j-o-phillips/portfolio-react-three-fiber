import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useThemeContext } from "../context/ThemeContext";

const Experience = () => {
  const { colorData } = useThemeContext();

  return (
    <div className="bg-[#120d14] pt-12">
      <h3 className="text-center text-white text-5xl mb-9">Experience</h3>
      <div className=" mx-12  text-white">
        <VerticalTimeline lineColor="white">
          <VerticalTimelineElement
            className="vertical-timeline-element--work shadow-none"
            contentStyle={{
              background: `linear-gradient(130deg, ${colorData.base}, 20%, #120d14)`,
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2011 - present"
            iconStyle={{
              background: `linear-gradient(130deg, ${colorData.base}, 50%, #120d14)`,
            }}
          >
            <h3 className="vertical-timeline-element-title ">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: `linear-gradient(130deg, ${colorData.base}, 20%, #120d14)`,
            }}
            date="2010 - 2011"
            iconStyle={{
              background: `linear-gradient(130deg, ${colorData.base}, 50%, #120d14)`,
            }}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: `linear-gradient(130deg, ${colorData.base}, 20%, #120d14)`,
            }}
            date="2008 - 2010"
            iconStyle={{
              background: `linear-gradient(130deg, ${colorData.base}, 50%, #120d14)`,
            }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
