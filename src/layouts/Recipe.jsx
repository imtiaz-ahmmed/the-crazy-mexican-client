import React, { useEffect, useState } from "react";

import RingLoader from "react-spinners/RingLoader";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";

const Recipe = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="spinner-container bg-slate-400 h-screen mx-auto">
          <RingLoader />
        </div>
      ) : (
        <RecipeDetails></RecipeDetails>
      )}
    </div>
  );
};

export default Recipe;
