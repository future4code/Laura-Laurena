## AULA 45

### Exercício 1
a) VARCHAR (255) indica que aquele item receberá uma string de até 255 caracteres, DATE indica que o item será uma data (YYYY-MM-DD), PRIMARY KEY é o indentificador único que cada item precisa ter.

b) O comando SHOW DATABASE serve para mostrar os bancos de dados presentes no sistema, já o SHOW TABLES nos mostra as tabelas.

c) O comando DESCRIBE Actor serve para mostrar os items e suas configurações da tabela mencionada.


### Exercício 2
```
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b)Error Code: 1062. Duplicate entry '002' for key 'PRIMARY', basicamente a KEY PRIMARY é única por isso esse erro ocorre quanto tentamos criar outro item com a mesma key.

c)Error Code: 1136. Column count doesn't match value count at row 1, nós não colocamos todas as colunas a receberem um valor na primeira linha, logo os valores ficaram perdidos.  

d)Error Code: 1364. Field 'name' doesn't have a default value, não adicionamos um valor a uma das colunas da tabela, deixando-a vazia   

e)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1, o tipo DATE conta como uam string então é preciso ser declarado entre ""

### Exercício 3
```
a) SELECT * from Actor WHERE gender = "female";
```
```
b) SELECT salary from Actor WHERE name = "Tony Ramos";
```
```
c) SELECT * from Actor WHERE gender = "invalid";  ele não retorna nenhuma linha pq não há nenhuma rinha invalida.
```
```
d) SELECT id, name, salary from Actor WHERE salary <= 5000000;  ele não retorna nenhuma linha pq não há nenhuma rinha invalida.
```
```
e) Error Code: 1054. Unknown column 'nome' in 'field list', a coluna "nome" não existe o correto seria: 
SELECT id, name from Actor WHERE id = "002"
```

<!-- 1. Bleus
2. Blius
3. Blos

b) Isso está errado, pelos motivos:
* Óbvio
* Sem dúvida -->
