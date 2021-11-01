import React from "react"
import {Container, ContainerPostar, ContainerPosts, Inputs} from "./Style"

export default function FeedPageCard () {
    return (
    <Container>

        <ContainerPostar>
            <Inputs 
            placeholder="Escreva seu post"
            type="text"
            multiline
            numberOfLines={4}
            />
            <button>Postar</button> 
        </ContainerPostar>

        <ContainerPosts
        onClick={()=>null}
        >
            <h4>Nome do usuario</h4>
            <p>texto do post</p>
            <div>
                <div>
                    <button>👍</button>
                    <p>0</p>
                    <button>👎</button>
                </div>
                <p>0 comentarios</p>
            </div>
        </ContainerPosts>

    </Container>
    );
}