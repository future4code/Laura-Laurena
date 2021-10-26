import React from "react"
import {goToSingUpPage, goToFeedPage} from "../../routes/coordinator"
import {Inputs} from "./Style"
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm"

export default function LoginPage() {
    const [form, onChange, clear]=useForm({email:"", password:""})

    const history= useHistory()

    const onSubmitForm=(event)=>{
        console.log(form)
        event.preventDefault()
    } 

    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={onSubmitForm}>
            <Inputs 
                placeholder="Email" 
                type="email"
                name={"email"}
                value={form.email}
                onChange={onChange}
                required
            />
            <Inputs 
                placeholder="Senha" 
                type="password"
                name={"password"}
                value={form.password}
                onChange={onChange}
                required
                />
        <button  
        type={"submit"}
        >Entrar</button>
        <button onClick={()=>goToSingUpPage(history)}>Cadastre-se</button>
        </form>
        
    </div>
    );
}
