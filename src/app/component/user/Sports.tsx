"use client";

import React, { useState } from "react";
import t1 from "../../../asset/user/t1.png";
import t2 from "../../../asset/user/t2.png";
import t3 from "../../../asset/user/t3.png";
import t4 from "../../../asset/user/t4.png";
import t5 from "../../../asset/user/t5.png";
import t6 from "../../../asset/user/t6.png";
import p1 from "../../../asset/user/p1.png";
import p2 from "../../../asset/user/p2.png";
import p3 from "../../../asset/user/p3.png";
import p4 from "../../../asset/user/p4.png";
import Image from "next/image";
import { GiCagedBall, GiSoccerBall } from "react-icons/gi";
import { BiSolidCricketBall } from "react-icons/bi";
import { PiTennisBallFill } from "react-icons/pi";
import { FaBasketballBall, FaVolleyballBall } from "react-icons/fa";
import l1 from "../../../asset/user/l1.png";
import live from "../../../asset/user/liveimg.png";
const Sports = () => {
  const [activeSport, setActiveSport] = useState(1);
  const [liveUpcoming, setLiveUpcoming] = useState(1);
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
  const matchCard = [
    {
      id: 1,
      title: "",
      imgA: t1,
      imgB: t2,
    },
    {
      id: 2,
      title: "",
      imgA: t3,
      imgB: t4,
    },
    {
      id: 3,
      title: "",
      imgA: t5,
      imgB: t6,
    },
    {
      id: 4,
      title: "",
      imgA: t1,
      imgB: t2,
    },
    {
      id: 5,
      title: "",
      imgA: t3,
      imgB: t4,
    },
  ];
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

  const handleActiveSport = (id: any) => {
    setActiveSport(id);
  };

  const handleLiveUpcomig = (id: any) => {
    setLiveUpcoming(id);
  };

  return (
    <div className={`mt-2`}>
      <div
        className={` justify-between overflow-scroll w-[100wh] flex px-4 py-2 gap-2 `}
      >
        {matchCard.map((item) => {
          return (
            <div
              style={{
                boxShadow: "0px 5px 12px 0px rgba(196, 201, 212, 0.20)",
              }}
              key={item.id}
              className={` cursor-pointer rounded-[16px]   px-3 py-1 flex flex-col   `}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Image src={item.imgA} alt="" className="w-[35px] h-[35px]" />
                  <p className="font-bold text-lg">2</p>
                </div>
                <span className="font-bold text-xl ">:</span>
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-lg">0</p>

                  <Image src={item.imgB} alt="" className="w-[35px] h-[35px]" />
                </div>
              </div>
              <p
                className={`text-center text-[#ED1C24] w-[130px] font-bold text-sm `}
              >
                38-<span className="font-normal text-xs">(1st Half)</span>
              </p>
            </div>
          );
        })}
      </div>

      <div className={`flex justify-between mt-3 w-[100%]`}>
        <p
          onClick={() => handleLiveUpcomig(1)}
          className={`w-[100%] text-center border-b-[3px] cursor-pointer ${
            liveUpcoming === 1 ? "border-[#0C49BE]  text-[#0C49BE]" : ""
          } font-bold pb-2 `}
        >
          LIVE
        </p>
        <p
          onClick={() => handleLiveUpcomig(2)}
          className={`w-[100%] text-center border-b-[3px] cursor-pointer ${
            liveUpcoming === 2 ? "border-[#0C49BE] text-[#0C49BE]" : ""
          } font-bold pb-2 `}
        >
          Upcoming
        </p>
      </div>
      <div
        className={` justify-between overflow-scroll w-[100wh] flex px-4 mt-5 gap-2 `}
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

      {/* bet system  */}
      <div>
        <div className={`px-5 py-3 border-t mt-4`}>
          <div className={`w-[100%] flex justify-between   `}>
            <div className={`flex items-center gap-1`}>
              <Image src={l1} alt="" />{" "}
              <p className={`text-[#797D86] font-semibold text-sm`}>
                Champions League, Group B
              </p>
            </div>
            <div>
              <Image className="" src={live} alt="" />
            </div>
          </div>

          <div className={`flex items-center mt-2 justify-between w-[100%]`}>
            <div className={`flex flex-col  justify-between`}>
              <p className={`text-[15px] font-semibold text-[#17191C]`}>
                Porto
              </p>
              <p className={`text-[15px] font-semibold text-[#17191C] `}>
                Liverpool FC
              </p>
            </div>
            <div className={`flex gap-2`}>
              <div
                className={`py-1 cursor-pointer min-w-[60px] bg-gray-300 rounded-[12px] flex flex-col items-center justify-center`}
              >
                <p className={`text-xs text-[#797D86] font-semibold`}>1</p>
                <p className={`text-sm text-[#797D86] italic `}>3.17</p>
              </div>
              <div
                className={`py-1 cursor-pointer min-w-[60px] bg-gray-300 rounded-[12px] flex flex-col items-center justify-center gap0-1`}
              >
                <p className={`text-xs  text-[#797D86] font-semibold`}>1</p>
                <p className={`text-[15px] text-[#797D86] italic `}>3.17</p>
              </div>
              <div
                className={`py-1 cursor-pointer min-w-[60px] bg-gray-300 rounded-[12px] flex flex-col items-center justify-center gap0-1`}
              >
                <p className={`text-xs text-[#797D86] font-semibold`}>1</p>
                <p className={`text-[15px] text-[#797D86] italic `}>3.17</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-[#E4E5E8] h-[10px] w-[100%]`}></div>

        <div className={`px-5 py-3  `}>
          <div className={`w-[100%] flex justify-between   `}>
            <div className={`flex items-center gap-1`}>
              <Image src={l1} alt="" />{" "}
              <p className={`text-[#797D86] font-semibold text-sm`}>
                Champions League, Group B
              </p>
            </div>
            <div>
              <p className={`text-green-500 font-semibold text-sm`}>
                08.10 / 16:45
              </p>
            </div>
          </div>

          <div className={`flex items-center mt-2 justify-between w-[100%]`}>
            <div className={`flex flex-col  justify-between`}>
              <p className={`text-[15px] font-semibold text-[#17191C]`}>
                Porto
              </p>
              <p className={`text-[15px] font-semibold text-[#17191C] `}>
                Liverpool FC
              </p>
            </div>
            <div className={`flex gap-2`}>
              <div
                className={`py-1 cursor-pointer min-w-[60px] bg-gray-300 rounded-[12px] flex flex-col items-center justify-center`}
              >
                <p className={`text-xs text-[#797D86] font-semibold`}>1</p>
                <p className={`text-sm text-[#797D86] italic `}>3.17</p>
              </div>
              <div
                className={`py-1 cursor-pointer min-w-[60px] bg-gray-300 rounded-[12px] flex flex-col items-center justify-center gap0-1`}
              >
                <p className={`text-xs  text-[#797D86] font-semibold`}>1</p>
                <p className={`text-[15px] text-[#797D86] italic `}>3.17</p>
              </div>
              <div
                className={`py-1 cursor-pointer min-w-[60px] bg-gray-300 rounded-[12px] flex flex-col items-center justify-center gap0-1`}
              >
                <p className={`text-xs text-[#797D86] font-semibold`}>1</p>
                <p className={`text-[15px] text-[#797D86] italic `}>3.17</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-[#E4E5E8] h-[10px] w-[100%]`}></div>

        <div className={`px-5 py-3  `}>
          <div className={`w-[100%] flex justify-between   `}>
            <div className={`flex items-center gap-1`}>
              <Image src={l1} alt="" />{" "}
              <p className={`text-[#797D86] font-semibold text-sm`}>
                Champions League, Group B
              </p>
            </div>
            <div>
              <p className={`text-green-500 font-semibold text-sm`}>
                11.10 / 1:45
              </p>
            </div>
          </div>

          <div className={`flex items-center mt-2 justify-between w-[100%]`}>
            <div className={`flex flex-col  justify-between`}>
              <p className={`text-[15px] font-semibold text-[#17191C]`}>
                Porto
              </p>
              <p className={`text-[15px] font-semibold text-[#17191C] `}>
                Liverpool FC
              </p>
            </div>
            <div className={`flex gap-2`}>
              <div
                className={`py-1 cursor-pointer min-w-[60px] bg-gray-300 rounded-[12px] flex flex-col items-center justify-center`}
              >
                <p className={`text-xs text-[#797D86] font-semibold`}>1</p>
                <p className={`text-sm text-[#797D86] italic `}>3.17</p>
              </div>
              <div
                className={`py-1 cursor-pointer min-w-[60px] bg-gray-300 rounded-[12px] flex flex-col items-center justify-center gap0-1`}
              >
                <p className={`text-xs  text-[#797D86] font-semibold`}>1</p>
                <p className={`text-[15px] text-[#797D86] italic `}>3.17</p>
              </div>
              <div
                className={`py-1 cursor-pointer min-w-[60px] bg-gray-300 rounded-[12px] flex flex-col items-center justify-center gap0-1`}
              >
                <p className={`text-xs text-[#797D86] font-semibold`}>1</p>
                <p className={`text-[15px] text-[#797D86] italic `}>3.17</p>
              </div>
            </div>
          </div>
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

      {/* casino popular game */}

      <div className={`p-4 `}>
        <div className="flex justify-between">
          <p className="font-bold text-gray-800  text-sm">
            Casino Popular Game
          </p>
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

      {/* Live Casino */}

      <div className={`p-4 `}>
        <div className="flex justify-between">
          <p className="font-bold text-gray-800  text-sm">Live Casino</p>
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

export default Sports;
