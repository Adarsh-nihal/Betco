"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import illustration from "../../asset/user/Illustration (1).png";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import sillustration from "../../asset/user/succefull.png"
const MainComponent = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [succesfull, setSuccessFull] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleChangeSubit = (e: any) => {
    e.preventDefault();
    setSuccessFull(!succesfull);
  };
  return (
    <div className={` md:rounded-tl-[18px] md:rounded-tr-[18px]   h-[100px]`}>
      <div
        className={`p-5 flex  md:rounded-tl-[18px] md:rounded-tr-[18px]  items-center text-black gap-5`}
      >
        <span className={`cursor-pointer`}>
          <Link href="/forgetpassword">
            {" "}
            <IoIosArrowBack fontSize="25px" />
          </Link>
        </span>
        <p className={`text-[16px] font-bold`}>Change Password</p>
      </div>

    
      {succesfull ? (
        <div

          className=" bg-[#FFF] m-auto gap-5 flex mt-10 flex-col rounded-[15px] p-6 w-[90%] "
        >

          <Image src={sillustration} className="w-[80%] m-auto" alt=""/>
          <p className="text-sm text-[#3629B7] mt-3 font-semibold text-right">Change password successfully !</p>
         <div className="flex flex-col mt-3 gap-5">
          <p className="text-[14px] ">You have successfully change password. Please use the new password when Sign in.</p>
         <Link href="/">
         <button
            type="submit"
            className={`w-full p-2 rounded-[16px] text-[15px] bg-[#3629B7] text-white font-semibold `}
          >
         Ok
          </button>
         </Link> 
         </div>
        </div>
      ) : (
        <div
        style={{ boxShadow: "0px 4px 30px 0px rgba(54, 41, 183, 0.07)" }}
        className=" bg-[#FFF] m-auto gap-5 flex mt-10 flex-col rounded-[15px] p-6 w-[90%] "
      >
        <form className="space-y-8" onSubmit={handleChangeSubit}>
          <div className="relative">
            <label
              htmlFor="password1"
              className="block text-xs font-medium pb-1 text-[#979797]"
            >
              Type your new password
            </label>
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="password"
              className="w-full px-3 py-2 border text-sm border-gray-300 outline-none rounded-[16px]"
              id="password1"
            />
            <div
              className="absolute top-8 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility1}
            >
              {showPassword1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>

          <div className="relative ">
            <label
              htmlFor="password2"
              className="block text-xs font-medium pb-1 text-[#979797]"
            >
              Confirm password
            </label>
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="confirm password"
              className="w-full px-3 py-2 border text-sm border-gray-300 outline-none rounded-[16px]"
              id="password2"
            />
            <div
              className="absolute top-8 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility2}
            >
              {showPassword2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full p-3 rounded-[16px] text-sm bg-[#3629B7] text-white font-semibold `}
          >
            Change Password
          </button>
        </form>
      </div>
      )}
    </div>
  );
};

export default MainComponent;
