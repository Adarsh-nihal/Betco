"use client";
import TopNavbar from "@/app/component/user/TopNavbar";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import BottomNavbar from "./component/user/BottomNavbar";
import { GoTrophy } from "react-icons/go";
import { MdOutlineLiveTv } from "react-icons/md";
import { PiSoccerBall, PiTennisBallFill } from "react-icons/pi";
import { RiLiveLine } from "react-icons/ri";
import { IoGiftOutline } from "react-icons/io5";
import imgc from "../asset/user/Component 82.png";
import Carousel from "./component/user/Carousel";
import Casino from "./component/user/Casino";
import Sports from "./component/user/Sports";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

function MainComponent() {
  const [isListening, setIsListening] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [listeningText, setListeningText] = useState("");
  const recognition = new window.webkitSpeechRecognition();
  const [activeCategory, setActiveCategory] = useState(1);

  const handleListeningClick = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
      setInputValue(""); // Clear input value when listening starts
    }
  };

  recognition.onstart = () => {
    setIsListening(true);
    setListeningText("Listening...");
  };

  recognition.onend = () => {
    setIsListening(false);
    setListeningText("");
  };

  recognition.onresult = (event: any) => {
    const result = event.results[0][0].transcript;
    setInputValue(result);
    setListeningText("");
  };

  useEffect(() => {
    if (!isListening) {
      setListeningText("");
    }
  }, [isListening]);

  const smallnavigation = [
    {
      id: 1,
      title: "Live",
      icon: <MdOutlineLiveTv fontSize="25px" />,
    },
    {
      id: 2,
      title: "Sports",
      icon: <GoTrophy fontSize="25px" />,
    },
    {
      id: 3,
      title: "Casino",
      icon: <PiSoccerBall fontSize="25px" />,
    },
    {
      id: 4,
      title: "Live Casino",
      icon: <RiLiveLine fontSize="25px" />,
    },
    {
      id: 5,
      title: "Promotion",
      icon: <IoGiftOutline fontSize="25px" />,
    },
  ];

  const handleCategoryActive = (id: any) => {
    setActiveCategory(id);
  };
  return (
    <div className={`overflow-scroll h-[100vh] md:h-[88vh]`}>
      <div
        className={`sticky top-0 z-10 bg-[#FFF] md:rounded-tl-[20px]  md:rounded-tr-[20px]`}
      >
        <TopNavbar />
      </div>
      <div className="mb-[100px]">
        <div className={` px-4 pt-1 flex flex-col gap-4 `}>
          {/* input searc  */}
          <div className={`relative w-[100%]`}>
            <input
              className={`pl-10 pr-10 py-2 w-full border rounded-[16px]  outline-none text-sm`}
              type="text"
              placeholder={isListening ? "" : "Search"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className={`absolute inset-y-0 left-0 flex items-center pl-2`}>
              <svg
                cursor={"pointer"}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M19 19L15.2223 15.2156L19 19ZM17.3158 10.1579C17.3158 12.0563 16.5617 13.8769 15.2193 15.2193C13.8769 16.5617 12.0563 17.3158 10.1579 17.3158C8.2595 17.3158 6.43886 16.5617 5.0965 15.2193C3.75413 13.8769 3 12.0563 3 10.1579C3 8.2595 3.75413 6.43886 5.0965 5.0965C6.43886 3.75413 8.2595 3 10.1579 3C12.0563 3 13.8769 3.75413 15.2193 5.0965C16.5617 6.43886 17.3158 8.2595 17.3158 10.1579V10.1579Z"
                  stroke="#737B8C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div
              onClick={handleListeningClick}
              className="absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <svg
                cursor="pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M10.75 2C9.75544 2 8.80161 2.39509 8.09835 3.09835C7.39509 3.80161 7 4.75544 7 5.75V11C7 11.9946 7.39509 12.9484 8.09835 13.6517C8.80161 14.3549 9.75544 14.75 10.75 14.75C11.7446 14.75 12.6984 14.3549 13.4017 13.6517C14.1049 12.9484 14.5 11.9946 14.5 11V5.75C14.5 4.75544 14.1049 3.80161 13.4017 3.09835C12.6984 2.39509 11.7446 2 10.75 2Z"
                  fill={`${isListening ? "red" : "#737B8C"}`}
                />
                <path
                  d="M4.75 10.25C4.94891 10.25 5.13968 10.329 5.28033 10.4697C5.42098 10.6103 5.5 10.8011 5.5 11C5.5 12.3924 6.05312 13.7277 7.03769 14.7123C8.02226 15.6969 9.35761 16.25 10.75 16.25C12.1424 16.25 13.4777 15.6969 14.4623 14.7123C15.4469 13.7277 16 12.3924 16 11C16 10.8011 16.079 10.6103 16.2197 10.4697C16.3603 10.329 16.5511 10.25 16.75 10.25C16.9489 10.25 17.1397 10.329 17.2803 10.4697C17.421 10.6103 17.5 10.8011 17.5 11C17.5003 12.6606 16.8885 14.263 15.7816 15.5008C14.6747 16.7386 13.1503 17.525 11.5 17.7095V19.25C11.5 19.4489 11.421 19.6397 11.2803 19.7803C11.1397 19.921 10.9489 20 10.75 20C10.5511 20 10.3603 19.921 10.2197 19.7803C10.079 19.6397 10 19.4489 10 19.25V17.7095C8.34971 17.525 6.82534 16.7386 5.71842 15.5008C4.61149 14.263 3.99968 12.6606 4 11C4 10.8011 4.07902 10.6103 4.21967 10.4697C4.36032 10.329 4.55109 10.25 4.75 10.25Z"
                  fill={`${isListening ? "red" : "#737B8C"}`}
                />
              </svg>
            </div>
            {listeningText && (
              <div className="absolute inset-y-0 left-10 flex items-center text-gray-400">
                {listeningText}
              </div>
            )}
          </div>

          <div
            className={` justify-between overflow-scroll w-[100wh] flex p-2  gap-4 `}
          >
            {smallnavigation.map((item) => {
              return (
                <div
                  onClick={() => handleCategoryActive(item.id)}
                  style={{
                    boxShadow: "0px 6px 12px 0px rgba(151, 160, 178, 0.26)",
                  }}
                  key={item.id}
                  className={`  rounded-[14px] py-[6px] ${
                    item.id === activeCategory
                      ? "bg-[#2E3138] text-white"
                      : " text-[#17191C]"
                  } gap-1 flex flex-col items-center cursor-pointer justify-center  shadow-2xl `}
                >
                  <span className="">{item.icon}</span>
                  <p
                    className={`text-xs  font-semibold w-[80px] px-1 text-center`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`-mt-4`}>
          <Carousel />
        </div>
        {activeCategory === 1 && <Sports/>}
        {activeCategory === 2 && <Sports/>}

        {activeCategory === 3 && <Casino />}
      </div>

      <div className={`p-3 fixed z-10 bottom-4 w-[100%] md:w-[400px] `}>
        <BottomNavbar active="1" />
      </div>
    </div>
  );
}

export default MainComponent;
