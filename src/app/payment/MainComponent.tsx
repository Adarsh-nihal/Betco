"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import illustration from "../../asset/user/Illustration (1).png";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BottomNavbar from "../component/user/BottomNavbar";
import { Radio, useToast } from "@chakra-ui/react";
import profit1 from "../../asset/user/profit1.png";
import profit2 from "../../asset/user/profit2.png";
const MainComponent = () => {
  const toast = useToast();
  const [radio, setRadioBtn] = useState(0);
  const [value, setValue] = useState<any>(0);
  const paymentdata = [
    {
      id: 1,
      gateway: "PhonePay",
      img: profit1,
      processing_time: 10,
      min_limit: 100,
      max_limit: 1000,
    },
    {
      id: 2,
      gateway: "PhonePay",
      img: profit1,
      processing_time: 10,
      min_limit: 100,
      max_limit: 1000,
    },
    {
      id: 3,
      gateway: "PhonePay",
      img: profit1,
      processing_time: 10,
      min_limit: 100,
      max_limit: 1000,
    },
  ];

  const handleValueChange = (event: any) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleButtonClick = (e: any) => {
    e.preventDefault();

    if (radio) {
      if (value >= 100 && value <= 20000) {
        toast({
          title: `Added`,
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      } else {
        toast({
          title: `balance should be between 10-20000`,
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Select Payment Mode",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  const selectPaymentOption = (id: any, data: any) => {
    setRadioBtn(id);
  };
  return (
    <div className={` md:rounded-tl-[18px] md:rounded-tr-[18px]   h-[100px]`}>
      <div
        className={`p-5 flex  md:rounded-tl-[18px] md:rounded-tr-[18px]  justify-between  items-center text-black `}
      >
        <span className={`cursor-pointer`}>
          <Link href="/">
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
        <p className={`text-[16px] font-bold`}>Payment Method</p>
        <p className={`text-[16px] font-bold`}></p>
      </div>

      <div className={`p-4 text-center overflow-scroll h-[80vh] mb-[150x]`}>
        <div className="flex flex-col gap-4 ">
          {paymentdata.map((item) => {
            return (
              <div
           style={{boxShadow:'4px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}
               className={`rounded-[12px]  border border-gray-100`}>
                <div
                  onClick={() => selectPaymentOption(item.id, item)}
                  key={item.id}
                 
                  className={`cursor-pointer px-4  flex justify-between items-center  p-2`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      className={`h-[40px] w-[40px] p-2 rounded-[8px] bg-blue-700`}
                      src={item.img}
                      alt=""
                    />
                    <div className="flex justify-start items-start flex-col ">
                      <p className=" text-sm font-medium">{item.gateway}</p>
                      <p className=" text-[10px] font-light">
                        Min {item.min_limit}-{item.max_limit}
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] ">
                    Processing Time :{" "}
                    <span className="text-green-500">
                      {item.processing_time}
                    </span>{" "}
                  </p>

                  <Radio isChecked={radio === item.id ? true : false}></Radio>
                </div>
               {radio===item.id&& <div className={`min-h-[200px] duration-500 ease-in-out border-t`}>

                </div>}
              </div>
            );
          })}
        </div>

        <form onSubmit={(e) => handleButtonClick(e)}>
          <div className={`mt-10 flex flex-col items-center justify-center`}>
            <p className={`text-xl font-semibold text-gray-600`}>
              Enter your amount
            </p>
            <div
              className={` flex  font-bold w-[70%] mt-2 px-4 text-2xl items-center rounded-lg bg-gray-200`}
            >
              <p>INR</p>
              <input
                value={value}
                onChange={handleValueChange}
                className={`outline-none w-[100%] p-4 bg-gray-200  border-none `}
              />
            </div>
          </div>

          <button
            className={`w-[80%] mt-[40px] text-xs rounded-[12px] p-[6px] text-white font-bold bg-[#0C49BE]`}
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div className={`p-3 fixed z-10 bottom-4 w-[100%] md:w-[400px] `}>
        <BottomNavbar active="2" />
      </div>
    </div>
  );
};

export default MainComponent;
