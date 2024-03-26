"use client";
import Link from "next/link";
import React, { useState } from "react";

const LandingPage = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <header className="text-slate-300   relative flex flex-col  py-4 lg:flex-row lg:items-center z-0">
      <a
        href="#"
        className="flex items-center whitespace-nowrap text-2xl font-black"
      >
        <span className="">
          <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
        </span>
        DesignHive
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row relative"
      >
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0 gap-12">
          <li className="lg:mr-12 relative">
            <a
              onMouseEnter={() => setDropDown(true)}
              className="rounded text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              Components
            </a>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              Pricing
            </a>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              Contact
            </a>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              FAQ
            </a>
          </li>
        </ul>

        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <Link
            href="/auth/login"
            className="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"
          >
            Log in
          </Link>
          <Link
            href="/auth/profile"
            className="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
          >
            Get free trial
          </Link>
        </div>
      </nav>
      {dropDown && (
        <div
          onMouseLeave={() => setDropDown(false)}
          className="absolute top-20 left-1/2 transform -translate-x-1/2  rounded-lg w-full h-[40vh] dark:bg-[#2d1d34] blur-[20%] z-999"
        >
          <div className="flex p-6">
            <div className="flex-1">1</div>
            <div className="flex-1">2</div>
            <div className="flex-1">3</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingPage;
