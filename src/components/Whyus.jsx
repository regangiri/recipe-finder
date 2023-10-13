import Image from "next/image";
import React from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const Whyus = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[500px] h-[500px] ml-5">
        <Image
          src={"/assets/regantod.png"}
          fill
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
      <div className="flex flex-col w-1/2 pl-32 items-start">
        <span className="text-3xl font-medium leading-relaxed">Why Us</span>
        <p className="text-justify mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          laborum officiis sunt odit, fugiat voluptatibus recusandae animi
          aliquid libero laboriosam quis doloribus quae aliquam beatae ullam
          maxime tenetur nesciunt voluptate!
        </p>
        <div className="flex items-center mt-2">
          <CheckRoundedIcon className="text-blue-500 mr-2" />
          <p>kenapa ahya gay ?</p>
        </div>
        <div className="flex items-center mt-2 ">
          <CheckRoundedIcon className="text-blue-500 mr-2" />
          <p>kenapa regan gay ?</p>
        </div>
        <div className="flex items-center mt-2">
          <CheckRoundedIcon className="text-blue-500 mr-2" />
          <p>kenapa aan gay ?</p>
        </div>
        <div className="flex items-center mt-2">
          <CheckRoundedIcon className="text-blue-500 mr-2" />
          <p>kenapa arsyad gay ?</p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
