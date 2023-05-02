import React from "react";
import Banner from "../../Banner/Banner";
import FoodCard from "../../FoodCard/FoodCard";
import Menu from "../../Menu/Menu";
import Chefs from "../../Chefs/Chefs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <FoodCard></FoodCard>
      <Menu></Menu>
    </div>
  );
};

export default Home;
