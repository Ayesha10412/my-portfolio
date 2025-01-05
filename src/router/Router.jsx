import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import MainLayout from "../Pages/Layout/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
    ],
  },
]);

export default Router;
