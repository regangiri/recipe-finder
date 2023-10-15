import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="px-32 py-8 flex justify-between bg-green-500 cursor-pointer">
      <span className="text-xl" onClick={() => router.push("/")}>
        Home
      </span>
      <div className="flex justify-between">
        <span
          className="text-xl mx-2 cursor-pointer"
          onClick={() => router.push("/recipe-search")}
        >
          Recipe
        </span>
        <span
          className="text-xl mx-2 cursor-pointer"
          onClick={() => router.push("/about")}
        >
          About
        </span>
      </div>
    </div>
  );
};

export default Navbar;
