import React from "react";

const Ready = () => {
  return (
    <div className="bg-linear-to-r from-indigo-600 to-purple-500 py-20 px-4">
      <div className="container mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 text-sm lg:text-base mb-8">
          Join thousands of professionals who are already using Digitools to work smarter. <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button className="btn bg-white text-purple-600 font-bold rounded-full hover:scale-105 transition-all duration-300">
            Explore Products
          </button>
          <button className="btn bg-transparent border-2 border-white text-white font-bold rounded-full hover:scale-105 transition-all duration-300">
            View Pricing
          </button>
        </div>

        {/* Bottom Text */}
        <p className="text-white/60 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default Ready;