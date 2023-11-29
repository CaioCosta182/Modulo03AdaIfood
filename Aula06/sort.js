// 1. Temos uma lista de atletas com seus respectivos nomes, alturas e pesos:

// const atletas = [
//   { nome: 'João', altura: 1.75, peso: 80 },
//   { nome: 'Maria', altura: 1.68, peso: 60 },
//   { nome: 'Pedro', altura: 1.80, peso: 70 },
//   { nome: 'Ana', altura: 1.65, peso: 55 },
//   { nome: 'Carlos', altura: 1.90, peso: 100 }
// ]
// 1. Utilize o método "sort" para ordenar a lista de atletas em ordem crescente de peso.
// 2. Utilize o método "sort" novamente para ordenar a lista de atletas em ordem decrescente de altura.
// 3. Utilize o método "sort" mais uma vez para ordenar a lista de atletas em ordem alfabética de nome.
// 4. Verifique se você conseguiu utilizar o método "sort" corretamente.

const atletas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

let atletasPesoCrescente = atletas.slice().sort((a, b) => a.peso - b.peso);

console.log("Ordenado por peso crescente:", atletasPesoCrescente);

let atletasAlturaDecrescente = atletas
  .slice()
  .sort((a, b) => b.altura - a.altura);

console.log("Ordenado por altura decrescente:", atletasAlturaDecrescente);

let atletasNomeAlfabet = atletas
  .slice()
  .sort((a, b) => a.nome.localeCompare(b.nome));

console.log("Nomes por ordem alfabetica:", atletasNomeAlfabet);
