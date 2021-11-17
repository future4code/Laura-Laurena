import  styled  from "styled-components";

export const Inputs=styled.input`
display:block;
margin-bottom: 15px;
width: 300px;
height: 30px;
background-color: #f2f6ff;
border: none;
border-radius: 4px;
`
export const Buttons=styled.button`
display:block;
margin-bottom: 15px;
width: 306px;
height: 25px;
padding: 5px;
border: none;
border-radius: 4px;
background-color: blue;
color: whitesmoke;
transition: .5s ease-in-out;
cursor: pointer;
    :hover{
        background-color: #0064c8;
    }
    :active{
        background-color: blue;
    }
`
export const Container=styled.div`
display: flex;
flex-direction: column;
background-color: #dfebff;
width: 100vw;
height: 90vh;
justify-content: center;
align-items: center;
`
