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
import dashboard from "../bg.png";

import loogo from "../loogo.png";
import logo4 from "../logo4.gif";
import FoodCarousel from "./foodCarousel";

export default function Food() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  //   const videoId = "chicken";
  const [loading, setLoading] = useState(false);
  const [carouselData, setCarouselData] = useState([]);
  const value=videoId;
  {
    console.log(videoId);
  }
  useEffect(() => {
    callApiHandler();
  }, []);

  function callApiHandler() {
    console.log("feetching");
    setLoading(true);
    fetch(
      "http://localhost:5000/search?value=" +
      value
    )
    // okay
      .then((response) => response.json())
      .then((da) => {
        console.log(da);
        setCarouselData(da?.hits?.map((x) => x.recipe));
        setLoading(false);
      });

    // console.log(da?.hits?.map((x) => x.recipe));
  }
  return (
    <div
    className="bg-cover bg-no-repeat bg-center"
    style={{ 
      backgroundImage: `url(${dashboard})`,
      height: '87vh',
   }}
  >
    
    <div className="flex items-center justify-center h-96 ">
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
          {/* <img className="w-36" src={loogo} alt="img" /> */}
          <img src={logo4} alt="loading" className="w-32" />
        </div>
      ) : carouselData.length === 0 ? (
        "No data found"
      ) : (
        <div>
          {/* <img className="w-36" src={loogo} alt="img" /> */}
          <FoodCarousel data={carouselData} />
        </div>
      )}
    </div>
    </div>
  );
}
