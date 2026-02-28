import axios from "axios";

export const fectProducts = async (category?:number)=>{
  console.log("query", category)
  const productsList = await  axios.get("http://localhost:5001/prod/getallProd/",{
    params : category ? {category} : {}
  })
  return productsList.data;
}

export const fectProductsById = async (id:any)=>{
  console.log("params", id)
  const productsList = await axios.get(`http://localhost:5001/prod/getProdById/${id}`)
  console.log("works")
  return productsList.data;
}