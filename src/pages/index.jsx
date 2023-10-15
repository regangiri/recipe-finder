import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Whyus from "@/components/Whyus";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [foodName, setFoodName] = useState("");
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <Banner />
        <Whyus />
        <div className="flex flex-col w-1/2 min-h-[60vh] items-center">
          <span className="text-xl font-bold py-3">Search for Recipes</span>
          <div className="flex w-3/4">
            <input
              type="text"
              className="border-2 w-full rounded-md px-2 py-1 border-black"
              placeholder="Masukkan sebuah nama makanan"
              defaultValue={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
            <button
              onClick={() =>
                router.push(`/recipe-search?searchQuery=${foodName}`)
              }
              className="rounded-md border-[1px] rounded-l-none border-black px-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
