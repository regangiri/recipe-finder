import DefaultLayout from "@/layouts/DefaultLayout";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const RecipeDetail = ({ foodDetail, foodRecipes }) => {
  const router = useRouter();
  console.log(foodRecipes);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex flex-col w-1/2">
          <span className="text-3xl font-bold mx-16">{foodDetail?.title}</span>
          <div className="relative w-full h-[500px]">
            <Image
              src={foodDetail?.image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Ingredients</span>
          <div
            className="column-container"
            style={{
              columnCount: 2,
              columnGap: "20px",
            }}
          >
            {foodDetail?.extendedIngredients?.map((data, idx) => (
              <div className="flex items-center" key={data?.id}>
                <span className="mx-3">{idx + 1}</span>{" "}
                <span>{data?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="mx-16 text-3xl font-semibold">How To Cook:</span>
      {foodDetail?.analyzedInstructions?.[0]?.steps?.map((data, idx) => (
        <div className="flex ml-16 py-2" key={data?.id}>
          <span className="mx-3">{idx + 1}</span> <span>{data?.step}</span>
        </div>
      ))}
    </div>
  );
};

RecipeDetail.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default RecipeDetail;

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=acd33669900f407bac473cccf57cfbf1`
    );
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=acd33669900f407bac473cccf57cfbf1`
    );
    const foodRecipes = res.data.ingredients;
    const foodDetail = response.data;

    return {
      props: { foodDetail, foodRecipes },
    };

    return {
      props: { foodDetail },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true, // or handle the error accordingly
    };
  }
}
