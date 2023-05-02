import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";

import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Recipe from "../layouts/Recipe";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/recipe",
    element: <Recipe></Recipe>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/recipe/:id",
        element: <RecipeDetails></RecipeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/recipe/${params}`),
      },
    ],
  },
]);
export default route;
