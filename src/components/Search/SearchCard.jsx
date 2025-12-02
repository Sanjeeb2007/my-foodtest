import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";

function SearchCard({ item }) {
  console.log(item)
  return (
    <div>
      <Link to={`SearchBar//${item?.idMeal}`}>
        <div className="flex flex-col md:flex-row  mb-8 md:mb-3  md:p-4">
          <div className="relative flex h-48  w-full md:w-80   ">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={item?.strMealThumb}
              alt={item?.strMeal}
            />
          </div>
          <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
            <span className="text-lg md:text-2xl font-semibold line-clamp-2 ">
              {item?.strMeal}
            </span>
            <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2md:pr-24 md:my-4">
              {item?.strCategory}
            </span>
            <div className="hidden md:flex items-center">
              <div className="flex items-start mr-3">
                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full rounded-lg object-cover"
                    src={item?.strMealThumb?.trim()}
                    alt={item?.strMeal}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold mt-2  flex items-center">
                  {item?.strCategory}
                </span>
                <div className="flex text-sm font-semibold  truncate overflow-hidden">
                  <span className="flex text-[24px] leading-none font-bold  relative top-[-10px] mx-1">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
