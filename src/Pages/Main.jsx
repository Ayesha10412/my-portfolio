import React from "react";
import DesAndIntro from "../components/DesAndIntro";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const Main = () => {
  return (
    <div>
      <DesAndIntro></DesAndIntro>
      <About></About>
      <Skill></Skill>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Main;
