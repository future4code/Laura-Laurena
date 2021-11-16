console.log("exercicio 3")

const tarefa = process.argv[2]

const listaDeTarefas = [
    "lavar a louça", 
    "limpar a garragem",
    "alimentar o cachorro",
]

listaDeTarefas.push(tarefa)

console.log(listaDeTarefas)