import React from "react";
import { useAuthContext } from "../context/Auth";
import Sidebar from "../components/home/Sidebar";
import ListItems from "../components/home/ListItems";
import Food from "../components/home/Food";




function Home() {
  const { data, loading } = useAuthContext();
  return (
    <div className="flex mt-12">
      <Sidebar/>
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <ListItems/> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            data.map((item) => {
              return <Food key={item.idMeal} items={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;


