import { BrowserRouter } from "react-router-dom";

import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import About from "./comps/About";
import Skills from "./comps/Skills";
import Projects from "./comps/Projects";
import Experience from "./comps/Experience";
import Contact from "./comps/Contact";
import Interests from "./comps/Interests";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Interests />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
