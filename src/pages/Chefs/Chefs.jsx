import React, { useEffect, useState } from "react";
import SingleChef from "../SingleChef/SingleChef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="bg-yellow-50 p-16">
      <h3 className="text-center text-5xl font-bold text-yellow-700 mt-6 mb-6">
        {" "}
        Our Crazy Chefs
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  ">
        {chefs.map((chef) => {
          return <SingleChef key={chef.id} chef={chef}></SingleChef>;
        })}
      </div>
    </div>
  );
};

export default Chefs;
