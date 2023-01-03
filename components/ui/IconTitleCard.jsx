import React, { useRef, useState } from "react";
import Image from "next/image";
import { ICONDATA } from "../../utils/iconData";

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
    <div
      ref={iconScroll}
      onScroll={generateScroll}
      className="flex gap-12 overflow-x-auto scrollbar-hide smooth-scroll ease-in-out duration-300"
    >
      {ICONDATA.map((items, i) => {
        const { alt, src } = items;
        return (
          <>
            <div key={i} className={`flex flex-col items-center`}>
              <Image src={src} alt={alt} width={24} height={24} />
              <p>{alt}</p>
            </div>

            <div
              onClick={() => {
                iconScroll.current.scrollLeft -= 302;
              }}
              className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide3" className=" border-white bg-white text-black">
                ❮
              </a>
              <a href="#slide1" className="border-white bg-white text-black">
                ❯
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default IconTitleCard;
