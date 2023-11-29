import { skills } from "../content/skills";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useThemeContext } from "../context/ThemeContext";

const Skills = () => {
  const { colorData } = useThemeContext();
  return (
    <div className="bg-[#120d14] flex-col justify-center pt-12">
      <h3 className="text-center text-white text-5xl mb-9">Skills</h3>
      <div className="flex  mx-12  justify-center items-center flex-wrap">
        {skills.map((skill) => (
          <motion.div key={skill.name}>
            <Tilt
              className="skill-card flex justify-center items-center text-white"
              style={{
                boxShadow: `${colorData.base} 5px 5px 40px -10px`,
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
              <div className="skill-card-details">
                <i className={skill.iconClass} style={{ fontSize: "40px" }}></i>
                <h5 className="text-sm">{skill.name}</h5>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
