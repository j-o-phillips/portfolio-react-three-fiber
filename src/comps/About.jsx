import React from "react";
import { useThemeContext } from "../context/ThemeContext";
import track from "../assets/haydn3.wav";

const About = () => {
  const { colorData } = useThemeContext();
  const audio = new Audio(track);
  audio.load();

  const playAudio = () => {
    audio.play();
  };
  const title = `Classical Violinist to Developer`;
  return (
    <div
      className="md:flex-row flex-col flex gap-4 bg-[#120d14] justify-center"
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
            <h1 className="text-3xl text-center md:text-4xl">{title}</h1>
            <p className="text-md mx-5 my-3 md:text-lg">
              As a musician, my ultimate goal was to make a powerful impression
              on an audience. I’m striving to achieve the same thing as a
              developer, by building software that makes an impact.{" "}
            </p>

            <p className="mx-5 my-3 text-sm md:text-md">
              {" "}
              My interest in software engineering began some years ago as a
              hobby, building simple Unity games or designing websites for
              friends. The enjoyment of building software soon became something
              of an obsession, so much so that I decided to make a career
              transition.{" "}
            </p>
            <p className="mx-5 my-3 text-sm md:text-md">
              {" "}
              As a former classical violinist I have played with some of the top
              orchestras in the world, and am used to high-pressure,
              high-performance environments. It's also an industry where
              personal study and learning never stop. Click the play button to
              hear a sample of my work as a violinist.{" "}
            </p>
            <p className="text-md mx-5 my-3 md:text-lg">
              {" "}
              I hope to bring the same passion and dedication to my career in
              software engineering.
            </p>
          </article>
        </div>
      </section>
      <section className={`h-[400px] w-[100] md:w-[45%] mx-3`}>
        <div
          className="h-[200px] w-[200px] bg-amber-300"
          onClick={playAudio}
        ></div>
      </section>
    </div>
  );
};

export default About;
