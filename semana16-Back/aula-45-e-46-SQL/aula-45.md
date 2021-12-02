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
### Exercício 4
a) ela procura por atores com nomes que iniciam com as letras A ou J e com salario acima de 300 mil reais.

```
b)SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000
```
```
c)SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```
```
d)SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
```
### Exercício 5
```
a)CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopsy VARCHAR (255) NOT NULL,
    drop_date DATE NOT NULL,
    avaliation INT NOT NULL
);
```
```
b)INSERT INTO Movies (id, name, sinopsy, drop_date, avaliation) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006/01/06",
    7
);
```
```
c)INSERT INTO Movies (id, name, sinopsy, drop_date, avaliation) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012/12/27",
    10
);
```
```
d)INSERT INTO Movies (id, name, sinopsy, drop_date, avaliation) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);
```
```
e)INSERT INTO Movies (id, name, sinopsy, drop_date, avaliation) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```
### Exercício 6
```
a)SELECT id, name, avaliation FROM Movies WHERE id = "003";
```
```
b)SELECT * FROM Movies WHERE name = "Deus é Brasileiro";

```
```
d)SELECT id, name, sinopsy FROM Movies WHERE avaliation > 7;
```
### Exercício 7
```
a)SELECT * FROM Movies
WHERE (name LIKE "%vida%" )
```
```
b)SELECT * FROM Movies
WHERE name LIKE "%TERMO DE BUSCA%" OR
      sinopsy LIKE "%TERMO DE BUSCA%";
```
```
c)SELECT * FROM Movies
WHERE drop_date < "2021-11-22";
```
```
d)SELECT * FROM Movies
WHERE drop_date < "2021-11-22" AND 
      (name LIKE "%TERMO DE BUSCA%" OR
      sinopsy LIKE "%TERMO DE BUSCA%") AND avaliation > 7;
```
extra )SELECT * FROM Movies
WHERE drop_date < CURDATE() AND 
      (name LIKE "%TERMO DE BUSCA%" OR
      sinopsy LIKE "%TERMO DE BUSCA%") AND avaliation > 7;
```

