"use client";
import React, { useState } from "react";
import HCarousel from "./HCarousel";
import { GiCagedBall, GiSoccerBall } from "react-icons/gi";
import { BiSolidCricketBall } from "react-icons/bi";
import { PiTennisBallFill } from "react-icons/pi";
import { FaBasketballBall, FaVolleyballBall } from "react-icons/fa";
import p1 from "../../../asset/user/p1.png";
import p2 from "../../../asset/user/p2.png";
import p3 from "../../../asset/user/p3.png";
import p4 from "../../../asset/user/p4.png";
import Image from "next/image";

const Casino = () => {
  const [activeSport, setActiveSport] = useState(1);

  const sportdata = [
    {
      id: 1,
      title: "Soccer",
      icon: <GiSoccerBall fontSize="25px" />,
    },
    {
      id: 2,
      title: "Cricket",
      icon: <BiSolidCricketBall fontSize="25px" />,
    },
    {
      id: 3,
      title: "Tennis",
      icon: <PiTennisBallFill fontSize="25px" />,
    },
    {
      id: 4,
      title: "Basketball",
      icon: <FaBasketballBall fontSize="20px" />,
    },
    {
      id: 5,
      title: "Volleyball",
      icon: <FaVolleyballBall fontSize="20px" />,
    },
    {
      id: 6,
      title: "Handball",
      icon: <GiCagedBall fontSize="20px" />,
    },
  ];

  const handleActiveSport = (id: any) => {
    setActiveSport(id);
  };

  const populargames = [
    {
      id: 1,
      title: "",
      img: p1,
    },
    {
      id: 2,
      title: "",
      img: p2,
    },
    {
      id: 3,
      title: "",
      img: p3,
    },
    {
      id: 4,
      title: "",
      img: p4,
    },
    {
      id: 5,
      title: "",
      img: p1,
    },
    {
      id: 6,
      title: "",
      img: p2,
    },
    {
      id: 7,
      title: "",
      img: p3,
    },
  ];

  return (
    <div>
      <div className="flex  p-2 flex-col  gap-1">
        <p className="font-bold pl-3  text-sm">New Games</p>

        <HCarousel />
      </div>

      <div
        className={` justify-between overflow-scroll w-[100wh] flex px-4  gap-2 `}
      >
        {sportdata.map((item) => {
          return (
            <div
              onClick={() => handleActiveSport(item.id)}
              key={item.id}
              className={`px-6 cursor-pointer ${
                item.id === activeSport
                  ? "bg-black text-white"
                  : "text-[#2E3138]"
              } rounded-[20px] w-[100px] py-[6px] text-sm font-medium  gap-1 flex items-center justify-center border border-[#E3E5E8]  `}
            >
              <span className="">{item.icon}</span>
              <p className={`text-xs  font-semibold  px-1 text-center`}>
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <p className="font-bold text-gray-800  text-sm">Popular Games</p>
          <p className="px-2 py-1 rounded-[6px] font-bold  border text-blue-950 text-xs ">See All</p>
        </div> 
        <div
          className={`flex overflow-scroll mt-2 w-[100wh]  gap-4 `}
        >
          {populargames.map((item) => {
            return (
              <div className="w-[200px] ">
                <Image
                  key={item.id}
                  src={item.img}
                  className="w-[100px] cursor-pointer"
                  alt=""
                />
                <p className="w-[65px]"></p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <p className="font-bold text-gray-800  text-sm">Casino Games</p>
          <p className="px-2 py-1 rounded-[6px] font-bold  border text-blue-950 text-xs ">See All</p>
        </div> 
        <div
          className={`flex overflow-scroll mt-2 w-[100wh]  gap-4 `}
        >
          {populargames.map((item) => {
            return (
              <div className="w-[200px] ">
                <Image
                  key={item.id}
                  src={item.img}
                  className="w-[100px] cursor-pointer"
                  alt=""
                />
                <p className="w-[65px]"></p>
              </div>
            );
          })}
        </div>
      </div>


  {/* top provider*/}

  <div className={`p-4 bg-[#E4E5E8]`}>
        <div className="flex justify-between">
          <p className="font-bold text-gray-800  text-sm">Top League</p>
          {/* <p className="px-2 py-1 rounded-[6px] font-bold  border text-blue-950 text-xs ">See All</p> */}
        </div>
        <div className={`flex overflow-scroll mt-2 w-[100wh]  gap-4 `}>
          {populargames.map((item) => {
            return (
              <div className="w-[200px] ">
                <Image
                  key={item.id}
                  src={item.img}
                  className="w-[100px] cursor-pointer"
                  alt=""
                />
                <p className="w-[65px]"></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Casino;
