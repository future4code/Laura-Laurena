### Exercício 1
a) deleta a coluna salary
b) renomeia a coluna "gender" pra "sex" 
c) altera o tipo da coluna "gender" pra "VARCHAR(255)" 
```
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```



SELECT * FROM Table;


### Exercício 2
```
a) UPDATE Actor
SET
 name = "Moacyr Franco",
 birth_date = "1936-10-05"
WHERE id = "003";
```
```
b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```
```
c)UPDATE Actor
SET 
name = "Claudia Raia",
birth_date = "2021-11-24",
salary = 500000,
gender = "female"
WHERE id = "005";
```
```
d)UPDATE Actor
SET 
name = "Claudinho e Bochecha",
birth_date = "2021-11-24",
salary = 500000,
gender = "male"
WHERE id = "055";

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0, ele não mostra nenhum erro mas não altera nada.
```


### Exercício 3
```
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```
```
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
```

### Exercício 4
```
a)SELECT MAX(salary) FROM Actor
```
```
b)SELECT MIN(salary) FROM Actor WHERE gender = "female"
```
```
c)SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
```
d) SELECT SUM(salary) FROM Actor
```
### Exercício 5
a) ele conta o numero de itens em cada genero, no caso o numero de atrizes e atores
```
b)SELECT id, name FROM Actor ORDER BY name DESC;
```
```
c)SELECT * FROM Actor ORDER BY salary;
```
```
d)SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
```
e)SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```


### Exercício 6
```
a) ALTER TABLE Movies ADD playing_limit_date DATE;
```
```
b) ALTER TABLE Movies CHANGE avaliation avaliation FLOAT;
```
```
c) UPDATE Movies
SET
playing_limit_date = "2021-11-30"
WHERE id = "001"

UPDATE Movies
SET
playing_limit_date = "2020-11-30"
WHERE id = "002"
```
```
d) DELETE FROM Movies WHERE id = "001";

UPDATE Movies
SET
sinopsy = "Bla bla bla"
WHERE id = "001";
```

### Exercício 7
```
a) SELECT COUNT(*) FROM Movies WHERE avaliation > 7.5;
```
```
b) SELECT AVG(avaliation) FROM Movies;
```
```
c) SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
```
```
d) SELECT COUNT(*) FROM Movies WHERE drop_date > CURDATE();
```
```
e) SELECT MAX(avaliation) FROM Movies;
```
```
f) SELECT MIN(avaliation) FROM Movies;
```

### Exercício 8
```
a) SELECT * FROM Movies ORDER BY name;
```
```
b) SELECT * FROM Movies ORDER BY name LIMIT 5;
```
```
c) SELECT * FROM Movies 
WHERE drop_date < CURDATE() 
ORDER BY drop_date DESC 
LIMIT 3;
```
```
d) SELECT * FROM Movies 
ORDER BY avaliation DESC 
LIMIT 3;
```