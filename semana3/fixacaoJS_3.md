```function calculaNota(ex, p1, p2) { ```
```   let prova1=p1*2 ```
```   let prova2= p2*3 ```
```   let exercicio= ex*1 ```
```  let media= (prova1+prova2+exercicio)/6 ```
```  if(media<6){ ```
```    return "D" ```
```  }else if (media>=6&&media<7.5){ ```
```    return "C" ```
```  }else if(media>=7&& media<9){ ```
```    return "B" ```
```  }else{```
```    return "A" ```
```  } ```
```} ```