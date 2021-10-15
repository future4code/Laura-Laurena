import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

export default function ApplicationFormPage() {
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }
    return(
        <div>
                <h1>Inscreva-se para uma viagem!</h1>
                <select multiple
                placeholder={"Escolha uma viagem"}>
                    <option>viagem 1</option>
                    <option>viagem 2</option>
                    <option>viagem 3</option>
                    <option>viagem 4</option>
                    <option>viagem 5</option>
                </select>
                <input
                type="text"
                placeholder={"Nome"}
                />
                <input
                type="Number"
                placeholder={"Idade"}
                />
                <input
                type="text"
                placeholder={"Texto da Candidatura"}
                />
                <input
                type="text"
                placeholder={"Profissão"}
                />
                <select multiple
                placeholder={"Escolha uma viagem"}>
                    <option>pais 1</option>
                    <option>pais 2</option>
                    <option>pais 3</option>
                    <option>pais 4</option>
                    <option>pais 5</option>
                </select>
                <button >Enviar</button>
                <button onClick={voltar}>Voltar</button>
        </div>
    )
}
