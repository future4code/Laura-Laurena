import React from "react"
import { useHistory } from "react-router";
import {Inputs} from "./Style"
import useForm from "../../hooks/useForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function SignUpPage() {
    const history=useHistory()

    useUnprotectedPage()

    const [form, onChange, clear] = useForm({name:"", email:"", password:""})

    const onSubmitForm=(event) => {
        event.preventDefault()
    }

    return (
    
    <form onSubmit={onSubmitForm}>
        <div>
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
        <button type={"submit"}>Cadastrar</button>
        </div>
    </form>
    );
}
