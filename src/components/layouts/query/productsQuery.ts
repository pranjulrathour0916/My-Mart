import { useQuery } from "@tanstack/react-query";
import { fectProducts, fectProductsById } from "./fetcproducts.ts";


export const useProducts = (id:any) =>{
    return useQuery({
        queryKey : ["allPproductsList", id],
        queryFn : ()=>fectProducts(id)
    })
}

export const useGetProduct = (id:any) =>{
    return useQuery({
        queryKey : ["allPproductsList", id],
        queryFn : ()=>fectProductsById(id)
    })
}