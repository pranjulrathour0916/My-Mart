import { useQuery } from "@tanstack/react-query";
import { fectProducts } from "./fetcproducts.ts";
export const useProducts = (id:any) =>{
    return useQuery({
        queryKey : ["allPproductsList", id],
        queryFn : ()=>fectProducts(id)
    })
}