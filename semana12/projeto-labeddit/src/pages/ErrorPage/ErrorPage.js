import React from "react"
import styled from "styled-components"

const Titulo=styled.h1`
margin: 40px;
margin-bottom: 70px;

`
const Texto=styled.p`
margin: 40px;
margin-right: 5px;
`
export default function ErrorPage() {
    return (
    <div>
        <Titulo>Pagina não encontrada</Titulo>
        <img src="https://phongnhakebang.vn/temp/blue/images/404-not-found.gif" alt="erro 404"/>
        <Texto>Ops. Parece que essa pagina não existe.</Texto>
    </div>
    );
}