//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
//-----------------1-------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
  //})
//  será impresso cada um dos elementos do array, nesse caso
// objeto, index ou seja a posição do objeto e o tamanho do array
//-----------------2-------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
// será impresso os nomes dos usuarios 
//-----------------3-------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
// vai retornar os apelidos diferentes a "Chijo"

//EXERCICIOS DE ESCRITA DE CÓDIGO
//-----------------1-------------------
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// A)
 const novoArrayD = pets.map((dogs, index, array) => {
 return dogs.nome
})
console.log(novoArrayD)
// B)
const novoArrayS = pets.filter((dogs, index, array) => {
    return dogs.raca === "Salsicha"
   })
   console.log(novoArrayS)
// C) 
const novoArrayP = pets
.filter((dogs, index, array) => {
    let poodle =dogs.raca === "Poodle"
    return  poodle
   
   })
.map((dogs,index,array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`
     
})   
   console.log(novoArrayP)
//-----------------2-------------------
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
// A)
const novoArrayCompras = produtos.map((produto, index, array) => {
    return produto.nome 
   })
   console.log(novoArrayCompras)
// B) 
const comprasComDesconto = produtos.filter( item => item.preco -= item.preco * 0.05 )
console.log(comprasComDesconto)
// C)
const validarBebidas = produtos.filter((item, i, array) => {
    return item.categoria === "Bebidas"})
    console.log(validarBebidas)
// D)
const validarProdutosYpe =produtos.filter((item,i,produtos  )=>{
    produtos.includes("Ypê")
 return produtos
} )    
console.log(validarProdutosYpe)

// .filter((item, i, array) => {
//     return produtos })
//     
















// const novoArrayComprasComDesconto = produtos.map((produto, index, array) => {
//     array.nome
//     const precoDesconto= produtos.preco 
//     return  precoDesconto
//    })
//    console.log(novoArrayComprasComDesconto)
//DESAFIOS
//-----------------1-------------------










//   *= 0.95