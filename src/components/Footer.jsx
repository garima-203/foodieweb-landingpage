import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black mt-8 md:mt-0 rounded-t-3xl text-white">
      <div className="flex md:flex-row flex-col justify-between p-8 px-5 md:px-32">
        <div className="w-full md:w-1/4">
          <h1 className="pb-4 font-semibold text-xl">FoodieWeb</h1>
          <p className="text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className="pt-5 md:pt-0 pb-4 font-medium text-xl">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Dishes
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className="pt-5 md:pt-0 pb-4 font-medium text-xl">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Our Dishes
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className="pt-5 md:pt-0 pb-4 font-medium text-xl">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              FoodieWeb@email.com
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +64 958 248 966
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className="py-4 text-center">
            @copyright developed by
            <span className="text-brightColor">Garima</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
