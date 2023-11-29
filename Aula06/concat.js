// 1. Utilize o método "concat" para mesclar a lista1 e lista2 em um novo array.
// 2. Verifique o comprimento (length) do novo array para confirmar que os elementos foram mesclados corretamente.
// 3. Tente utilizar o método "concat" com mais algumas listas, mesclando todas em uma só.

const lista1 = ["banana", "pera", "melancia"];
const lista2 = ["alface", "tomate", "rucula"];
const lista3 = ["limao", "laranja", "acerola"];
const lista4 = ["pimenta", "pimentao", "alho"];

let fusaoListas = lista1.concat(lista2);

console.log(lista1);
console.log(lista2);
console.log(fusaoListas);

let tamanhoLista = fusaoListas.length;
console.log(tamanhoLista);

fusaoListas = fusaoListas.concat(lista3.concat(lista4));
tamanhoLista = fusaoListas.length;
console.log(fusaoListas);
console.log(tamanhoLista);
