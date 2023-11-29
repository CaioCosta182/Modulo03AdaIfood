// Temos a lista de empregados com seus respectivos nomes e salários:

// const empregados = [
//   { nome: 'João', salario: 1200 },
//   { nome: 'Maria', salario: 1500 },
//   { nome: 'Pedro', salario: 1800 },
//   { nome: 'Ana', salario: 1400 },
//   { nome: 'Carlos', salario: 2000 }
// ]

// Utilize o método `some` para verificar se pelo menos um dos empregados
// tem salário maior ou igual a R$ 1.500,00.
// Utilize o método `some` novamente para verificar se pelo menos um dos empregados
//  tem salário menor ou igual a R$ 1.000,00.

//Método .some verifica se pelo menos um item atende a condição e retorna true em caso afirmativo.

/// Método .find retorna o primeiro ítem que atende a condição estabelecida.

const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

let salarioMaiorIgual1500 = empregados.some(
  (funcionario) => funcionario.salario >= 1500
);

if (salarioMaiorIgual1500) {
  let funcionario = empregados.find(
    (funcionario) => funcionario.salario >= 1500
  );
  console.log(
    `Pelo menos um empregado tem salário maior ou igual a R$ 1.500,00 e neste caso o primeiro encontrado foi o (a): ${funcionario.nome}`
  );
} else {
  console.log("Nenhum empregado tem salário maior ou igual a R$ 1.500,00");
}

let salarioMenorIgual1000 = empregados.some(
  (funcionario) => funcionario.salario <= 1000
);

if (salarioMenorIgual1000) {
  let funcionario = empregados.find(
    (funcionario) => funcionario.salario <= 1000
  );
  console.log(
    `Pelo menos um empregado tem salário menor ou igual a R$ 1.000,00 e neste caso o orimeiro encontrado foi o (a): ${funcionario.nome}`
  );
} else {
  console.log("Nenhum empregado tem salário menor ou igual a R$ 1.000,00");
}
