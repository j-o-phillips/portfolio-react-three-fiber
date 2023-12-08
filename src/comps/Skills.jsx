import { skills } from "../content/skills";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useThemeContext } from "../context/ThemeContext";

const Skills = () => {
  const { colorData } = useThemeContext();
  return (
    <div className="bg-[#120d14] flex-col justify-center pt-12" id="skills">
      <h3 className="text-center text-white text-5xl mb-9">Skills</h3>
      <div className="flex  mx-12  justify-center items-center flex-wrap">
        <motion.div>
          <Tilt
            className="m-[10px] w-[78px] h-[78px] sm:w-[100px] sm:h-[100px] rounded-full p-[5px] flex justify-center items-center text-white"
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
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                className="h-[30px] sm:h-[40px]  bg-white rounded-full border-none"
              />
              <h5 className="text-xs sm:text-sm">Next.js</h5>
            </div>
          </Tilt>
        </motion.div>
        {skills.map((skill) => (
          <motion.div key={skill.name}>
            <Tilt
              className="m-[10px] w-[78px] h-[78px] sm:w-[100px] sm:h-[100px] rounded-full p-[5px] flex justify-center items-center text-white"
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
                <i
                  className={`${skill.iconClass} text-[30px] sm:text-[40px]`}
                ></i>
                <h5 className="text-xs sm:text-sm">{skill.name}</h5>
              </div>
            </Tilt>
          </motion.div>
        ))}
        <motion.div>
          <Tilt
            className="m-[10px] w-[78px] h-[78px] sm:w-[100px] sm:h-[100px] rounded-full p-[5px] flex justify-center items-center text-white"
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
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
                className="h-[30px] sm:h-[40px]  bg-white rounded-full border-none"
              />

              <h5 className="text-xs sm:text-sm">Three.js</h5>
            </div>
          </Tilt>
        </motion.div>
        <motion.div>
          <Tilt
            className="m-[10px] w-[78px] h-[78px] sm:w-[100px] sm:h-[100px] rounded-full p-[5px] flex justify-center items-center text-white"
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
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                className="h-[30px] sm:h-[40px] rounded-full border-none"
              />

              <h5 className="text-xs sm:text-sm">Tailwind</h5>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
