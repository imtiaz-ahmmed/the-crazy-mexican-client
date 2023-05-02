import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const RecipeInfo = ({ recipe }) => {
  const notify = () => toast.success("Added to Favorite!");
  const [isFavourite, setIsFavourite] = useState(false);
  const { recipeName, ingredients, cooking_method, rating } = recipe;

  const handleClick = () => {
    setIsFavourite(true);
    notify();
  };

  return (
    <div>
      <div className="max-w-sm p-6 bg-gray-200 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-700 dark:text-white">
          {recipeName}
        </h5>

        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <h2 className="mb-2 text-xl font-bold ">Ingredients:</h2>
          {ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </div>

        <h2 className="mb-2 text-xl font-bold ">Cooking Method:</h2>
        <p className="text-justify">{cooking_method}</p>
        <h2 className="mb-2 text-xl font-bold mt-2">
          Rating: <span className="text-yellow-700"> {rating}</span>
        </h2>
        <button
          onClick={handleClick}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 ${
            isFavourite ? "bg-yellow-500" : "bg-yellow-700"
          }`}
          disabled={isFavourite}
        >
          {isFavourite ? "Added to Favourites" : "Add to Favourites"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeInfo;
