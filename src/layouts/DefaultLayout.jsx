import Navbar from "@/components/Navbar";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DefaultLayout;
