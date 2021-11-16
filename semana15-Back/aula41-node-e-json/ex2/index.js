console.log("exercicio 2")

const operacao = process.argv[2];
const primeiroNum = Number(process.argv[3]);
const segundoNum = Number(process.argv[4])

const fazConta=()=>{
    switch(operacao){
        case "soma":
            console.log(`Somando ${primeiroNum} e ${segundoNum} obtemos o resultado: ${primeiroNum + segundoNum}`)
            break;
        case "sub":
            console.log(`Subtraindo ${primeiroNum} e ${segundoNum} obtemos o resultado: ${primeiroNum - segundoNum}`)
            break;
        case "mult":
            console.log(`Multiplicando ${primeiroNum} e ${segundoNum} obtemos o resultado: ${primeiroNum * segundoNum}`)
            break;
        case "div":
            console.log(`Dividindo ${primeiroNum} e ${segundoNum} obtemos o resultado: ${primeiroNum / segundoNum}`)
            break;
        default:
            console.log("ocorreu um erro")
    }       
}

fazConta()