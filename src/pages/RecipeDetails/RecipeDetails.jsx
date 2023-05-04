import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import { FaArrowCircleLeft } from "react-icons/fa";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/recipe/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-center text-yellow-700 font-bold text-5xl p-8 bg-slate-400">
        Welcome to Chef Profile
      </h1>

      <div className="hero min-h-screen bg-gray-200">
        <div className="hero-content flex-col gap-14 lg:flex-row bg-gray-100 rounded-lg p-8  ">
          <img className="h-96 rounded-md" src={recipes.picture} />
          <div>
            <h1 className="text-3xl font-bold text-yellow-700">
              {recipes.name}
            </h1>
            <p className="py-6 text-justify">{recipes.bio}</p>
            <p className="flex items-center gap-3 text-lg">
              <FcLike /> {recipes.likes}
            </p>
            <p className="py-2 text-justify text-lg">
              Total Recipes: {recipes.numRecipes}
            </p>
            <p className="py-2 text-justify text-lg">
              Experiences: {recipes.yearsExperience} years
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-yellow-700 text-4xl font-bold mt-8 mb-4">
        Top Recipes
      </h2>
      <hr />
      <div className="flex flex-col lg:flex-row gap-8 justify-between p-12 ">
        {recipes.recipes &&
          recipes.recipes.map((recipe) => {
            return (
              <RecipeInfo key={recipe.recipeID} recipe={recipe}></RecipeInfo>
            );
          })}
      </div>
      <div className=" flex items-center text-center mt-4 mb-8 gap-2 bg-slate-100 p-2 w-40 mx-auto">
        <Link to="/">
          <FaArrowCircleLeft></FaArrowCircleLeft>
        </Link>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
