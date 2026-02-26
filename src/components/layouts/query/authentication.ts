import { useMutation } from "@tanstack/react-query";
import { checkLogin, login, loginUser, signUpUser } from "./loginquery.ts";

export const useUserSign = () =>{
    return useMutation({
        mutationFn : (user : signUpUser) => checkLogin(user)
    })
}
export const useUserlogin = () =>{
    return useMutation({
        mutationFn : (user : loginUser) => login(user)
    })
}