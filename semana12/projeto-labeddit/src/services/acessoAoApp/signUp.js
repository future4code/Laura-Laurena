import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { goToFeedPage } from "../../routes/coordinator"

export const login=(body,clear,history)=>{
    const headers= 'Content-Type: application/json'
    axios.post(`${BASE_URL}/users/signup`, body, headers)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
    })
    .catch((err)=>{
        alert("Erro no cadastro.")
    })
}