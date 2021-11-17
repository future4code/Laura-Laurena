import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { goToFeedPage } from "../routes/coordinator";

export default function useUnprotectedPage(){
    const history=useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            goToFeedPage(history)
        }
    }, [history])
}