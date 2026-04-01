import React from "react";
import bannerCircle from "../../logos/group-5.png";
import bannerImg from "../../logos/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="container mx-auto my-8 lg:my-16 px-4">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
        
       
        <div className="text-center lg:text-left">
          <div className="bg-purple-100 border border-purple-300 text-purple-700 rounded-full px-4 py-2 inline-flex gap-2 items-center">
            <img src={bannerCircle} alt="" />
            <p className="font-semibold text-sm lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              New: AI-Powered Tools Available
            </p>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold my-4">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            <p className="text-[#627382] text-base lg:text-lg font-normal leading-8 lg:leading-10">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster today.
            </p>
          </div>

          <div className="mt-8 flex gap-2 justify-center lg:justify-start">
            <button className="btn text-white bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full font-bold p-4 hover:scale-105 transition-all duration-300">
              Explore Products
            </button>
            <button className="btn btn-outline border-2 border-purple-500 text-purple-500 font-bold rounded-full p-4 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white hover:border-none hover:scale-105 transition-all duration-300">
              <CiPlay1 strokeWidth={1} /> Watch Demo
            </button>
          </div>
        </div>

       
        <div className="w-full lg:w-auto">
          <img src={bannerImg} alt="Banner" className="w-full max-w-sm lg:max-w-full mx-auto" />
        </div>

      </div>
    </div>
  );
};

export default Banner;