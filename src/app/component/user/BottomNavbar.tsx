"use client";
import React, { useState } from "react";
import { RiHome5Fill } from "react-icons/ri";
import { IoIosWallet } from "react-icons/io";
import { FaBaseball } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from "next/link";
const BottomNavbar = ({ active }: { active?: any }) => {
  const [isActive, setActive] = useState(1);
  const router = useRouter();
  const data = [
    {
      id: 1,
      title: "",
      icon: <RiHome5Fill fontSize="20px" />,
      route: "/",
    },
    {
      id: 2,
      title: "",
      icon: <IoIosWallet fontSize="20px" />,
      route: "/payment",
    },
    {
      id: 3,
      title: "",
      icon: <FaBaseball fontSize="20px" />,
      route: "",
    },
    {
      id: 4,
      title: "",
      icon: <RiAdminLine fontSize="20px" />,
      route: "myprofile",
    },
  ];

  const handleRoute = (route: any, id: any) => {
    setActive(id);
    // route.push(route);
  };

  return (
    <div
      className={` border p-2 px-4  border-[#9DB2CE] bg-[#FFF] rounded-[12px] flex justify-between w-[100%]`}
    >
      {data.map((item) => {
        return (
          <div
            onClick={() => handleRoute(item.route, item.id)}
            key={item.id}
            className={`${
              item.id == active
                ? "bg-[#0C49BE] text-white"
                : " text-gray-400"
            } cursor-pointer  p-[8px] rounded-[50%]`}
          >
            <Link href={item.route}>{item.icon}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavbar;
