import React from "react";

const About = () => {
  return (
    <div
      className="md:flex-row flex-col-reverse flex gap-4 bg-[#120d14] justify-center"
      id="isolate"
    >
      <div className="h-[600px] w-[45%]">
        <div
          className="flex justify-center align-middle  rounded-[10px]"
          id="test"
        >
          <div id="overlay"></div>
        </div>
      </div>
      <div className="h-[400px] w-[45%] bg-slate-300"></div>
    </div>
  );
};

export default About;
