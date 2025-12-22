import axios from "axios";

export const fectProducts = async ()=>{
  const productsList = await  axios.get("https://fakestoreapi.com/products")
  console.log("this is list",productsList.data);
  return productsList.data;
}