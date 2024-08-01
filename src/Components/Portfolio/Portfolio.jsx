/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import image_one from "../../assets/poert1.png";
import image_two from "../../assets/port2.png";
import image_three from "../../assets/port3.png";

export default function Portfolio() {
  const [currentImage, setCurrentImage] = useState(null);

  const displayImage = (image) => {
    setCurrentImage(image);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  useEffect(() => {
    document.title = "portfolio"
  }, [])

  return (
    <div className="portfolio mt-[101px] mb-5 py-5">
      <div className="text-center">
        <h2 className="uppercase text-[#2c3e50] text-[40px] font-[700] portfolio-head">
          portfolio component
        </h2>
      </div>
      <div className="flex justify-center items-center mt-3">
        <span className="w-20 h-1 bg-[#2c3e50]"></span>
        <FontAwesomeIcon icon={faStar} className="mx-3" />
        <span className="w-20 h-1 bg-[#2c3e50]"></span>
      </div>

      <div className="container mt-3">
        <div className="grid md:grid-cols-3 gap-12">
          {[image_one, image_two, image_three, image_one, image_two, image_three].map((image, index) => (
            <div
              key={index}
              onClick={() => displayImage(image)}
              className="overflow-hidden relative group cursor-pointer"
            >
              <img src={image} className="w-full rounded-lg" alt="" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9ce6] flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 duration-[0.6s]">
                <FontAwesomeIcon
                  className="font-[900] text-[96px] text-white"
                  icon={faPlus}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentImage && (
        <div
          className="fixed inset-0 z-[9999] bg-[#0d6dfd38] bg-opacity-75 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="relative w-[600px] md:p-4 "
            onClick={(e) => e.stopPropagation()}
          >
            <img src={currentImage} className="w-full" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
