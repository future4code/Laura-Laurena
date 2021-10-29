import React from "react"
import Router from "./routes/Router";
import  styled  from "styled-components";
import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

const CentralizacaoGlobal= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

function App() {
  const token= localStorage.getItem("token")
  const [button2Text, setButton2Text]=useState(token ? "Logout" : "Login")

  return (
    <CentralizacaoGlobal>
        <BrowserRouter>
          <Header button2Text={button2Text} setButton2Text={setButton2Text}/>
          <Router setButton2Text={setButton2Text}/>
        </BrowserRouter>
    </CentralizacaoGlobal>
  );
}

export default App;
