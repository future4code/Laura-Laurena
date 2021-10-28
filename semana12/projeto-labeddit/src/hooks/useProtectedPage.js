import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { goToLoginPage } from "../routes/coordinator";

export default function useProtectedPage(){
    const history=useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            goToLoginPage(history)
        }
    }, [history])
}