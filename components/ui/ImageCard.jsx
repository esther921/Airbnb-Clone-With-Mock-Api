import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import Wrapper from "../wrapper/Wrapper";

export const ImageCard = ({ country, rating, date, costPerNight }) => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Wrapper styles={"mt-12"}>
      <div className="max-w-[271px] h-[257px] relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
        >
          <div className="absolute right-5 top-4 select-none">
            <Image src="../like.svg" alt={""} width={21} height={10} />
          </div>
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] p-1 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full  bg-white bg-opacity-90 hover:bg-opacity-100 text-black cursor-pointer">
          <BiChevronLeft onClick={prevSlide} width={0} height={0} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] p-1 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 text-black cursor-pointer">
          <BiChevronRight onClick={nextSlide} width={0} height={0} />
        </div>
        <div className="flex top-4 justify-center py-1">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {/* <RxDotFilled /> */}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col max-w-[271px]">
        <div className="flex justify-between">
          <p>{country}</p>
          <p className="">{rating}</p>
        </div>
        <p>{date}</p>
        <p>{costPerNight}</p>
      </div>
    </Wrapper>
  );
};
