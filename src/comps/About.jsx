import React from "react";
import { useThemeContext } from "../context/ThemeContext";

const About = () => {
  const { colorData } = useThemeContext();
  return (
    <div className="md:flex-row flex-col-reverse flex gap-4 bg-[#120d14] justify-center">
      <div className="h-[600px] w-[45%]">
        <div
          className="flex justify-center align-middle  rounded-[10px]"
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(130deg, ${colorData.base}, 10%, #120d14)`,
          }}
        ></div>
      </div>
      <div className="h-[400px] w-[45%] bg-slate-300"></div>
    </div>
  );
};

export default About;
