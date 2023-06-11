import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/Ai";

function FoodCarousel(props) {
  console.log("props");
  console.log(props);
  const arr = Object.entries(props?.data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative w-[1000px] h-[400px] overflow-x-hidden mt-48 overflow-y-hidden">
      {console.log(currentIndex)}
      <button
        className="shadow-2xl absolute z-10 top-1/2 -translate-x-2 left-2 bg-white text-gray-900 rounded-full p-3 transform -translate-y-1/2 hover:shadow-md focus:outline-none"
        onClick={prevImage}
        disabled={currentIndex === 0}
      >
        <AiOutlineArrowLeft className="h-6 w-6 hover:-translate-x-2 transition-transform duration-750  ease-in-out" />
      </button>

      <button
        className="absolute z-10 top-1/2 right-2 bg-white text-gray-900 rounded-full p-4 transform -translate-y-1/2 hover:shadow-md focus:outline-none"
        onClick={nextImage}
        disabled={currentIndex + 3 >= arr.length}
      >
        <AiOutlineArrowRight className="h-6 w-6 hover:translate-x-2 transition-transform duration-750 ease-in-out" />
      </button>

      <div
        className="flex transition-all duration-1000 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 64}rem)` }}
      >
        {arr?.map((value) => (
          <div className="w-full  mx-2 bg-gray-100 rounded-lg" key={value[0]}>
            <div className="flex w-[1200px] h-[400px]">
              <div className="w-1/3 h-80 pl-10 pt-10">
                <img
                  src={value[1]?.image}
                  alt="food"
                  className="w-[300px] h-full rounded-lg border border-blue-900 mt-2"
                />
              </div>
              <div className="w-2/3 pt-14">
                <h1 className="font-medium text-lg mt-2 ">
                  {value[1]?.label}
                </h1>
                <div className="flex w-full">
                <div className="flex flex-col w-1/3 pl-1">
  {value[1]?.healthLabels?.slice(0, 10).map((item, index) => (
    <div key={index} className="mx-2 text-base font-thin">
      • {item}
    </div>
  ))}
</div>

                  <div className="flex flex-wrap w-1/3 max-h-48 mt-[-80px]">
                    {value[1]?.ingredients?.map((item, index) => (
                      <div key={index} className="flex items-center justify-center text-center">
                        <div>
                          <span className="mx-2 text-base font-thin">
                            •{item.food}
                          </span>
                          <img
                            className="w-16 h-16"
                            src={item?.image}
                            alt="image"
                          />
                        </div>
                        <div>
                          <h6 className="pl-4">{item?.text}</h6>
                          <h1 className="text-bold pl-4">Quantity Required: {item?.quantity}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodCarousel;
