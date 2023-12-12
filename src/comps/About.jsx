import React from "react";
import { useThemeContext } from "../context/ThemeContext";

import AudioPlayer from "./AudioPlayer";

const About = () => {
  const { colorData } = useThemeContext();

  return (
    <div
      className="md:flex-row flex-col flex gap-4 bg-[#120d14] justify-center pt-8"
      id="about"
    >
      <section className=" w-[100] md:w-[45%] mx-3">
        <div
          className=" rounded-[10px]"
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(130deg, ${colorData.base}, 10%, #120d14)`,
          }}
        >
          <article className="text-white md:p-3">
            <h1 className="text-3xl text-center md:text-4xl mb-6">
              Classical Violinist to Developer
            </h1>
            <p className="text-md mx-5 my-3 md:text-lg">
              As a musician, my ultimate goal was to make a powerful impression
              on an audience. I’m striving to achieve the same thing as a
              developer, by building software that makes an impact.{" "}
            </p>

            <p className="mx-5 my-3 text-md md:text-lg">
              {" "}
              My interest in software engineering began some years ago as a
              hobby, building simple Unity games or designing websites for
              friends. The enjoyment of building software soon became something
              of an obsession, so much so that I decided to make a career
              transition.{" "}
            </p>
            <p className="mx-5 my-3 text-md md:text-lg">
              {" "}
              As a former classical violinist I have played with some of the top
              orchestras in the world, and am used to high-pressure,
              high-performance environments. It's also an industry where
              personal study and learning never stop. Click play to hear a
              sample of my work as a violinist.{" "}
            </p>
            <p className="text-md mx-5 my-3 md:text-lg">
              {" "}
              I hope to bring the same passion and dedication to my career in
              software engineering.
            </p>
          </article>
        </div>
      </section>
      <section
        className={` w-[100] md:w-[45%] mx-3 my-4 flex flex-col justify-center items-center`}
      >
        <AudioPlayer />
        <p className="text-white text-sm mx-10 mt-2">
          An exerpt of Haydn String Quartet op.20 no.4, with some friends at the
          Thy Chamber Music Festival, 2017{" "}
        </p>
      </section>
    </div>
  );
};

export default About;
