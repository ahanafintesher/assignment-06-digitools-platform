import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 border-b border-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
            </ul>
          </div>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500">Digitools</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-8 font-semibold menu-horizontal px-1">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <button className="btn btn-ghost text-lg font-semibold">Login</button>
            <button className="btn text-lg font-semibold bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-3xl">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
