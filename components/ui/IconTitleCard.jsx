import React, { useRef, useState } from "react";
import Image from "next/image";
import { ICONDATA } from "../../utils/iconData";
import Link from "next/link";
import Wrapper from "../wrapper/Wrapper";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const IconTitleCard = () => {
  const iconScroll = useRef(null);
  const iconRef = useRef(0);
  const prevPosition = useRef(0);
  const [icons, setIcons] = useState(ICONDATA);
  const [position, setPosition] = useState(0);

  const generateScroll = (e) => {
    setPosition(() => e.target.scrollLeft);
    if (position - prevPosition.current >= 302) {
      prevPosition.current = position;
      setIcons(() => [...icons, ICONDATA[iconRef.current]]);
      iconRef.current++;
      if (iconRef.current >= ICONDATA.length) {
        iconRef.current = 0;
      }
    } else if (
      prevPosition.current - position > 302 &&
      ICONDATA.length < icons.length
    ) {
      prevPosition.current = position;
      icons.pop();
      setIcons(() => icons);
    }
  };
  return (
    <Wrapper styles={`mt-9`}>
      <div
        ref={iconScroll}
        onScroll={generateScroll}
        className="flex gap-12 overflow-x-auto scrollbar-hide smooth-scroll ease-in-out duration-300 w-full"
      >
        {ICONDATA.map((items, i) => {
          const { alt, src } = items;
          return (
            <>
              <div className="border-transparent hover:text-black group z-50 cursor-pointer">
                <div
                  key={i}
                  className={`flex flex-col items-center hover:border-gray-300 border-transparent text-gray-500 active:border-black border-b-2 active:text-black`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={24}
                    height={24}
                    className={`text-gray-500 opacity-60 group-hover:opacity-100 `}
                  />
                  <p className="text-xs flex justify-center whitespace-nowrap mb-2 mt-2 group-hover:text-black">
                    {alt}
                  </p>
                </div>
              </div>

              {/* Scrolling buttons  */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-4">
                <div className=" p-1 text-2xl rounded-full bg-white border  text-black cursor-pointer">
                  <BiChevronLeft
                    onClick={() => {
                      iconScroll.current.scrollLeft -= 700;
                    }}
                  />
                </div>
                {/* Right Arrow */}
                <div className="p-1 text-2xl rounded-full border bg-white text-black cursor-pointer">
                  <BiChevronRight
                    onClick={() => {
                      iconScroll.current.scrollLeft += 700;
                    }}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default IconTitleCard;
