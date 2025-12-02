import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
// import { abbreviateNumber } from "js-abbreviation-number";

function SuggestedFood({ item}) {
  return (
    <div>
      <Link to={`/${item?.idMeal}`}>
        <div className="flex mb-3 ">
          <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200">
            <img
              className="h-full w-full rounded-lg"
              src={item?.strMealThumb}
            />
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 ">
              {item?.strMeal}
            </span>
            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2  flex items-center">
              {item?.strCategory}
            </span>
            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  truncate overflow-hidden">
              <span className="flex text-[24px] leading-none font-bold  relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{item?.strArea}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SuggestedFood;