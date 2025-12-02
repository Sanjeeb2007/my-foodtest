import React from "react";
import { Link } from "react-router-dom";

import { BsFillCheckCircleFill } from "react-icons/bs";

function Food({ items }) {

  return (
    <div className="">
      <Link to={`/${items?.idMeal}`}>
        <div className="flex flex-col">
          {/* thumbnail & duration */}
          <div className="relative h-48 md:h-56 md: rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={items?.strMealThumb}
              alt=""
            />
          </div>
          {/* channerl logo & title */}
          <div className="flex mt-3 space-x-2 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={items?.strMealThumb}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {items?.strMeal}
              </span>
              {/* <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {items?.author?.title}
                {items?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span> */}
              {/* <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  items?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{items?.publishedTimeText}</span>
              </div> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Food;