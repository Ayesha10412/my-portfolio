import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import MainLayout from "../Pages/Layout/MainLayout";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";

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
    ],
  },
]);

export default Router;
