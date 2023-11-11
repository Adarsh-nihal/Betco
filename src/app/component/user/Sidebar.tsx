import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BsFillCalendarEventFill, BsGiftFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidWallet, BiSolidOffer, BiSolidPhoneCall } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import profile from "../../../asset/user/81.png";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { BsPatchQuestion } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState(-1);
  const btnRef = useRef<any>();
const [theme,setTheme]=useState(1)
  const sidebarData = [
    {
      id: 1,
      title: "Calendar",
      icon: <BsFillCalendarEventFill fontSize="20px" />,
      route: "calendar",
      message: "2",
    },
    {
      id: 2,
      title: "Rewards",
      icon: <BsGiftFill fontSize="20px" />,
      route: "rewards",
      message: "",
    },
    {
      id: 3,
      title: "Address",
      icon: <FaLocationDot fontSize="20px" />,
      route: "address",
      message: "",
    },
    {
      id: 4,
      title: "Payments Methods",
      icon: <BiSolidWallet fontSize="20px" />,
      route: "payment",
      message: "4",
    },
    {
      id: 5,
      title: "Offers",
      icon: <BiSolidOffer fontSize="25px" />,
      route: "offers",
      message: "",
    },
    {
      id: 6,
      title: "Refer a Friend",
      icon: <FiUsers fontSize="20px" />,
      route: "refer",
      message: "",
    },
    {
      id: 7,
      title: "Support",
      icon: <BiSolidPhoneCall fontSize="25px" />,
      route: "support",
      message: "6",
    },
  ];

const handleTheme=(id:any)=>{
    setTheme(id)

}
  return (
    <>
      <svg
        ref={btnRef}
        onClick={onOpen}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M5.40002 19.8H31V16.2H5.40002V19.8ZM5.40002 28.8H30.75V25.2H5.40002V28.8ZM5.40002 7.20001V10.8H31V7.20001H5.40002Z"
          fill="#17191C"
        />
      </svg>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <div className="flex pt-2 justify-between gap-6 items-center w-[100%]">
              <div className=" flex gap-3 w-[80%]">
                <Image
                  src={profile}
                  className=" h-[50px] w-[50px] bg-yellow-500 rounded-[50%]"
                  alt=""
                />
                <div className="flex flex-col w-[80%]  ">
                  <p className="font-medium text-[16px]">Ashfak Sayem</p>
                  <p className="font-light   text-sm">ashfaksayem@gmail.com</p>
                </div>
              </div>
              <RxCross2 onClick={onClose} fontSize="22px" cursor="pointer" />
            </div>
            <div className="flex flex-col gap-3 mt-10">
              {sidebarData.map((item) => {
                return (
                  <div
                    onClick={() => setActive(item.id)}
                    key={item.id}
                    className={`flex p-3 ${
                      item.id === active ? "bg-[#6759FF] duration-500 ease-in-out" : ""
                    } cursor-pointer ${
                      item.id === active ? "text-white" : ""
                    } rounded-[8px]  justify-between`}
                  >
                    <div className="flex items-center gap-2">
                      <span> {item.icon}</span>
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                    <div>
                      {item.message !== "" && (
                        <span
                          className={`  p-[2px] px-[6px] rounded-[4px] text-sm ${
                            item.id % 2 == 0 ? "bg-red-200" : "bg-purple-200"
                          }  text-black`}
                        >
                          {item.message}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </DrawerBody>

          <DrawerFooter>
            <div className={`w-[100%] mb-10 `}>
              <div className={`h-[2px] w-[100%] bg-gray-100`}></div>
              <div className="p-3">
                <div className={`flex items-center gap-3 font-semibold text-sm`}>
                  {" "}
                  <span>
                    <BsPatchQuestion fontSize="20px" />
                  </span>
                  <p>Colour Scheme</p>
                </div>
                <div className={`w-[100%] flex p-2 mt-4 items-center rounded-[30px] bg-[#F0F0F0] `}>
                  <div onClick={()=>handleTheme(1)} className={`w-[100%] duration-500 ease-in-out ${theme===1?" bg-[#fff] shadow-xl":""} cursor-pointer text-sm font-bold flex items-center justify-center  gap-2  p-1 rounded-[25px] text-center`}>
                    <span>
                      <MdLightMode fontSize="25px"  color="black" />
                    </span>
                    Light
                  </div>
                  <div onClick={()=>handleTheme(2)} className={`w-[100%] duration-500 ease-in-out  ${theme===2?" bg-[#fff] shadow-xl":""} cursor-pointer text-center text-[15px] font-bold flex p-1 rounded-[25px] items-center justify-center  gap-2`}>
                    <span>
                      <CiDark fontSize="25px" />
                    </span>
                    Dark
                  </div>
                </div>
              </div>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
