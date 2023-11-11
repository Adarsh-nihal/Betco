"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import c1 from '../../../asset/user/Component 82.png'
import c2 from '../../../asset/user/c2.png'
import c3 from '../../../asset/user/c3.png'
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux-arch/store";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const userAuth = useSelector((state: RootState) => state);
  const {
    username = "",
    max_limit = 0,
    min_limit = 0,
    user_id = "",
    full_name = "",
    amount = 0,
  } = userAuth?.combineR?.userAuth?.data?.user || {};

  const settings = {
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 792,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const walletCards = [
    {
      id: 1,
      title: username,
      userid: user_id,
      ballancetitle: "Available Balance",
      balance: amount,
      img: c1,
    },
    {
      id: 2,
      title: username,
      userid: user_id,
      ballancetitle: "Available Balance",
      balance: amount,
      img: c2,
    },
    {
      id: 3,
      title: username,
      userid: user_id,
      ballancetitle: "Available Balance",
      balance: amount,
      img: c3,
    },
  ];

  const goToSlide = (index: any) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="custom-carousel w-[100%] mt-3 relative">
      <Slider {...settings}>
        {walletCards.map((item, index) => {
          return (
            <div key={item.id} className="w-[100%] mt-2 relative">
              <Image src={item.img} className="w-[100%] h-[140px]" alt="" />
             
            </div>
          );
        })}
      </Slider>

    
    </div>
  );
};

export default Carousel;
