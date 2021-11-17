import React from "react"
import {goToSignUpPage, goToFeedPage} from "../../routes/coordinator"
import {Inputs, Container, Button1, Button2} from "./Style"
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm"
import { login } from "../../services/acessoAoApp/login";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function LoginPage({setButton2Text}) {
    const [form, onChange, clear]=useForm({email:"", password:""})

    useUnprotectedPage()

    const history= useHistory()

    const onSubmitForm=(event)=>{
        event.preventDefault()
        login(form, clear, history, setButton2Text)
    } 

    

    return (
    <Container>
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
        <Button1  
        type={"submit"}
        >Entrar</Button1>
        <Button2 onClick={()=>goToSignUpPage(history)}>Cadastre-se</Button2>
        </form>
        
    </Container>
    );
}
