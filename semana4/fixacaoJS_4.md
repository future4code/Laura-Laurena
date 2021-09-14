```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {```
```  // Escreva seu código aqui```
```   let conta= 0```
```    for (let i of arrayDeNumeros){```
```      if (i===numeroEscolhido)```
```         conta+=1 ```
```         console.log(conta)```
```      }if (conta===0){```
```         return "Número não encontrado"```
```      }else {return `O número ${numeroEscolhido} aparece ${conta}x```
```      }```
```      }```