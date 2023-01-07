import React from "react";
import Image from "next/image";
import Wrapper from "../wrapper/Wrapper";
const SearchBar = () => {
  return (
    <Wrapper styles={""}>
      <div className="flex justify-between items-center h-[5rem]">
        <Image
          alt={"AirbnbTextLogo"}
          src="../airbnbTextLogo.svg"
          width={118}
          height={40}
          className=""
        />
        {/* Second item */}
        <div className="border border-gray-200 h-[48px] shadow-lg rounded-full max-w-fit flex gap-4 px-2 items-center">
          <p className="text-base pl-6">
            Anywhere{" "}
            <span className="border border-gray-300 ml-2 max-h-[24px]"></span>
          </p>
          <p className="text-base">
            Any week{" "}
            <span className="border border-gray-300 ml-3 max-h-[24px]"></span>
          </p>
          <div className="flex gap-4 items-center">
            <p className="text-gray-400">Add guests</p>
            <div className="rounded-full bg-[#FF385C] max-w-fit p-2">
              <Image
                alt="searchIcon"
                src="../searchIcon.svg"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        {/* Third item */}
        <div className="flex gap-8 items-center">
          <p className="font-medium text-base">Airbnb your home</p>
          <Image alt={"World Map"} src="../globe.svg" width={20} height={20} />
          <div className="border border-gray-300 flex rounded-full pl-4 pr-2 h-12 gap-4">
            <Image
              alt="humberger menu"
              src="../humbergerMenu.svg"
              width={16}
              height={16}
            />
            <Image
              alt="humberger menu"
              src="../userSkeleton.svg"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchBar;
