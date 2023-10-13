import React from "react";

const Navbar = () => {
  return (
    <div className="px-32 py-4 flex justify-between">
      <span className="text-xl">Home</span>
      <div className=" flex justify-between">
        <span className="text-xl mx-2">Recipe</span>
        <span className="text-xl mx-2">Counting Akg</span>
      </div>
    </div>
  );
};

export default Navbar;
