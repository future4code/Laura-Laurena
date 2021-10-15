import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

export default function LoginPage() {
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }
    const goToAdmHome=()=>{
        history.push("/admin/trips/list")
    }
    return(
    <div>
        <h1>Login</h1>
        <input
            type="email"
            placeholder={"Email"}
        />
        <input
            type="password"
            placeholder={"Senha"}
        />
        <button onClick={goToAdmHome}>Entrar</button>
        <button onClick={voltar}>Voltar</button>
    </div>

)
}