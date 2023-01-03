import React from "react";
import { ICONDATA } from "../../utils/iconData";
import Image from "next/image";
import IconTitleCard from "../ui/IconTitleCard";
import SearchBar from "../ui/SearchBar";

const Navbar = () => {
  return (
    <div className="">
      <SearchBar />
      <div className="divide divide-y-2"></div>
      <IconTitleCard />
    </div>
  );
};
export default Navbar;
