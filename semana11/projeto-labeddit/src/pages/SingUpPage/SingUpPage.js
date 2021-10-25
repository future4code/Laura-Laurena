import React from "react"
import {Inputs} from "./Style"

export default function SingUpPage() {
    return (
    <div>
        <h1>Cadastre-se</h1>
        <Inputs placeholder="Nome" type="name"/>
        <Inputs placeholder="Email" type="email"/>
        <Inputs placeholder="Senha" type="password"/>
        <button>Cadastrar</button>
    </div>
    );
}
