//-----------------4-------------------
//A) usaria o comando tsc exercicio-4.ts ou só tsc
//B) usaria o comando tsc src/exercicio-4.ts
//C) usaria o comando tsc arquivo1.ts arquivo2.ts arquivo3.ts
//D) a propriedade "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */}
// usamos apenas as configurações essenciais 

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

