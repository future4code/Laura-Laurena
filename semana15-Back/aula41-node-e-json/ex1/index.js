console.log("exercicio 1")

//A) usando process.argv[2]

//B)
const Nome = process.argv[2]
const Idade = Number(process.argv[3])

// const frase= ()=>{ console.log(`Olá, ${Nome}! Você tem ${Idade} anos.`)}

// frase()

//C)

const frase2=()=> console.log(`Olá, ${Nome}! Você tem ${Idade} anos. Em sete anos você terá ${Idade + 7}`)
frase2()