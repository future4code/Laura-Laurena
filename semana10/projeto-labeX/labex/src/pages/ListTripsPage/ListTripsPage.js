import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';


export const CardViagem= styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 500px;
width: 500px;
border: 1px solid black;
`

export default function ListTripsPage() {
    
    const history= useHistory()
    
    const goToinscricao=()=>{
        history.push('/trips/application')
    }
    
    const voltar=()=>{
        history.goBack()
    }
    return(
    <div>
        <button onClick={goToinscricao}>inscrever-se</button>
        <button onClick={voltar}>Voltar</button>
        <h1>Lista de Viagens</h1>
        <CardViagem>
            Viagem-1
        </CardViagem>
        <CardViagem>
            Viagem-2
        </CardViagem>
        <CardViagem>
            Viagem-3
        </CardViagem>
        <CardViagem>
            Viagem-4
        </CardViagem>
        <CardViagem>
            Viagem-5
        </CardViagem>
    </div>

)
}