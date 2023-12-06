import React, { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { colorData } = useThemeContext();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <h3 className="text-center text-white text-5xl  bg-[#120d14]">Contact</h3>
      <div className="md:flex-row flex-col flex gap-5 bg-[#120d14] justify-center pb-4">
        <section className=" w-[100] md:w-[45%] mx-3 ">
          <form className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value=""
                placeholder="What's your name?"
                className=" py-4 px-6  text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value=""
                placeholder="What's your email address?"
                className="py-4 px-6  text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value=""
                placeholder="How can I help you?"
                className=" py-4 px-6  text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="py-3 px-8 rounded-xl border w-fit text-white font-bold "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </section>
        <div className="h-[600px] w-[100] md:w-[45%] mx-3">
          <div
            className="flex justify-center align-middle  rounded-[10px]"
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(310deg, ${colorData.base}, 20%, #120d14)`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
