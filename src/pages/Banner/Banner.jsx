import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Feels Like Home, Tastes Like Paradise
            </h1>
            <p className="mb-5">
              Discover a world of culinary bliss at the Crazy Mexican!'
            </p>
            <button className="btn bg-yellow-700">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
