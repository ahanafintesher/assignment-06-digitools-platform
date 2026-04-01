import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 mt-3">
            Choose the plan that fits your needs. Upgrade or downgrade any time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Starter */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm h-full">
            <h3 className="text-lg font-bold text-gray-800">Starter</h3>
            <p className="text-gray-400 text-sm mb-4">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">$0</span>
              <span className="text-gray-400 text-sm">/Month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> Access to 10 free tools
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> Basic templates
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> Community support
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> 1 project per month
              </li>
            </ul>
            <button className="btn w-full bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-full font-bold hover:scale-105 transition-all duration-300">
              Get Started Free
            </button>
          </div>

          {/* Pro - Most Popular */}
          <div className="bg-linear-to-b from-indigo-600 to-purple-500 rounded-2xl p-8 shadow-lg relative scale-105">
            {/* DaisyUI Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="badge badge-warning text-white font-bold px-4">
                Most Popular
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">Pro</h3>
            <p className="text-white/70 text-sm mb-4">Best for professionals</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">$29</span>
              <span className="text-white/70 text-sm">/Month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-white">
                <FaCheck className="text-white" /> Access to all premium tools
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <FaCheck className="text-white" /> Unlimited templates
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <FaCheck className="text-white" /> Priority support
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <FaCheck className="text-white" /> Unlimited projects
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <FaCheck className="text-white" /> Cloud sync
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <FaCheck className="text-white" /> Advanced analytics
              </li>
            </ul>
            <button className="btn w-full bg-white text-purple-600 rounded-full font-bold hover:scale-105 transition-all duration-300">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm h-full">
            <h3 className="text-lg font-bold text-gray-800">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-4">For teams and businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">$99</span>
              <span className="text-gray-400 text-sm">/Month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> Everything in Pro
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> Team collaboration
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> Custom integrations
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> Dedicated support
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> SLA guarantee
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-purple-500" /> Custom branding
              </li>
            </ul>
            <button className="btn w-full bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-full font-bold hover:scale-105 transition-all duration-300">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;