import React from "react";
import bannerCircle from "../../logos/group-5.png";
import bannerImg from "../../logos/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-between items-center">
        <div>
          <div className="bg-purple-100 border border-purple-300 text-purple-700 rounded-full px-4 py-2 inline-flex gap-2 items-center">
            <img src={bannerCircle} alt="" />
            <p className="font-semibold text-lg text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500">
              New: AI-Powered Tools Available
            </p>
          </div>
          <div>
            <h1 className="text-7xl font-extrabold my-4">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            <p className="text-[#627382] text-lg font-normal leading-10">
              Access premium AI tools, design assets, templates, and
              productivity <br />
              software—all in one place. Start creating faster today. <br />
              Explore Products
            </p>
          </div>
          <div className="mt-8 flex gap-2">
            <button
              className="btn text-white bg-linear-to-r from-indigo-600 to-purple-500 rounded-full font-bold p-4 
  hover:scale-105 transition-all duration-300"
            >
              Explore Products
            </button>

            <button
              className="btn btn-outline border-2 border-purple-500 text-purple-500 font-bold rounded-full p-4 
  hover:bg-linear-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white hover:border-none hover:scale-105 transition-all duration-300"
            >
              <CiPlay1 strokeWidth={1} /> Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
