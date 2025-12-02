import React, {  useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import {  foodTestCatogeryList } from "../../api/api";
import { useAuthContext } from "../../context/Auth";


function ListItems() {
const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(false);
const { setValue } = useAuthContext();
// console.log(food)

useEffect(()=>{
  fetchData()
},[]
)
//list click food items

const fetchData = async ()=>{
  setLoading(true);
  try{
    const res=await foodTestCatogeryList()
    setCategories(res.categories || []);
    // console.log(res.categories)
  }
  catch (err){
    console.error("Error fetching data:", err);
  }finally {
      setLoading(false);
    }
}
if (loading) return <p>Loading categories...</p>; 


  return (
    <div className="flex  hover:overflow-x-auto space-y-2 py-3">
      <div className="flex space-x-4 flex-nowrap">
        {}
        {categories.map((category) => (
            <div
              key={category.idCategory}
              className="mb-4 flex-none bg-orange-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-900 cursor-pointer"
              onClick={() => setValue(category.strCategory.toLowerCase())}
            >
              {category.strCategory}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ListItems;