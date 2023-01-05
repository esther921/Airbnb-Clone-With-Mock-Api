import React, { useRef, useState } from "react";
import Image from "next/image";
import { ICONDATA } from "../../utils/iconData";
import Link from "next/link";
import Wrapper from "../wrapper/Wrapper";

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
    <Wrapper>
      <div
        ref={iconScroll}
        onScroll={generateScroll}
        className="flex gap-12 overflow-x-auto scrollbar-hide smooth-scroll ease-in-out duration-300 w-full"
      >
        {ICONDATA.map((items, i) => {
          const { alt, src } = items;
          return (
            <>
              <Link
                href={`/slug/${alt}`}
                key={i}
                className={`flex flex-col items-center text-gray-400 hover:text-black active:border-black active:border-b-2 hover:border-b-2 hover:mb-3 hover:transition-none hover:animate-none active:text-black`}
              >
                <Image src={src} alt={alt} width={24} height={24} />
                <p className="text-xs flex w- justify-center whitespace-nowrap">
                  {alt}
                </p>
              </Link>
              {/* Scrolling buttons  */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button
                  onClick={() => {
                    iconScroll.current.scrollLeft -= 302;
                  }}
                  href=""
                  className=" border-white bg-white text-black"
                >
                  ❮
                </button>
                <button
                  onClick={() => {
                    iconScroll.current.scrollLeft += 302;
                  }}
                  href=""
                  className="border-white bg-white text-black"
                >
                  ❯
                </button>
              </div>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default IconTitleCard;
