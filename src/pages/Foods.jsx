import React from "react";
import { useAuthContext } from "../context/Auth";
import Food from "../components/home/Food";

function Foods() {
  const { data, loading } = useAuthContext();
  return (
    <div className="flex mt-12"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-5 bg-orange-50">
          {!loading &&
            data.map((item) => {
              return <Food key={item.idMeal} items={item} />;
            })}

        </div>
      </div>
    
  );
}

export default Foods;


