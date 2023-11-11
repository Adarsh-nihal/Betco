"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import illustration from "../../asset/user/Illustration (1).png";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import profile from "../../asset/user/81.png";
import BottomNavbar from "../component/user/BottomNavbar";

const MainComponent = () => {
  const router = useRouter();

  return (
    <div className={` md:rounded-tl-[18px] md:rounded-tr-[18px]   `}>
      <div
        className={`p-5 flex flex-col w-[100%] justify-center bg-[#0D49BE] rounded-bl-[30px] rounded-br-[30px]   md:rounded-tl-[18px] md:rounded-tr-[18px]  items-center text-black `}
      >
        <span className={`absolute top-5 left-5 cursor-pointer`}>
          <Link href="/myprofile">
            {" "}
            <IoIosArrowBack color="white" fontSize="25px" />
          </Link>
        </span>
        <p className={`text-[16px] text-center text-white font-bold`}>
          Personal Profile
        </p>

        <div className={`mt-6  flex justify-center gap-8 items-center`}>
          <Image
            src={profile}
            alt=""
            className={` h-[70px] w-[70px]  bg-[white] rounded-[50%]`}
          />
        </div>
      </div>

      <div
        className={`flex flex-col mt-5 px-8 overflow-scroll h-[60vh] mb-[100px] gap-6 p-4`}
      >
      
      <form>
  <div className="mb-2">
    <label htmlFor="fullName" className="block text-sm font-medium text-[#6F7482] ">
      Full Name
    </label>
    <input
      type="text"
      id="fullName"
      placeholder="Full Name"
      className="mt-1 p-2 block w-full border text-sm text-black rounded-[8px] outline-none bg-[#D9D9D9] "
    />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="block text-sm font-medium text-[#6F7482] ">
      Email
    </label>
    <input
      type="text"
      id="email"
      placeholder="Email"
      className="mt-1 p-2 block w-full border text-sm text-black rounded-[8px] outline-none bg-[#D9D9D9] "
    />
  </div>
  <div className="mb-3">
    <label className="block text-sm font-medium text-[#6F7482]">Gender</label>
    <div className="mt-1 ">
      <label className="inline-flex items-center bg-[#D9D9D9] rounded-[6px] p-[6px] w-[80px] justify-center border mr-6">
        <input type="radio" className="form-radio" name="gender" value="male" />
        <span className="ml-2 text-xs">Male</span>
      </label>
      <label className="inline-flex items-center bg-[#D9D9D9] rounded-[6px] p-[6px] w-[80px] justify-center border mr-6">
        <input type="radio" className="form-radio" name="gender" value="female" />
        <span className="ml-2 text-xs">Female</span>
      </label>
    </div>
  </div>

  <div className="mb-2 ">
    <label htmlFor="state" className="block text-sm font-medium text-[#6F7482]">
      State<span className="text-red-500">*</span>
    </label>
    <select
      id="state"
      className="mt-1 p-2 block w-full border text-sm text-black rounded-[8px] outline-none bg-[#D9D9D9] "
    >
      <option value="" disabled selected>Select a state</option>
      <option value="california">California</option>
      <option value="new-york">New York</option>
      <option value="texas">Texas</option>
      <option value="florida">Florida</option>
    </select>
  </div>

  <div className="mb-2 ">
    <label htmlFor="country" className="block text-sm font-medium text-[#6F7482]">
      Country<span className="text-red-500">*</span>
    </label>
    <select
      id="country"
      className="mt-1 p-2 block w-full border text-sm text-black rounded-[8px] outline-none bg-[#D9D9D9] "
    >
      <option value="" disabled selected>Select a country</option>
      <option value="usa">United States</option>
      <option value="canada">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="australia">Australia</option>
    </select>
  </div>

  <div className="mt-4 flex items-center justify-center ">
    <button
      className={`w-[80%] text-xs rounded-[10px] p-[6px] text-white font-bold bg-[#0C49BE]`}
    >
      SUBMIT
    </button>
  </div>
</form>

   
      </div>
      <div className={`p-3 fixed z-10 bottom-4 w-[100%] md:w-[400px] `}>
        <BottomNavbar active="4" />
      </div>
    </div>
  );
};

export default MainComponent;
