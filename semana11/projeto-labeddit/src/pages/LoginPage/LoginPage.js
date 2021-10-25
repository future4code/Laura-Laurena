import React from "react"
import {goToSingUpPage, goToFeedPage} from "../../routes/coordinator"
import {Inputs} from "./Style"

export default function LoginPage() {
    return (
    <div>
        <h1>Login</h1>
        <Inputs placeholder="email" type="email"/>
        <Inputs placeholder="senha" type="password"/>
        <button>entrar</button>
        <button onClick={goToSingUpPage}>Cadastre-se</button>
    </div>
    );
}
