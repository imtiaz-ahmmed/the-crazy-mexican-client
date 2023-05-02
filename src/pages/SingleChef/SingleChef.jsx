import React from "react";
import { FcLike } from "react-icons/fc";

const SingleChef = ({ chef }) => {
  const { name, picture, yearsExperience, numRecipes, likes } = chef;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="chef-image" className="rounded-xl h-40" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-yellow-700 fond-bold text-2xl">
            {name}
          </h2>
          <p>
            <span className="text-yellow-700 font-bold">
              {yearsExperience}{" "}
            </span>
            years of experience
          </p>
          <p>
            <span className="text-yellow-700 font-bold">{numRecipes} </span>
            Number of Recipes
          </p>
          <p>
            <FcLike />{" "}
            <span className="text-yellow-700 font-bold"> {likes}</span>
          </p>
          <div className="card-actions">
            <button className="btn bg-yellow-700">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
