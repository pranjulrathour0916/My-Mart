import axios, { AxiosError } from "axios";


export interface signUpUser  {
    name : string,
    phone : number,
    email : string,
    password : string
}
export interface loginUser  {
    phone : number,
    password : string
}

export const checkLogin = async(user : signUpUser) =>{
    try {
        console.log(user)
        const {data} = await axios.post("http://localhost:5001/signUp", user)
        return data;
    } catch (error) {
        console.error({error : error})
    }
}

export const login = async(user : loginUser) => {
       try {
         console.log("this login work", user)
        const {data} = await axios.post("http://localhost:5001/login", user)
        console.log("this is data",data.message)
        return data;
       } catch (err) {
    const axiosError = err as AxiosError<any>;
    throw new Error(
      axiosError.response?.data?.message || "Login failed"
    );
  }
    
}
