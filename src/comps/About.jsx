import React from "react";
import { useThemeContext } from "../context/ThemeContext";

const About = () => {
  const { colorData } = useThemeContext();
  const title = `Classical Violinist --> Developer`;
  return (
    <div className="md:flex-row flex-col flex gap-4 bg-[#120d14] justify-center">
      <section className="h-[600px] w-[100] md:w-[45%] mx-3">
        <div
          className=" rounded-[10px]"
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(130deg, ${colorData.base}, 10%, #120d14)`,
          }}
        >
          <article className="text-white p-3">
            <h1 className="text-3xl">{title}</h1>
            <p>
              As a musician, my ultimate goal was to make a powerful impression
              on an audience. I’m striving to achieve the same thing as a
              developer, by building software that makes an impact. My interest
              in software engineering began some years ago as a hobby, building
              simple Unity games or designing websites for friends. The
              enjoyment of building software soon became something of an
              obsession, so much so that I decided to make a career transition.
              As a former classical violinist I have played with some of the top
              orchestras in the world, and am used to high-pressure,
              high-performance environments. It's also an industry where
              personal study and learning never stop. I hope to bring the same
              passion and dedication to my new career in software engineering.
            </p>
          </article>
        </div>
      </section>
      <section
        className={`h-[400px] w-[100] md:w-[45%] bg-slate-300 mx-3`}
      ></section>
    </div>
  );
};

export default About;
