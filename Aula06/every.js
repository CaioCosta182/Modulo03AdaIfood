// 1. Utilize o método "every" para verificar se todos os alunos têm idade maior ou igual a 18 anos.
// 2. Utilize o método "every" novamente para verificar se todos os alunos têm nome com mais de 3 caracteres.
// 3. Utilize o método "every" mais uma vez para verificar se todos os alunos têm idade e nome definidos.
// 4. Verifique se você conseguiu utilizar o método "every" corretamente.

let pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 },
];

const idadeMaior18 = pessoas.every((idade) => idade >= 18);
console.log(idadeMaior18); // false

const tresOuMaisCaracteres = pessoas.every((pessoa) => pessoa.nome.length > 3);
console.log(tresOuMaisCaracteres);

const verificadorIdadeNome = pessoas.every(
  (alunos) => alunos.idade !== undefined && alunos.nome !== undefined
);
console.log(verificadorIdadeNome);
