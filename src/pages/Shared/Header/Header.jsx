import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-black p-4">
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
            <div className="navbar-end ">
              <a className="btn bg-yellow-700">Login</a>
            </div>
          </ul>
        </div>
        <div className="mx-auto lg:navbar-start">
          <a className=" normal-case text-3xl font-bold text-yellow-700">
            The Crazy Mexican
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-white">Home</a>
            </li>
            <li>
              <a className="text-white">Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:block">
          <a className="btn bg-yellow-700">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
