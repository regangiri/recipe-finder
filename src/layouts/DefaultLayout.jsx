import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
