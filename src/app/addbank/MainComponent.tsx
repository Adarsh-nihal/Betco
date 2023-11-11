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
import { FaRegCopy } from "react-icons/fa6";

const MainComponent = () => {
  const router = useRouter();

  return (
    <div className={` md:rounded-tl-[18px] md:rounded-tr-[18px]   `}>
      <div
        className={`p-5 flex flex-col w-[100%] justify-center   md:rounded-tl-[18px] md:rounded-tr-[18px]  items-center text-black `}
      >
        <span className={`absolute top-5 left-5 cursor-pointer`}>
        <Link href="/myprofile">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.5 9.5H6.70697L10.3535 5.85352C10.5406 5.65973 10.5406 5.3526 10.3535 5.15881C10.1616 4.96021 9.84509 4.95471 9.64648 5.14655L5.14685 9.64618C5.10059 9.69232 5.06396 9.74762 5.03857 9.80896C5.01373 9.86908 5.00104 9.93286 5.00061 9.99689C5.00061 9.99799 5 9.9989 5 10C5 10.0651 5.01324 10.1301 5.03857 10.1912C5.0639 10.2523 5.1004 10.3075 5.14648 10.3535L9.64648 14.8535C9.74011 14.9474 9.86737 15.0002 10 15C10.1326 15 10.2597 14.9473 10.3534 14.8536C10.5487 14.6583 10.5487 14.3417 10.3535 14.1465L6.70697 10.5H14.5C14.7761 10.5 15 10.2761 15 10C15 9.72388 14.7761 9.5 14.5 9.5ZM10 0C4.47717 0 0 4.47717 0 10C0 15.5228 4.47717 20 10 20C15.5201 19.9935 19.9935 15.5201 20 10C20 4.47717 15.5228 0 10 0ZM10 19C5.02942 19 1 14.9706 1 10C1 5.02942 5.02942 1 10 1C14.9683 1.00562 18.9944 5.03174 19 10C19 14.9706 14.9706 19 10 19Z"
                fill="black"
              />
            </svg>
          </Link>
        </span>
        <p className={`text-[16px] text-center font-bold`}>
         Add Bank Details
        </p>

        
      </div>

      <div
        className={`flex flex-col mt-5 px-8 overflow-scroll md:h-[80vh] mb-[100px] gap-6 p-4`}
      >
      
      <form>
  <div className="mb-2 relative">
    <label htmlFor="fullName" className="block text-sm font-medium text-[#6F7482] ">
      Bank Name
    </label>
    <input
      type="text"
      placeholder="Bank Name"
      className="mt-1 p-2 block w-full border text-sm text-black rounded-[8px] outline-none bg-[#D9D9D9] "
    />
   
  </div>
  <div className="mb-3 relative">
    <label htmlFor="email" className="block text-sm font-medium text-[#6F7482] ">
    Bank Holder Name
    </label>
    <input
      type="text"
      placeholder="Bank Holder Name"
      className="mt-1 p-2 block w-full border text-sm text-black rounded-[8px] outline-none bg-[#D9D9D9] "
    />
     <FaRegCopy className={ `absolute text-gray-400 cursor-pointer right-3 top-9`} />
  </div>
 
  <div className="mb-3 relative">
    <label htmlFor="email" className="block text-sm font-medium text-[#6F7482] ">
    Acoount Number
    </label>
    <input
      type="text"
      placeholder="Acoount Number"
      className="mt-1 p-2 block w-full border text-sm text-black rounded-[8px] outline-none bg-[#D9D9D9] "
    />
     <FaRegCopy className={ `absolute text-gray-400 cursor-pointer right-3 top-9`} />
  </div>
  <div className="mb-3 relative">
    <label htmlFor="email" className="block text-sm font-medium text-[#6F7482] ">
    Confirm Account Number
    </label>
    <input
      type="text"
   
      placeholder="Confirm Account Number"
      className="mt-1 p-2 block w-full border text-sm text-black rounded-[8px] outline-none bg-[#D9D9D9] "
    />
     <FaRegCopy className={ `absolute text-gray-400 cursor-pointer right-3 top-9`} />
  </div>
  <div className="mb-3 relative">
    <label htmlFor="email" className="block text-sm font-medium text-[#6F7482] ">
    IFSC Code
    </label>
    <input
      type="text"
     
      placeholder="IFSC Code"
      className="mt-1 p-2 block w-full border text-sm text-black rounded-[8px] outline-none bg-[#D9D9D9] "
    />
     <FaRegCopy className={ `absolute text-gray-400 cursor-pointer right-3 top-9`} />
  </div>


 

  <div className="mt-8 flex items-center justify-center ">
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
