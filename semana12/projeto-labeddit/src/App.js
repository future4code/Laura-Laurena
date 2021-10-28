import React from "react"
import Router from "./routes/Router";
import  styled  from "styled-components";

const CentralizacaoGlobal= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

function App() {
  return (
    <CentralizacaoGlobal>
      <Router/>
    </CentralizacaoGlobal>
  );
}

export default App;
