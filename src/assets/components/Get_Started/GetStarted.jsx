import React from "react";
import { CiUser } from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import { LiaRocketSolid } from "react-icons/lia";

const Steps = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">

       
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-400 font-normal mt-3">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

         
          <div className="bg-white rounded-2xl p-8 relative">
            <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
              01
            </div>
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CiUser strokeWidth={1} size={40} className="text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Create Account</h3>
            <p className="text-gray-400 text-sm leading-6">
              Sign up for free in seconds. No credit card required <br /> to get started.
            </p>
          </div>

         
          <div className="bg-white rounded-2xl p-8 relative">
            <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
              02
            </div>
            <div className="bg-purple-100 mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <BsBox size={40} className="text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Choose Products</h3>
            <p className="text-gray-400 text-sm leading-6">
              Browse our catalog and select the tools <br /> that fit your needs.
            </p>
          </div>

          
          <div className="bg-white rounded-2xl p-8 relative">
            <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
              03
            </div>
            <div className="bg-purple-100 w-20 mx-auto h-20 rounded-full flex items-center justify-center mb-6">
              <LiaRocketSolid size={40} className="text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Start Creating</h3>
            <p className="text-gray-400 text-sm leading-6">
              Download and start using your premium <br /> tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Steps;