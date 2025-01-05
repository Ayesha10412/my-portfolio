import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import MainLayout from "../Pages/Layout/MainLayout";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

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
        path: "/",
        element: <About></About>,
      },
      {
        path: "/",
        element: <Skill></Skill>,
      },
      {
        path: "/",
        element: <Education></Education>,
      },
      {
        path: "/",
        element: <Projects></Projects>,
      },
      {
        path: "/",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default Router;
