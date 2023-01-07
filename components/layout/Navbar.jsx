import React from "react";
import Image from "next/image";
import IconTitleCard from "../ui/IconTitleCard";
import SearchBar from "../ui/SearchBar";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="sticky top-0">
        <SearchBar />
        <div className="border-b"></div>
        <IconTitleCard />
      </div>
    </div>
  );
};
export default Navbar;
