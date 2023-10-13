import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="px-32 py-8 flex justify-between">
      <span className="text-xl" onClick={() => router.push("/")}>
        Home
      </span>
      <div className=" flex justify-between">
        <span
          className="text-xl mx-2 cursor-pointer"
          onClick={() => router.push("/recipe-search")}
        >
          Recipe
        </span>
        <span
          className="text-xl mx-2 cursor-pointer"
          onClick={() => router.push("/counting-akg")}
        >
          Counting Akg
        </span>
      </div>
    </div>
  );
};

export default Navbar;
