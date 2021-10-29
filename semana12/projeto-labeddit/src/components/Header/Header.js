import  React, { useState } from 'react';
import { useHistory } from 'react-router';
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator';
import { Button2, ButtonLab, DivHeader } from './style';


export default function Header({button2Text, setButton2Text}) {
    const history=useHistory()
    const token= localStorage.getItem("token")
    
    const logout=()=>{
        localStorage.removeItem("token")
    }

    const Button2Action=()=>{
        if(token){
            logout()
            setButton2Text("Login")
            goToLoginPage(history)
        }else{
            goToLoginPage(history)
        }
    }
    
    return (
    <DivHeader>
        <ButtonLab onClick={()=>goToFeedPage(history)}><h1>Labeddit</h1></ButtonLab>
        <Button2 onClick={Button2Action}>{button2Text}</Button2>
    </DivHeader>
    );
}