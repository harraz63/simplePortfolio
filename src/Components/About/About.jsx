/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {

  useEffect(() => {
    document.title = "about"
  }, [])

  return (
    <>
      <div className="about mt-[101px] bg-[#1ABC9C] md:py-52 text-white flex flex-col justify-center items-center gap-2">
        <h2 className="uppercase font-[700] text-[40px] text-center about-head">about component</h2>
        <div className="flex justify-center items-center">
          <span className="w-20 h-1 bg-white"></span>
          <FontAwesomeIcon icon={faStar} className="mx-3" />
          <span className="w-20 h-1 bg-white"></span>
        </div>
        <div className="container mt-2">
        <div className="grid md:grid-cols-2 px-16 gap-4">
          <div>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          
          <div>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
