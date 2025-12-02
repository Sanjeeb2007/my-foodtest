import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { foodTest, foodTestSearch } from "../api/api";
import SuggestedFood from "./SuggestedFood";

function DetailPage() {
  const [details, setDetails] = useState();
  const [realateddetails, setRelativedetails] = useState();
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetchdetailsDetails();
    fetchRelateddetails();
  }, [id]);

  const fetchdetailsDetails = async () => {
    const res = await foodTestSearch(`/lookup.php?i=${id}`);
    setDetails(res?.meals?.[0]); 
  };
  const fetchRelateddetails = () => {
    foodTest(`/random.php`).then((res) => {
      // console.log(res);
      setRelativedetails(res);
    });
  };

  return (
    <div className=" flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              src={details?.strYoutube}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {details?.strCategory}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex ">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={details?.strArea}
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center">
                    {details?.strMeal}
                  </div>
                </div>
                <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                  Add Cart
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            {details?.strInstructions}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 font-semibold rounded-xl mt-4 text-xl">
            {details &&
              Array.from({ length: 20 })
                .map((_, i) => ({
                  ing: details[`strIngredient${i + 1}`],
                  meas: details[`strMeasure${i + 1}`],
                }))
                .filter(({ ing }) => ing && ing.trim())
                .map(({ ing, meas }) => (
                  <span key={ing} className="badge">
                    {meas} {ing}
                  </span>
                ))}
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]">
          {realateddetails?.meals?.map((item) => (
            <SuggestedFood key={item.idMeal} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
