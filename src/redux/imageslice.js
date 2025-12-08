import { createSlice } from '@reduxjs/toolkit'
import clothes from '../assets/clothes.png'
import shoes from '../assets/shoes.png'

const products = [
    {id: 1, title : "Smartphones", price : "6999", img : shoes, width : 90},
    {id: 2, title : "Clothes", price : "699", img : clothes, width:200},
    {id: 3, title : "Shoes", price : "699", img : shoes, width:200},
    {id: 4, title : "Shoes", price : "699", img : shoes, width:200},
    {id: 5, title : "Shoes", price : "699", img : shoes, width:200},
    {id: 6, title : "Shoes", price : "699", img : shoes, width:200},
    {id: 7, title : "Shoes", price : "699", img : shoes, width:200},
    {id: 8, title : "Shoes", price : "699", img : shoes, width:200},
    {id: 9, title : "Shoes", price : "699", img : shoes, width:200},
    {id: 10, title : "Shoes", price : "699", img : shoes, width:200}
  ]

  export const producSlice = createSlice({
    name : "prods",
    initialState : products,
    reducers : {
        pullProd : (state) => {
            return state;
        }
    }
  })

  export const {pullProd} = producSlice.actions;
  export default producSlice.reducer