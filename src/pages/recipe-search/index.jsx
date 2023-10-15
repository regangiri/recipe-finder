import DefaultLayout from "@/layouts/DefaultLayout";
import { DeleteForeverOutlined } from "@mui/icons-material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const RecipeSearch = () => {
  const router = useRouter();
  const [foodName, setFoodName] = useState("");
  const [tempIngredient, setTempIngredient] = useState([]);
  const [foodResult, setFoodResult] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("FOODNAME");
  const { searchQuery } = router.query;
  const searchRecipe = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${foodName}&number=10&apiKey=acd33669900f407bac473cccf57cfbf1`
      )
      .then((res) => {
        setFoodResult(res.data.results);
      });
  };

  const searchByIngredients = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${tempIngredient.join(
          ","
        )}&number=10&apiKey=acd33669900f407bac473cccf57cfbf1`
      )
      .then((res) => {
        setFoodResult(res.data);
      });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      let newIngredient = inputValue;
      if (tempIngredient.length > 0) {
        newIngredient = "+" + inputValue;
      }

      newIngredient = newIngredient.replace(/\s/g, "%20");

      setTempIngredient([...tempIngredient, newIngredient]);
      setInputValue("");
    }
  };
  const handleEnter = () => {
    if (inputValue.trim() !== "") {
      let newIngredient = inputValue;
      if (tempIngredient.length > 0) {
        newIngredient = "+" + inputValue;
      }

      newIngredient = newIngredient.replace(/\s/g, "%20");

      setTempIngredient([...tempIngredient, newIngredient]);
      setInputValue("");
    }
  };
  const handleDeleteIngredient = (indexToDelete) => {
    const updatedIngredients = tempIngredient.filter(
      (_, index) => index !== indexToDelete
    );
    setTempIngredient(updatedIngredients);
  };

  const clearIngredient = () => {
    setTempIngredient([]);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=10&apiKey=acd33669900f407bac473cccf57cfbf1`
      )
      .then((res) => {
        setFoodResult(res.data.results);
      });
  }, []);

  console.log(tempIngredient);
  console.log(foodResult);
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-12">
        <span className="text-2xl font-bold my-3">
          Search your desired recipe
        </span>
        <div className="flex my-3">
          <button
            onClick={() => setSearchByCategory("FOODNAME")}
            className={`px-3 py-1 rounded-md border-[1px] border-black mx-3 ${
              searchByCategory === "FOODNAME" ? "bg-green-500" : ""
            }`}
          >
            Search by food name
          </button>
          <button
            onClick={() => setSearchByCategory("INGREDIENTS")}
            className={`px-3 py-1 rounded-md border-[1px] border-black mx-3 ${
              searchByCategory === "INGREDIENTS" ? "bg-green-500" : ""
            }`}
          >
            Search by ingredients
          </button>
        </div>
        {searchByCategory === "FOODNAME" && (
          <div className="flex w-1/2">
            <input
              type="text"
              className="border-2 w-full rounded-md rounded-r-none px-2 py-1 border-black"
              placeholder="Enter Food Name..."
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
        )}
        {searchByCategory === "INGREDIENTS" && (
          <div className="flex-col w-1/2">
            <div className="flex">
              <input
                type="text"
                className="border-2 w-full rounded-md rounded-r-none px-2 py-1 border-green-500"
                placeholder="Enter Ingredients..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={() => handleEnter()}
                className="rounded-md border-[1px] rounded-l-none border-black px-2"
              >
                Enter
              </button>
            </div>
            <div className="flex flex-wrap max-w-1/2">
              <>
                {tempIngredient.map((ingredient, index) => (
                  <div
                    key={index}
                    className="border-[1px] rounded-full px-2 py-1 flex my-2 mx-1"
                  >
                    {ingredient.replace("+", "").replace(/%20/g, " ")}
                    <DeleteForeverOutlined
                      onClick={() => handleDeleteIngredient(index)}
                    />
                  </div>
                ))}
                {tempIngredient.length > 0 && (
                  <div className="flex items-center">
                    <button
                      className="rounded-md border-[1px] mx-1 border-black px-2 bg-green-400 hover:bg-green-500"
                      onClick={() => clearIngredient()}
                    >
                      Clear All
                    </button>
                    <button
                      className="rounded-md border-[1px] mx-1 border-black px-2 bg-green-400 hover:bg-green-500"
                      onClick={() => searchByIngredients()}
                    >
                      Search
                    </button>
                  </div>
                )}
              </>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {foodResult.length > 0 &&
          foodResult?.map((data) => {
            return (
              <div
                key={data?.id}
                className="flex flex-col items-center w-[300px] h-[350px] border-[1px] shadow-lg rounded-md mx-3 my-2"
              >
                <span className="text-lg font-semibold h-16">
                  {data?.title}
                </span>
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
                  className="border-[1px] w-full bg-green-400 hover:bg-green-500 py-2 rounded-full"
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

RecipeSearch.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default RecipeSearch;
