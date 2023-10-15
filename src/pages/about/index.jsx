import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

const About = () => {
  return <div className="w-full min-h-screen">About</div>;
};

About.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default About;
