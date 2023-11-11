"use client";
import React from "react";
import logo from "../../../asset/user/betco..png";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";
const TopNavbar = () => {
  return (
    <div className={`md:rounded-tl-[20px]  md:rounded-tr-[20px]`}>
      <div className={`flex p-2 items-center justify-between w-[100%]`}>
        <div className={`flex gap-5 items-center`}>
          <div className={`cursor-pointer`}>
            <Sidebar />
          </div>

          <div>
            {" "}
            <Image src={logo} className="  " alt="" />
          </div>
        </div>

        {/* before auth */}
        {/* <div className={`flex items-center  gap-2`}>
          <Link href="/signup">
            <button
              className={`bg-[#17191C] rounded-[14px] font-bold text-white text-xs p-2 `}
            >
              Register
            </button>
          </Link>
          <Link href="/signin">
            {" "}
            <button
              className={`bg-[#F7F7F8] rounded-[10px] font-bold   text-xs p-2 `}
            >
              Login
            </button>
          </Link>
        </div> */}

        {/* after auth */}

        <div className={`border border-blue-700  pl-4 rounded-[10px] flex items-center gap-4`}>
          <p className={`font-normal  text-[#000] text-sm `}>10000</p>
          <Link href="/payment">
             <svg
          cursor={'pointer'}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect width="32" height="32" rx="8" fill="#0C49BE" />
            <path
              d="M26.6666 16V21C26.6666 24 24.6666 26 21.6666 26H11.6666C8.66663 26 6.66663 24 6.66663 21V16C6.66663 13.28 8.30663 11.38 10.8566 11.06C11.1166 11.02 11.3866 11 11.6666 11H21.6666C21.9266 11 22.1766 11.01 22.4166 11.05C24.9966 11.35 26.6666 13.26 26.6666 16Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.418 11.05C22.178 11.01 21.928 11 21.668 11H11.668C11.388 11 11.118 11.02 10.858 11.06C10.998 10.78 11.198 10.52 11.438 10.28L14.688 7.02C16.058 5.66 18.278 5.66 19.648 7.02L21.398 8.79002C22.038 9.42002 22.378 10.22 22.418 11.05Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.6666 16.5H23.6666C22.5666 16.5 21.6666 17.4 21.6666 18.5C21.6666 19.6 22.5666 20.5 23.6666 20.5H26.6666"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
