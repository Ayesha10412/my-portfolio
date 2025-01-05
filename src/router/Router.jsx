import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import MainLayout from "../Pages/Layout/MainLayout";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import DesAndIntro from "../components/DesAndIntro";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/intro",
        element: <DesAndIntro></DesAndIntro>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skills",
        element: <Skill></Skill>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default Router;
