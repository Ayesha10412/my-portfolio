import React from "react";
import DesAndIntro from "../components/DesAndIntro";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";
import Education from "../components/Education/Education";

const Main = () => {
  return (
    <div>
      <DesAndIntro></DesAndIntro>
      <About></About>
      <Skill></Skill>
      <Education></Education>
    </div>
  );
};

export default Main;
