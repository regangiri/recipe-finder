import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="assets/sayuran.jpg"
        alt="sayuran"
        width={500}
        height={500}
        className="my-10"
      />
      <div className="w-full min-h-[60vh] text-center px-80  text font-bold content-center flex-col items-center">
        <p>
          {
            "Welcome to Recipe Search web by Ahya, where our passion for cooking and innovation come togehter to bring you delightful culinary experience. We're a team of food enthusiast who believe that cooking should be enjoyable, convenient, and creative. Our Journey Began with a simple idea: to make the most of what's already in your kitchen and turn everyday meals into extraordinary culinary adventures."
          }
        </p>

        <p className="my-8">
          {
            "Here, we've harnessed the power of Spoonacular API to provide you with access to a vast collection of over 10,000 recipes. Our mission is to empower home cooks of all skill levels with the tools and inspiration they need to create delicious, memorable meals. We believe in the magic of ingredients and the joy of sharing flavorful dishes with loved ones"
          }
        </p>

        <p>
          {
            "Whether you're seasoned chef or just starting on your cooking journey, our user-friendly platform offers you a convenient way to find recipes based on the ingredients you have. Say goodbye to last-minute grocery trips and hello to a world of falvors, mastering new cooking techniques, and sharing your culinary triumphs with our vibrant community. Together, we're redefining the way you experince food and turning your kitchen into the heart of your home. Thank you for being a part of our culinary adventure. Happy cooking!"
          }
        </p>
      </div>
    </div>
  );
};

About.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default About;
