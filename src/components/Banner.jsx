import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="banner flex w-full items-center pl-32 h-96 bg-slate-400 text-white">
      <div className="flex flex-col w-1/2 items-start">
        <span className="text-4xl font-medium leading-relaxed">
          Your Fridge, Your Menu
        </span>
        <p className="text-justify mt-2 text-lg">
          {` Find over 10,000 recipes using only your ingredients, saving you time and grocery trips. Discover culinary delights with what's already in your kitchen!`}
        </p>
        <button
          className="mt-2 bg-green-500 p-2 rounded-md text-white"
          onClick={() => router.push("/recipe-search")}
        >
          Search Recipes
        </button>
      </div>
    </div>
  );
};

export default Banner;
