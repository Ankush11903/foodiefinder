import restaurantList from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { useEffect } from "react";
import FoodCarousel from "./foodCarousel";
import React, { useState } from "react";
// import { liveData } from "../utils/ChatSlice";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import loogo from "../loogo.png";
import logo4 from "../logo4.gif";
import FoodCarousel from "./foodCarousel";

export default function Food() {
      const [searchParams] = useSearchParams();
    const videoId = searchParams.get("food");
    console.log(videoId)
//   const videoId = "chicken";
  const [loading, setLoading] = useState(false);
  const [carouselData, setCarouselData] = useState([]);
  {
    console.log(videoId);
  }
  useEffect(() => {
    callApiHandler();
  }, []);

  function callApiHandler() {
    console.log("feetching");
    setLoading(true);
fetch("https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=" + videoId)
  .then((response) => response.json())
  .then((da) => {
    console.log(da);
    setCarouselData(da?.hits?.map((x) => x.recipe));
    setLoading(false);
  });


    // console.log(da?.hits?.map((x) => x.recipe));
  }
  return (
    <div className="flex items-center justify-center h-96">
      {/* (loading ? <div className="flex items-center justify-center h-96">
            <img className="w-36" src={loogo} alt="img" />
            <img src={logo4} alt="loading" className="w-32" />
        </div> :
        <div>

      <img className="w-36" src={loogo} alt="img" />

      <FoodCarousel food={carouselData} />
        <div/>
        ) */}
{console.log(carouselData)}
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <img className="w-36" src={loogo} alt="img" />
          <img src={logo4} alt="loading" className="w-32" />
        </div>
      ) : carouselData.length === 0 ? (
        "No data found"
      ) : (
        <div>
          <img className="w-36" src={loogo} alt="img" />
          <FoodCarousel data={carouselData} />
        </div>
      )}
    </div>
  );
}
