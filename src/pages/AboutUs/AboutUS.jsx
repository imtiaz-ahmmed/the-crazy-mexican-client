import React from "react";

const AboutUS = () => {
  return (
    <div>
      <div className="carousel w-full h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1479044769763-c28e05b5baa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="card flex flex-col lg:flex-row card-side bg-base-100 shadow-xl mx-4 lg:mx-44 mt-10 mb-8">
        <figure className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
            alt="Movie"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-yellow-700 text-3xl">
            The Crazy Mexican
          </h2>
          <p>
            If you're looking for authentic and delicious Mexican cuisine, look
            no further than our restaurant! We offer a variety of traditional
            dishes that are sure to satisfy your cravings, including tacos,
            burritos, enchiladas, and more. Our ingredients are fresh and
            locally sourced, and our chefs are experts in preparing the perfect
            blend of spices and flavors to create a truly authentic dining
            experience. Whether you're in the mood for a quick lunch or a
            leisurely dinner with friends and family, our restaurant provides a
            warm and welcoming atmosphere that is perfect for any occasion. Come
            visit us and experience the best of Mexican cuisine!
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-yellow-700">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
