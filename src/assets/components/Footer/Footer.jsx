import React from "react";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f1623] text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl  font-extrabold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-6">
              Premium digital tools for creators, <br />
               professionals, and businesses.
              Work smarter <br />
               with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-all">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-all">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-all">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-all">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Social Links</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-[#1a2332] p-2 rounded-full hover:bg-purple-500 transition-all duration-300"
                >
                  <FaYoutube size={18} />
                </a>
                <a
                  href="#"
                  className="bg-[#1a2332] p-2 rounded-full hover:bg-purple-500 transition-all duration-300"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="#"
                  className="bg-[#1a2332] p-2 rounded-full hover:bg-purple-500 transition-all duration-300"
                >
                  <FaXTwitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-all">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-all">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-all">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
