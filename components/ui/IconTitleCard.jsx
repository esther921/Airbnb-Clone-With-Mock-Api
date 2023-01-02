import React from "react";
import Image from "next/image";
import { ICONDATA } from "../../utils/iconData";

const IconTitleCard = () => {
  return (
    <div className="flex gap-12 carousel w-full">
      {ICONDATA.map((items, i) => {
        const { alt, src } = items;
        return (
          <div key={i} className={` carousel-item relative`}>
            <div className="flex flex-col items-center">
              <Image src={src} alt={alt} width={24} height={24} />
              <p>{alt}</p>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconTitleCard;
