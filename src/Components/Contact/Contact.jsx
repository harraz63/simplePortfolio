/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleInputChange = (type, e) => {
    setFormData({
      ...formData,
      [type]: e.target.value,
    });
  };

  useEffect(() => {
    document.title = "contact"
  }, [])

  return (
    <>
      <div className="contact mt-[101px] py-5 mb-4">
        <div className="text-center">
          <h2 className="contact-head uppercase text-[#2c3e50] text-[40px] font-[700]">
            contact section
          </h2>
        </div>
        <div className="flex justify-center items-center mt-3">
          <span className="w-20 h-1 bg-[#2c3e50]"></span>
          <FontAwesomeIcon icon={faStar} className="mx-3" />
          <span className="w-20 h-1 bg-[#2c3e50]"></span>
        </div>

        <div className="sm:w-1/2 mx-auto mt-12">
          {[
            { type: "userName", label: "userName" },
            { type: "userAge", label: "userAge" },
            { type: "userEmail", label: "userEmail" },
            { type: "userPassword", label: "userPassword" },
          ].map(({ type, label }) => (
            <div className="flex flex-col relative mt-12" key={type}>
              <input
                type="text"
                name={type}
                id={type}
                placeholder={label}
                className="border-0 border-b-2 border-[#dee2e6] py-3 rounded-md relative w-full focus:ring-0 focus:border-[#dee2e6] peer z-[99]"
                value={formData[type]}
                onChange={(e) => handleInputChange(type, e)}
              />
              <label
                htmlFor={type}
                className={`text-[#1abc9c] transition-all duration-[0.6s] absolute left-0 ${
                  formData[type] ? "top-[-30px]" : "top-[25px]"
                } `}
              >
                {label}
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="bg-[#1abc9c] mt-4 text-white p-2 rounded-md"
          >
            send Message
          </button>
        </div>
      </div>
    </>
  );
}
