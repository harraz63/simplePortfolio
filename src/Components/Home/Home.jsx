/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import avataaars from "../../assets/avataaars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  useEffect(() => {
    document.title = "home"
  }, [])

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-[#1ABC9C] text-white pt-11 pb-16 mt-[91px]">
      <img className="w-[230px] mb-10" src={avataaars} alt="" />
      <h2 className="uppercase text-4xl font-bold mb-3">start framework</h2>
      <div className="flex flex-row justify-center items-center mb-3">
        <span className="w-20 h-1 bg-white"></span>
        <FontAwesomeIcon icon={faStar} className="mx-3" />
        <span className="w-20 h-1 bg-white"></span>
      </div>
      <p className="">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
