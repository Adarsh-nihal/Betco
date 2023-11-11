"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import illustration from "../../asset/user/Illustration (1).png";
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
      className={`bg-[#3629B7] md:rounded-tl-[18px] md:rounded-tr-[18px]   h-[100px]`}
    >
      <div
        className={`p-5 flex bg-[#3629B7] md:rounded-tl-[18px] md:rounded-tr-[18px]  items-center text-white gap-5`}
      >
        <span className={`cursor-pointer`}>
            <Link href="/">  <IoIosArrowBack fontSize="25px" /></Link>
        
        </span>
        <p className={`text-[16px] font-bold`}>Sign in</p>
      </div>
    
      <div
        className={`w-[100%]  overflow-scroll  rounded-tl-[30px] mt-2 p-7  bg-[#FFF] rounded-tr-[30px]`}
      >
        <p className={`text-[#3629B7] font-semibold text-lg`}>Welcome Back</p>
        <p className={` font-normal text-xs`}>
        Hello there, sign in to continue
        </p>

        <Image className="m-auto mt-5 w-[60%]" src={illustration} alt="" />

        <div className="w-[100%] mt-4 px-4">
          <form className="space-y-8  md:space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-[8px] py-2 text-sm outline-none rounded-[16px] border border-gray-300 "
              />
            </div>
           
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 border text-sm border-gray-300 outline-none rounded-[16px]"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>
           <Link href="/forgetpassword" className={`text-right flex justify-end pt-5 cursor-pointer text-gray-400 text-xs`}>Forget Password .?</Link>
            <button
              type="submit"
              className={`w-full p-3  rounded-[16px] text-sm bg-[#3629B7] text-white font-semibold `}
            >
              Sign In
            </button>
          </form>
          <p className="mt-10 text-center text-sm">Don't have an account?  <Link href="/signup" className={`text-[#3629B7] ml-2 font-semibold cursor-pointer`}>Sign Up</Link></p>

        </div>
      </div>
        
      
    </div>
  );
};

export default MainComponent;
