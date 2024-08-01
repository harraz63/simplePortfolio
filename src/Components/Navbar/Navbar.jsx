/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const navElement = document.getElementById("nav");
      const isScreenLarge = window.innerWidth > 768;

      if (isScreenLarge) {
        if (Math.ceil(currentScrollTop) >= 125) {
          navElement.style.height = "70px";
        } else {
          navElement.style.height = "103px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="bg-[#2C3E50] border-gray-200 dark:bg-gray-900 text-white fixed top-0 left-0 right-0 transition-height duration-[0.6s] flex justify-center items-center z-[999]"
        id="nav"
      >
        <div className="container mx-auto">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7 sm:px-8 xl:px-0 nav-padding-small-screens">
            <Link
              to="home"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="nav-head text-[32px] font-[700] whitespace-nowrap uppercase">
                start framework
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#000000A6] border-2 border-[#000000A6] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto duration-[0.6s]"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col gap-4 py-4 md:p-0 mt-4  md:flex-row md:space-x-2  md:mt-0 ">
                <li>
                  <NavLink
                    to="about"
                    className=" py-2 px-3 uppercase font-[700]"
                  >
                    about
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="portfolio"
                    className=" py-2 px-3 uppercase font-[700]"
                  >
                    portfolio
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="contact"
                    className=" py-2 px-3 uppercase font-[700]"
                  >
                    contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
