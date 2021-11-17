import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

export default function TripDetailsPage() {
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }
    return(
    <div>
        
        <button >Apagar Viagem </button>
        <button onClick={voltar}>Voltar</button>
    </div>

)
}