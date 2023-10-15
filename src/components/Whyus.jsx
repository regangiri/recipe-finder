import Image from "next/image";
import React from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const Whyus = () => {
  return (
    <div className="whyus flex items-center justify-center py-16 px-8 text-white">
      <div className="w-1/2" />
      <div className="flex flex-col w-1/2 pl-32 items-start">
        <span className="text-3xl font-medium leading-relaxed">Why Us</span>
        <p className="text-justify mt-2">
          {`At RecipeFinder, we've assembled a treasure trove of culinary possibilities, thanks to the incredible Spoonacular API. With thousands of recipes at your fingertips, we're your trusted partner for making informed cooking decisions. What sets us apart is our ability to help you find the perfect recipe by simply using the ingredients you already have.`}{" "}
        </p>
        <div className="flex items-center mt-2">
          <CheckRoundedIcon className="text-green-500 mr-2" />
          <p>Thousands of recipes stored here with Spoonacular API</p>
        </div>
        <div className="flex items-center mt-2 ">
          <CheckRoundedIcon className="text-green-500 mr-2" />
          <p>Take Control of Your Cooking Destiny</p>
        </div>
        <div className="flex items-center mt-2">
          <CheckRoundedIcon className="text-green-500 mr-2" />
          <p>Find recipe by ingredients</p>
        </div>
        <div className="flex items-center mt-2">
          <CheckRoundedIcon className="text-green-500 mr-2" />
          <p>Your Source for Culinary Inspiration</p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
