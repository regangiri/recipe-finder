import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const RecipeSearch = () => {
  const router = useRouter();
  const [foodName, setFoodName] = useState("");
  const [foodResult, setFoodResult] = useState([]);
  const searchRecipe = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${foodName}&number=10&apiKey=acd33669900f407bac473cccf57cfbf1`
      )
      .then((res) => {
        setFoodResult(res.data.results);
      });
  };
  console.log(foodResult);
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-12">
        <span>Mulai mencari makanan</span>
        <div className="flex w-1/2">
          <input
            type="text"
            className="border-2 w-full rounded-md rounded-r-none px-2 py-1 border-black"
            placeholder="Masukkan sebuah nama makanan"
            defaultValue={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <button
            onClick={() => searchRecipe()}
            className="rounded-md border-[1px] rounded-l-none border-black px-2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {foodResult.length > 0 &&
          foodResult?.map((data) => {
            return (
              <div
                key={data?.id}
                className="flex flex-col items-center w-[300px] h-[350px] border-[1px] rounded-md mx-3 my-2"
              >
                <span>{data?.title}</span>
                <div className="relative w-full h-[200px]">
                  <Image
                    src={data?.image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
                <button
                  onClick={() => router.push(`/recipe-detail/${data?.id}`)}
                  className="border-[1px]"
                >
                  Detail Recipe
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RecipeSearch;
