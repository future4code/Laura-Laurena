import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

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
        
        <button onClick={goToCreateTrip}> + Criar Viagem </button>
        <button onClick={voltar}>Voltar</button>
    </div>

)
}