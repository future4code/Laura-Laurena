import { useEffect, useState } from "react";
import axios from "axios";

export default function useRequestData(){
    const [data,setData]= useState(initialData)

    useEffect(()=>{
        axios.get(url,{
            headers: {
                Authorization:localStorage.getItem("token"),
                // Content-Type: application/json
            },
        })
    })
    return(

    )
}