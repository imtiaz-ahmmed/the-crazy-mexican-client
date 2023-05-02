import React from "react";

const Menu = () => {
  return (
    <div className="bg-slate-400">
      <h1 className="text-yellow-700 text-4xl font-bold text-center mb-4 p-12">
        Weekly Specials
      </h1>
      <h2 className="text-6xl font-fold text-center mb-4 text-white">
        Menu Of The Day
      </h2>
      <hr />
      <div className="flex flex-col lg:flex-row gap-12 mx-2 p-4 lg:mx-8 lg:p-12">
        <div className="bg-black p-8 rounded-lg">
          <div>
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-lg lg:text-3xl font-medium text-yellow-700 truncate dark:text-white">
                  Mexican Combo Menu
                </p>
                <hr />
                <p className="text-white mt-4 mb-4">
                  Maecenas posuere dolor sit amet consectur adipiscing purus
                  egestas diam sit vitae egestas suspendisse amet
                </p>
              </div>
              <div className="inline-flex items-center text-lg lg:text-2xl font-semibold text-yellow-700 ">
                $32
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-lg lg:text-3xl font-medium text-yellow-700 truncate dark:text-white">
                  Toast Breakfast Menu Item
                </p>
                <hr />
                <p className="text-white mb-4 mt-4">
                  Maecenas posuere dolor sit amet consectur adipiscing purus
                  egestas diam sit vitae egestas suspendisse amet
                </p>
              </div>
              <div className="inline-flex items-center text-lg lg:text-2xl font-semibold text-yellow-700 ">
                $20
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-lg lg:text-3xl font-medium text-yellow-700 truncate dark:text-white">
                  Truly Amazing Blueberry Recipes
                </p>
                <hr />
                <p className="text-white mb-4 mt-4">
                  Maecenas posuere dolor sit amet consectur adipiscing purus
                  egestas diam sit vitae egestas suspendisse amet
                </p>
              </div>
              <div className="inline-flex items-center text-lg lg:text-2xl font-semibold text-yellow-700 ">
                $12
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black p-8 rounded-lg ">
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-lg lg:text-3xl font-medium text-yellow-700 truncate dark:text-white">
                Optic Breakfast Combo
              </p>
              <hr />
              <p className="text-white mt-4 mb-4">
                Maecenas posuere dolor sit amet consectur adipiscing purus
                egestas diam sit vitae egestas suspendisse amet
              </p>
            </div>
            <div className="inline-flex items-center text-lg lg:text-2xl font-semibold text-yellow-700 ">
              $25
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-lg lg:text-3xl font-medium text-yellow-700 truncate dark:text-white">
                Buffalo Meat Recipie Combo
              </p>
              <hr />
              <p className="text-white mb-4 mt-4">
                Maecenas posuere dolor sit amet consectur adipiscing purus
                egestas diam sit vitae egestas suspendisse amet
              </p>
            </div>
            <div className="inline-flex items-center text-lg lg:text-2xl font-semibold text-yellow-700 ">
              $40
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-lg lg:text-3xl font-medium text-yellow-700 truncate dark:text-white">
                Strawberry Jam French Toast
              </p>
              <hr />
              <p className="text-white mb-4 mt-4">
                Maecenas posuere dolor sit amet consectur adipiscing purus
                egestas diam sit vitae egestas suspendisse amet
              </p>
            </div>
            <div className="inline-flex items-center text-lg lg:text-2xl font-semibold text-yellow-700 ">
              $20
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
