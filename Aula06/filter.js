// 1. Utilize o método "filter" para criar um novo array com os alunos que têm idade maior ou igual a 18 anos.
// 2. Utilize o método "filter" novamente para criar um novo array com os alunos que têm idade menor que 20 anos.
// 3. Utilize o método "filter" mais uma vez para criar um novo array com os alunos cujo nome começa com a letra "J".
// 4. Verifique se você conseguiu utilizar o método "filter" corretamente.

const alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 19 },
  { nome: "Julia", idade: 21 },
];

const maiores18 = alunos.filter((aluno) => aluno.idade >= 18);
console.log("Alunos com 18 anos ou mais:");
console.log(maiores18);

console.log("Alunos menores de 20 anos:");
const menores20 = alunos.filter((aluno) => aluno.idade < 20);
console.log(menores20);

console.log("Alunos que o nose inicia com a letra J:");
const inicialJ = alunos.filter(
  (aluno) => aluno.nome.charAt(0).toUpperCase() === "J"
);
console.log(inicialJ);
