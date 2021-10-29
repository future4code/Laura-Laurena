import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { goToFeedPage } from "../../routes/coordinator"

export const signUp=(body,clear,history, setButton2Text)=>{
    const headers= 'Content-Type: application/json'
    axios.post(`${BASE_URL}/users/signup`, body, headers)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
        setButton2Text("Logout")
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
}