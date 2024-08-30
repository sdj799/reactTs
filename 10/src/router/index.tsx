import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import BlogView from "../views/BlogView";
import DefaultLayout from "../layouts/DefaultLayout";
import BlogLayout from "../layouts/BlogLayout";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutView />,
  },
  {
    element: <BlogLayout />,
    children: [
      {
        path: "/blog/:id",
        element: <BlogView />,
      },
    ],
  },
]);
