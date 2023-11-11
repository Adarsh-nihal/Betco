"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import illustration from "../../asset/user/Illustration (1).png";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import profile from "../../asset/user/81.png";

import account1 from "../../asset/user/account1.png";
import account2 from "../../asset/user/account2.png";
import account3 from "../../asset/user/account3.png";

import bank1 from "../../asset/user/bank1.png";
import bank2 from "../../asset/user/bank2.png";
import bank3 from "../../asset/user/bank3.png";

import statement1 from "../../asset/user/statement1.png";
import statement2 from "../../asset/user/statement2.png";
import statement3 from "../../asset/user/statement3.png";

import profit1 from "../../asset/user/profit1.png";
import profit2 from "../../asset/user/profit2.png";
import profit3 from "../../asset/user/profit3.png";

import setting1 from "../../asset/user/setting1.png";
import setting2 from "../../asset/user/setting2.png";
import BottomNavbar from "../component/user/BottomNavbar";

const MainComponent = () => {
  const router = useRouter();
  const account = [
    {
      id: 1,
      title: "Parsonal",
      img: account1,
      route: "/personalprofile",
    },
    {
      id: 2,
      title: "Change Passward",
      img: account2,
      route: "/changepassword",
    },
    {
      id: 3,
      title: "Add Bank",
      img: account3,
      route: "/addbank",
    },
  ];

  const bank = [
    {
      id: 1,
      title: "Wallet",
      img: bank1,
      route: "/bank",
    },
    {
      id: 2,
      title: "Withdrowal",
      img: bank2,
      route: "/bank",
    },
    {
      id: 3,
      title: "Deposit",
      img: bank3,
      route: "/bank",
    },
    {
      id: 4,
      title: "Tranjaction",
      img: statement2,
      route: "/bank",
    },
  ];
  const statment = [
    {
      id: 1,
      title: "Terms/Condition",
      img: statement1,
      route: "",
    },
    {
      id: 2,
      title: "Privacy Policy",
      img: statement2,
      route: "",
    },
    {
      id: 3,
      title: "Help Center",
      img: statement3,
      route: "",
    },
    {
      id: 4,
      title: "language",
      img: setting2,
      route: "/",
    },
  ];

  const profit = [
    {
      id: 1,
      title: "Notification",
      img: setting1,
      route: "/bank",
    },
    {
      id: 2,
      title: "Profit",
      img: profit2,
      route: "/bank",
    },
    {
      id: 3,
      title: "Loss",
      img: profit3,
      route: "/bank",
    },
  ];

  return (
    <div className={` md:rounded-tl-[18px] md:rounded-tr-[18px]   `}>
      <div
        className={`p-5 flex flex-col w-[100%] justify-center bg-[#0D49BE] rounded-bl-[30px] rounded-br-[30px]   md:rounded-tl-[18px] md:rounded-tr-[18px]  items-center text-black `}
      >
        <p className={`text-[16px] text-center text-white font-bold`}>
          My Pofile
        </p>

        <div className={`mt-6  flex justify-between gap-8 items-center`}>
          <Image
            src={profile}
            alt=""
            className={` h-[70px] w-[70px]  bg-[white] rounded-[50%]`}
          />
          <div className={`flex flex-col gap-1 text-[#FFF]`}>
            <p className={`text-lg font-bold`}>GROOD45KHAN</p>
            <p className={`text-[16px] font-semibold`}>Useremail@gmail.com</p>
            <p className={`text-sm font-medium`}>+917863542435</p>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col mt-5 px-8 overflow-scroll h-[60vh] mb-[100px] gap-6 p-4`}
      >
        {/* account */}
        <div>
          <p className={`text-[16px] text-[#797D86] font-bold mb-3`}>Account</p>
          <div className={`flex  gap-5 w-[100%]`}>
            {account.map((item) => {
              return (
                <Link 
                href={item.route}
                  key={item.id}
                  className={`flex flex-col cursor-pointer items-center  justify-center  gap-1`}
                >
                  <div
                    className={` rounded-[50%] flex items-center justify-center h-[50px] w-[50px] border border-black`}
                  >
                    <Image
                      src={item.img}
                      alt=""
                      className={`w-[30px] h-[30px]`}
                    />
                  </div>
                  <p className={`font-semibold text-[10px] text-gray-500`}>
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* banking */}
        <div>
          <p className={`text-[16px] text-[#797D86] font-bold mb-3`}>Banking</p>
          <div className={`flex  gap-5 justify-between w-[100%]`}>
            {bank.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`flex flex-col cursor-pointer items-center  justify-center  gap-1`}
                >
                  <div
                    className={` rounded-[50%] flex items-center justify-center h-[50px] w-[50px] border border-black`}
                  >
                    <Image
                      src={item.img}
                      alt=""
                      className={`w-[30px] h-[30px]`}
                    />
                  </div>
                  <p className={`font-semibold text-[10px] text-gray-500`}>
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* staement */}
        <div>
          <p className={`text-[16px] text-[#797D86] font-bold mb-3`}>
            Statement
          </p>
          <div className={`flex   cursor-pointer  justify-between w-[100%]`}>
            {statment.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center  justify-center  gap-1`}
                >
                  <div
                    className={` rounded-[50%] flex items-center justify-center h-[50px] w-[50px] border border-black`}
                  >
                    <Image
                      src={item.img}
                      alt=""
                      className={`w-[30px] h-[30px]`}
                    />
                  </div>
                  <p className={`font-semibold text-[10px] text-gray-500`}>
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Profit and loss */}
        <div>
          <p className={`text-[16px] text-[#797D86] font-bold mb-3`}>
            Profit And Loss
          </p>
          <div className={`flex  gap-8  w-[100%]`}>
            {profit.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`flex flex-col cursor-pointer items-center  justify-center  gap-1`}
                >
                  <div
                    className={` rounded-[50%] flex items-center justify-center h-[50px] w-[50px] border border-black`}
                  >
                    <Image
                      src={item.img}
                      alt=""
                      className={`w-[30px] h-[30px]`}
                    />
                  </div>
                  <p className={`font-semibold text-[10px] text-gray-500`}>
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`p-3 fixed z-10 bottom-4 w-[100%] md:w-[400px] `}>
        <BottomNavbar active="4" />
      </div>
    </div>
  );
};

export default MainComponent;
