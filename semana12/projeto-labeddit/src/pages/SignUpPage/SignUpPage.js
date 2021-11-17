import React from "react"
import { useHistory } from "react-router";
import {Inputs, Buttons, Container} from "./Style"
import useForm from "../../hooks/useForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {signUp} from "../../services/acessoAoApp/signUp"

export default function SignUpPage({setButton2Text}) {
    const history=useHistory()

    useUnprotectedPage()

    const [form, onChange, clear] = useForm({name:"", email:"", password:""})

    const onSubmitForm=(event) => {
        event.preventDefault()
        signUp(form, clear, history, setButton2Text)
    }

    return (
    
    <form onSubmit={onSubmitForm}>
        <Container>
        <h1>Cadastre-se</h1>
        <Inputs 
            value={form.name} 
            name={"name"} 
            onChange={onChange} 
            placeholder="Nome" 
            type="name"
            required
        />
        <Inputs 
            value={form.email} 
            name={"email"} 
            onChange={onChange} 
            placeholder="Email" 
            type="email"
            required
        />
        <Inputs 
            value={form.password} 
            name={"password"} 
            onChange={onChange} 
            placeholder="Senha" 
            type="password"
            required
        />
        <Buttons type={"submit"}>Cadastrar</Buttons>
        </Container>
    </form>
    );
}
