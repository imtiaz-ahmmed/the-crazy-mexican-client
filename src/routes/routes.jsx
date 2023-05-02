import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";

import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Recipe from "../layouts/Recipe";
import AboutUS from "../pages/AboutUs/AboutUS";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

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
      {
        path: "/about",
        element: <AboutUS></AboutUS>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
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
