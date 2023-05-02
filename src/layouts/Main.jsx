import React, { useState, useEffect } from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const Main = () => {
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
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Main;
