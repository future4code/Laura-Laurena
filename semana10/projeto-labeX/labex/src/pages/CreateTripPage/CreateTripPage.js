import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

export default function CreateTripPage() {
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }
    return(
    <div>
        
    <input
        label={'Nome'} 


    />
    <input
        label={'Planeta'}
        name={'planet'}
    />
    <input label="Data"
        />
    <input
        label={'Descrição'}
        name={'description'}
    />
    <input
        label={'Duração em dias'} type={'number'}
        name={'duration'}
    />
        <input/>
        <input/>
        <input/>
        <input/>
        <button >Criar</button>
        <button onClick={voltar}>Voltar</button>
    </div>

)
}