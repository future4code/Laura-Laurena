import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import { CardViagem } from '../ListTripsPage/ListTripsPage';
export default function AdminHomePage() {
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }
    const goToCreateTrip=()=>{
        history.push("/admin/trips/create")
    }
    return(
    <div>
        <h1>Lista de viagens</h1>
        <button onClick={goToCreateTrip}> + Criar Viagem </button>
        <button onClick={voltar}>Voltar</button>
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