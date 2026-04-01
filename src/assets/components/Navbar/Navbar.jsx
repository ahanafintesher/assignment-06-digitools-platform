import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ cart }) => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 border-b border-base-300 flex justify-between">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li className="mt-2">
                <a className="btn btn-ghost font-semibold">Login</a>
              </li>
              <li>
                <a className="btn bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-3xl font-semibold">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500">
            Digitools
          </p>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu gap-8 font-semibold menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <div className="indicator">
            {cart.length > 0 && (
              <span className="indicator-item badge badge-sm text-white bg-red-600 font-bold rounded-full">
                {cart.length}
              </span>
            )}
            <CiShoppingCart strokeWidth={1} size={25} />
          </div>
          <button className="btn btn-ghost btn-sm text-sm lg:text-lg font-semibold">
            Login
          </button>
          <button className="btn btn-sm text-sm lg:text-lg font-semibold bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-3xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
