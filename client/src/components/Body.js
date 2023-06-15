import restaurantList from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { da } from "../Constants";
import FoodCarousel from "./foodCarousel";
import loogo from "../loogo.png";
import logo4 from "../logo4.gif";
import FoodCarousel from "./foodCarousel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "./Carousal";
import dashboard2 from "../blinkit.png";
import dashboard from "../main.png";
import dash from "../second.png";
import one from "../1.png";
import two from "../2.png";
import three from "../3.png";
import four from "../4.png";
import five from "../5.png";
import six from "../6.png";
import re from "../re.png";
import cookie from 'js-cookie';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

function fliterData(restaurant, searchText) {
  const filterData = restaurant.filter((restaurants) =>
    restaurants?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const dta={
    token:cookie.get("token"),
    user:null
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState("");
  const [cart, setCart] = useState(15);
  const [carouselData, setCarouselData] = useState([]);
  let rest = [];
  const [noOfRestaurant, setNoOfRestaurant] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    window.location.href = "https://www.blinkit.com";
  };
  const cookieItem=cookie.get("token");

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("token") || cookie.get("token")) {
        console.log(localStorage.getItem("token"));
        console.log("cookie");
        console.log(cookie.get("token"));
  
        try {
          const response = await fetch("http://localhost:5000/getuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              cookieItem
            }),
          });
          const data = await response.json();
          console.log(data);
          if (response.status === 200) {
            console.log("User login successfully");
            dta.user=data;
            dta.token=data.token;
            // navigate("/");
            dispatch(addUser(dta));
          } else {
            alert("Error occurred");
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
  
    fetchData();
  }, []);
  

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleCookForMeClick = () => {
    setShowSearchBar(true);
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Perform search or other action with the search value
    console.log(searchValue);
  };

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center h-screen"
        style={{
          backgroundImage: `url(${dashboard})`,
          
        }}
      >
        <>
            <div>
              <div className="flex items-center justify-center h-96">
                {showSearchBar ? (
                  <>
                    {/* <div className="flex w-44"> */}
                    {/* <img className="w-36" src={loogo} alt="img" /><img src={logo4} alt="loading" className="w-32" /> */}
                    {/* </div> */}
                    {/* <img className="w-36" src={loogo} alt="img" /> */}
                    {/* <img src={logo4} alt="loading" className="w-32" /> */}

                    {loading ? (
                      <img src={logo4} alt="loading" className="w-32" />
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <input
                          type="text"
                          value={searchValue}
                          onChange={handleSearchInputChange}
                          className="bg-white text-black h-10 px-4 mr-2 border border-red-400 rounded-md focus:outline-none w-72"
                          placeholder="Enter ingredients..."
                        />
                        <Link to={"/food?v=" + searchValue}>
                          <button
                            // onClick={() => {
                            //   callApiHandler();
                            // }}
                            type="submit"
                            className="bg-black text-white mt-44 h-10 px-4 rounded-sm"
                          >
                            Search
                          </button>
                        </Link>
                      </form>
                    )}

                    {/* <FoodCarousel  data={"he"}/> */}
                  </>
                ) : (
                  <>
                    {/* <img className="w-36" src={loogo} alt="img" /> */}
                    <button
                      className="bg-black text-white h-20 mt-44 w-80 rounded-md"
                      onClick={handleCookForMeClick}
                    >
                      Start
                    </button>
                  </>
                )}
              </div>

              <button
                className="bg-cover bg-no-repeat bg-center fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
                style={{
                  backgroundImage: `url(${dashboard2})`,
                  height: "7vh",
                  width: "15vh",
                }}
                onClick={handleClick}
              ></button>
            </div>
          
        </>
      </div>
      <div
        className="bg-cover bg-no-repeat bg-center h-screen"
        style={{
          backgroundImage: `url(${dash})`,
        }}
      >
        <div className="flex items-center justify-center h-screen">
          <a href="https://www.delish.com/cooking/recipe-ideas/a35421563/baked-feta-pasta-tiktok/">
            {" "}
            <img src={one} alt="Image 1" className="w-64 p-4 rounded-md" />
          </a>
          {/* Additional styling for the image if needed */}

          <a href="https://www.delish.com/cooking/recipe-ideas/a26453749/fried-cabbage-recipe/">
            {" "}
            <img src={two} alt="Image 2" className="w-64 p-4 rounded-md" />
          </a>
          {/* Additional styling for the image if needed */}

          <a href="https://www.delish.com/cooking/recipe-ideas/a19636089/creamy-tuscan-chicken-recipe/">
            {" "}
            <img src={three} alt="Image 3" className="w-64 p-4 rounded-md" />
          </a>
        </div>
      </div>
      <div
        className="bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${re})`,
          height: "full",
        }}
      >
        
          <div className="flex items-center justify-center h-screen">
            <Link to="/calorie">
              {" "}
              <img src={four} alt="Image 1" className="w-64 p-4 rounded-md" />
            </Link>
            {/* Additional styling for the image if needed */}

            <img src={five} alt="Image 2" className="w-64 p-4 rounded-md" />
            {/* Additional styling for the image if needed */}

            <a href="https://blinkit.com/">
              {" "}
              <img src={six} alt="Image 3" className="w-64 p-4 rounded-md" />
            </a>
          </div>
        </div>
      
    </>
  );
};

export default Body;
