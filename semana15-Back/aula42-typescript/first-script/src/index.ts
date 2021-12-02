//EXERCICIOS DE TYPESCRIPT
//-----------------1-------------------

//A)
let minhaString:string="esta é minha string"
// minhaString= 34 não é possivel pq o valor é uma string não um number

//B)
let meuNumero:number|string =45 // utilizando | entre os tipos

//C)
enum CorEscolhida {
    AZUL="azul",
    VERMELHO="vermelho",
    AMARELO="amarelo",
    LARANJA="laranja",
    VERDE="verde",
    ANIL="anil",
    VIOLETA="violeta"

}

type Pessoa={
    nome: string,
    idade: number,
    corFavorita: CorEscolhida
}

const pessoa1:Pessoa={
    nome: "laura",
    idade: 18,
    corFavorita: CorEscolhida.VERMELHO
}
const pessoa2:Pessoa={
    nome: "maria",
    idade: 60,
    corFavorita: CorEscolhida.VERDE
}
const pessoa3:Pessoa={
    nome: "ailtom",
    idade: 59,
    corFavorita: CorEscolhida.AZUL
}
//-----------------2-------------------

//A & B )
function obterEstatisticas(numeros:any) :any{

    const numerosOrdenados:any = numeros.sort(
        (a:any, b:any) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//C)
type AmostraIdade={
    numeros:number[],
    obterEtatisticas:(numeros?:number[])=>void
}
const amostraDeIdades: AmostraIdade = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros) =>{...}
}

//-----------------3-------------------

//A)
type Post=[
    {
    autor:string,
    texto:string
    }
]

const posts :Post = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

//B)
function buscarPostsPorAutor(posts:string, autorInformado:string) {
    return posts.filter(
        (post:string) => {
            return post.autor === autorInformado
        }
    )
}



