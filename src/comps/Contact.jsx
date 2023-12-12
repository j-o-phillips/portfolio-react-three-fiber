import React, { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";
import headshot from "../assets/images/headshot1crop.jpg";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { colorData } = useThemeContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const myEmail = "jphillips105@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_l2ipo7l",
        "template_l2hkhjh",
        {
          from_name: name,
          to_name: "Jake",
          from_email: email,
          to_email: "jphillips105@gmail.com",
          message: message,
        },
        "rlQSK6-ngBfZxyjED"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div className="pt-14" id="contact">
      <h3 className="text-center text-white text-5xl  bg-[#120d14] mb-9">
        Contact
      </h3>
      <div className="md:flex-row flex-col flex gap-5 bg-[#120d14] justify-center pb-4">
        <section className=" w-[100] md:w-[45%] mx-3 ">
          <form className="mt-12 flex flex-col gap-8" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What's your name?"
                className=" py-4 px-6  text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="What's your email address?"
                className="py-4 px-6  text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can I help you?"
                className=" py-4 px-6 text-black rounded-lg outline-none border-none font-medium"
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
        <section className=" w-[100] md:w-[45%] mx-3">
          <div
            className="flex flex-col justify-center items-center rounded-[10px] gap-4"
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(310deg, ${colorData.base}, 20%, #120d14)`,
            }}
          >
            <div
              className="m-[10px] w-[250px] h-[250px] rounded-full p-[5px] flex justify-center items-center mt-20"
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
              <div className="flex flex-col justify-center items-center rounded-full">
                <img
                  src={headshot}
                  alt="Jake Phillips headshot"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/jake-phillips-developer/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "white" }}
                  className="text-5xl"
                />
              </a>
              <a href="https://github.com/j-o-phillips" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "white" }}
                  className=" text-5xl"
                />
              </a>
              <FontAwesomeIcon
                onClick={() => {
                  navigator.clipboard.writeText(myEmail);
                  setEmailCopied(true);
                }}
                icon={faEnvelope}
                style={{ color: "white" }}
                className="text-5xl"
              />
            </div>
            {emailCopied ? (
              <p className="mb-20 text-white text-xs">
                email address copied to clipboard
              </p>
            ) : (
              <div className="mb-20"></div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
