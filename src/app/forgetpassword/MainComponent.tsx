"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import illustration from "../../asset/user/Illustration (1).png";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
const MainComponent = () => {
  const router =useRouter()
  const [showOtp,setShowOtp]=useState(false)

  const changePassword=()=>{
router.push("/changepassword")
  }

  const SendOtp=()=>{
    setShowOtp(true)
  }
  return (
    <div className={` md:rounded-tl-[18px] md:rounded-tr-[18px]   h-[100px]`}>
      <div
        className={`p-5 flex  md:rounded-tl-[18px] md:rounded-tr-[18px]  items-center text-black gap-5`}
      >
        <span className={`cursor-pointer`}>
          <Link href="/signin">
            {" "}
            <IoIosArrowBack fontSize="25px" />
          </Link>
        </span>
        <p className={`text-[16px] font-bold`}>Forgot Password</p>
      </div>
{!showOtp?
      <div
        style={{ boxShadow: "0px 4px 30px 0px rgba(54, 41, 183, 0.07)" }}
        className=" bg-[#FFF] m-auto gap-5 flex mt-10 flex-col rounded-[15px] p-6 w-[90%] "
      >
        <p className="text-[#979797] text-sm">Type your phone number</p>
        <div>
              <input
                type="text"
                placeholder="(+84)"
                className="w-full px-[8px] py-3 text-sm outline-none rounded-[12px] border border-gray-300 "
              />
            </div>

            <p className="text-[15px] font-medium ">We texted you a code to verify your phone number</p>
            <button
             onClick={SendOtp}
              className={`w-full p-3  rounded-[16px] text-sm bg-[#3629B7] text-white font-semibold `}
            > 
              Send
            </button>
      </div>
      :
      <div
        style={{ boxShadow: "0px 4px 30px 0px rgba(54, 41, 183, 0.07)" }}
        className=" bg-[#FFF] m-auto gap-5 flex mt-10 flex-col rounded-[15px] p-6 w-[90%] "
      >
        <p className="text-[#979797] text-sm">Type a code</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="(+84)"
            className="w-full px-[8px] py-3 text-sm outline-none rounded-[12px] border border-gray-300 "
          />
          <button
            type="submit"
            className={`w-[50%] p-3  rounded-[16px] text-sm bg-[#3629B7] text-white font-semibold `}
          >
            Resend
          </button>
        </div>

        <p className="text-[15px] font-medium text-[#898989] ">
          We texted you a code to verify your phone number <span className="text-[#3629B7]">(+84) 0398829xxx</span>
        </p>
        <p className="text-[14px] font-medium text-[#898989]">
          This code will expired 10 minutes after this message. If you don't get
          a message.
        </p>
        <button
          type="submit"
          className={`w-full p-3  rounded-[16px] text-sm bg-[#3629B7] text-white font-semibold `}
          onClick={changePassword}
        >
          Change Password
        </button>
      </div>
}
    </div>
  );
};

export default MainComponent;
