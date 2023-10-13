import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Whyus from "@/components/Whyus";

export default function Home() {
  const [foodName, setFoodName] = useState("");
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full">
        <Banner />
        <Whyus />
        <div className="flex flex-col w-1/2 items-center justify-center">
          <span>Mulai mencari makanan</span>
          <input
            type="text"
            className="border-2 w-full rounded-md px-2 py-1 border-black"
            placeholder="Masukkan sebuah nama makanan"
            defaultValue={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
