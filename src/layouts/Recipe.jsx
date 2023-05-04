import React, { useEffect, useState } from "react";

import RingLoader from "react-spinners/RingLoader";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const Recipe = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      <Header></Header>
      {loading ? (
        <div className="spinner-container bg-slate-400 h-screen mx-auto">
          <RingLoader />
        </div>
      ) : (
        <RecipeDetails></RecipeDetails>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Recipe;
