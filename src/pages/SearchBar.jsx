import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import SearchCard from "../components/Search/SearchCard.jsx";

import Sidebar from "../components/home/Sidebar.jsx";
import { FaSearch, FaUtensils } from "react-icons/fa";
import { foodSearch } from "../api/api.jsx";
import { useParams } from "react-router-dom";

function SearchBar() {
  const [result, setResult] = useState([]);
  const { search } = useParams();
  console.log(result)


  useEffect(() => {
    fetchSearchResults();
  }, [search]);

    const fetchSearchResults = () => {
    foodSearch(search).then((data) => {                
      console.log(data);
      setResult(data.meals || []);  
    })
    };

   return (
    <div className="">
      <div className="mt-10 flex flex-row h-[calc(100%-56px)]">
        <Sidebar />
        <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
          <div className=" grid grid-cols-1 gap-2 p-2">
            {result?.map((meal) => {
              console.log(meal)
              return <SearchCard key={meal.idMeal} item={meal} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;