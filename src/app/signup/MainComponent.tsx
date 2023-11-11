"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import illustration from "../../asset/user/Illustration.png";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
const MainComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className={`bg-[#3629B7] md:rounded-tl-[18px] md:rounded-tr-[18px]  h-[100px]`}
    >
      <div
        className={`p-5 flex bg-[#3629B7] md:rounded-tl-[18px] md:rounded-tr-[18px]  items-center text-white gap-5`}
      >
        <span className={`cursor-pointer`}>
            <Link href="/">  <IoIosArrowBack fontSize="25px" /></Link>
        
        </span>
        <p className={`text-[16px] font-bold`}>Sign Up</p>
      </div>
    
      <div
        className={`w-[100%]   rounded-tl-[30px] mt-2 p-7  bg-[#FFF] rounded-tr-[30px]`}
      >
        <p className={`text-[#3629B7] font-semibold text-lg`}>Welcome to us,</p>
        <p className={` font-normal text-xs`}>
          Hello there, create New account
        </p>

        <Image className="m-auto mt-5 w-[60%]" src={illustration} alt="" />

        <div className="w-[100%] mt-4 px-4">
          <form className="space-y-8  md:space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 text-sm outline-none rounded-[16px] border border-gray-300 "
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 text-sm border border-gray-300 outline-none rounded-[16px]"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 text-sm border border-gray-300 outline-none rounded-[16px]"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>
            <div className="flex  px-4 space-x-2">
              <input
                type="checkbox"
                className="text-blue-500 border -mt-2 border-gray-300 w-[20px] rounded  "
              />
              <label htmlFor="agree-terms" className={`text-gray-600 font-medium text-xs`}>
                By creating an account you agree to our <span className={`text-[#3629B7] cursor-pointer`}>Terms and Conditions</span>
              </label>
            </div>
            <button
              type="submit"
              className={`w-full p-3 rounded-[16px] text-sm bg-[#3629B7] text-white font-semibold `}
            >
              Sign Up
            </button>
          </form>
          <p className="mt-10 text-center text-sm ">Have an account? <Link href="/signin" className={`text-[#3629B7] font-semibold cursor-pointer`}>Sign in</Link></p>

        </div>
      </div>
        
      
    </div>
  );
};

export default MainComponent;
