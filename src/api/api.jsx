const URL = "https://www.themealdb.com/api/json/v1/1/";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?";
const API_KEY = "https://www.themealdb.com/api/json/v1/1/filter.php?c";
// const CatogeryList = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

export const foodTest = async (content) => {
  const url = `${URL}/${content}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const foodTestSearch = async (content) => {
  const url = `${URL}/${content}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const foodSearch = async (search) => {
  if (search.length > 1) {
    const url = `${BASE_URL}s=${encodeURIComponent(search)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } else {
    const url = `${BASE_URL}f=${encodeURIComponent(search)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
};

export const foodTestCatogeryList = async () => {
  const url = `${URL}`;
  const response = await fetch(`${url}/categories.php`);
  const data = await response.json();
  return data;
};
export const foodTestCatogery = async (list) => {
  const url = `${API_KEY}`;
  const response = await fetch(`${url}=${list}`);
  const data = await response.json();
  return data;
};
