import axios from "axios";

export const fectProducts = async ()=>{
  const productsList = await  axios.get("https://fakestoreapi.com/products")
  return productsList.data;
}