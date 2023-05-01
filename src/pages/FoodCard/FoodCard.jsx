import React from "react";

const FoodCard = () => {
  return (
    <div>
      <h2 className="text-center  py-8 text-6xl font-bold">
        Check Our All Flavours <br />{" "}
        <span className="text-yellow-700">Summer </span>Promo
      </h2>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://images.unsplash.com/photo-1509456592530-5d38e33f3fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-4xl font-bold my-4 ">
            Over <span className="text-yellow-700  ">250</span> Delicious &
            Tasty Recipes
          </h2>

          <h4 className="text-yellow-500 font-bold my-4  text-2xl ">
            Get 25% Off
          </h4>

          <p className="my-4">
            Cras aliquet dolor sit amet consectetur adipiscing elit purus
            egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget
            at porttitor.
          </p>
          <button
            type="button"
            class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
            Order Now
          </button>
        </div>

        <div className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-4xl font-bold my-4 ">
            Over <span className="text-yellow-700  ">250</span> Delicious &
            Tasty Recipes
          </h2>

          <h4 className="text-yellow-500 font-bold my-4  text-2xl ">
            Get 25% Off
          </h4>

          <p className="my-4">
            Cras aliquet dolor sit amet consectetur adipiscing elit purus
            egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget
            at porttitor.
          </p>
          <button
            type="button"
            class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          >
            Order Now
          </button>
        </div>
        <div className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
