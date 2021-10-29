import styled from "styled-components";

export const DivHeader=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 1px solid black;
width: 100vw;
height: 60px;
align-items: center;
background-color: #0057b8;
` 
export const ButtonLab=styled.button`
background-color: #0057b8;
height: 60px;
margin-left:10px;
border:none;
width: 100px;
cursor: pointer;
    h1{
    color: whitesmoke;
    }
`
export const Button2=styled.button`
padding: 5px;
height: 30px;
margin-right:10px;
border: none;
background-color: blue;
color: whitesmoke;
width: 80px;
transition: .5s ease-in-out;
cursor: pointer;
    :hover{
        background-color: #0064c8;
    }
    :active{
        background-color: blue;
    }
`