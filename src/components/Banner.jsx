import Image from "next/image";
import React from "react";

const banner = () => {
  return (
    <div className="flex w-full items-center pl-32 h-96 bg-slate-400">
      <div className="flex flex-col w-1/2 items-start">
        <span className="text-3xl font-medium leading-relaxed">
          Website Makan Kentang dapet Kalori
        </span>
        <p className="text-justify mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          laborum officiis sunt odit, fugiat voluptatibus recusandae animi
          aliquid libero laboriosam quis doloribus quae aliquam beatae ullam
          maxime tenetur nesciunt voluptate!
        </p>
        <button className="mt-2 bg-green-500 p-2 rounded-sm text-white ">
          Mulai Makan Kentang
        </button>
      </div>
      <div className="relative w-full h-full ml-5">
        <Image
          src={"/assets/kakbagus.png"}
          fill
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default banner;
