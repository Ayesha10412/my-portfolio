import React from "react";
import DesAndIntro from "../components/DesAndIntro";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";

const Main = () => {
  return (
    <div>
      <DesAndIntro></DesAndIntro>
      <About></About>
      <Skill></Skill>
      <Education></Education>
      <Projects></Projects>
    </div>
  );
};

export default Main;
