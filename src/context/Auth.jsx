/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { foodTest, foodTestCatogery } from "../api/api";


const AuthContext = createContext();

export const Auth = ({ children } = {}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("c");

useEffect(()=>{
  if (!value) return;
  if (value.length === 1) {
      fetchAllData(value);
    } 
    else {
      fetchAllListData(value);
    }
},[value])
  
// console.log(data)
  const fetchAllData = async () => {
    setLoading(true);
    try {
      const res = await foodTest(`search.php?f=${value}`);
      setData(res.meals);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };
    const fetchAllListData = async () => {
    setLoading(true);
    try {
      const res = await foodTestCatogery(`${value}`);
      setData(res.meals);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
