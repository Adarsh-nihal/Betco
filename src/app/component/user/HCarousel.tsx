'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import img1 from '../../../asset/user/Frame 1.png'
import img2 from '../../../asset/user/Frame 3.png'


const HCarousel = () => {
    const casinodata = [
        {
          id: 1,
          title: "Provider Name",
          img: img1,
        },
        {
          id: 2,
          title: "Provider Name",
          img: img2,
        },
        {
          id: 3,
          title: "Provider Name",
          img: img1,
        },
        {
          id: 4,
          title: "Provider Name",
          img: img2,
        },
        
      ];
  const settings:any= {
    centerMode: true,
    centerPadding:25,
    infinite: true,
    slidesToShow: 2,
    speed: 1000,
    autoplay: true,
    autoplaySpeed:3000,
    dots: false, // Remove the dots
    arrows: false,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 792,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="custom-carousel w-[100%]  mt-2">
      <Slider {...settings}>
        {casinodata.map((image:any, index:any) => (
          <>
          <div key={index}>
            <Image
              className="w-[100%]  rounded-lg lg:rounded-2xl"
              src={image.img}
              alt={`Image ${index}`}
            />
          </div>
          </>
        
        ))}
      </Slider>
    </div>
  );
};

export default HCarousel;
