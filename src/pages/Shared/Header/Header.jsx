import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-black px-8 py-4">
        <div className="dropdown start-auto">
          <label tabIndex={0} className="btn bg-yellow-700 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={4}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-700 rounded-box w-52"
          >
            <li>
              <a className="text-white">Home</a>
            </li>

            <li>
              <a className="text-white">Blog</a>
            </li>
            <li>
              <a className="text-white">About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-center mx-8 lg:mx-0 lg:navbar-start">
          <a className=" normal-case text-3xl font-bold text-yellow-700">
            The Crazy Mexican
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <button onClick={handleLogOut} className="btn bg-yellow-700">
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-yellow-700">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
