import { useQuery } from "@tanstack/react-query";
import { fectProducts } from "./fetcproducts.ts";
export const useProducts = () =>{
    return useQuery({
        queryKey : ["allPproductsList"],
        queryFn : fectProducts
    })
}