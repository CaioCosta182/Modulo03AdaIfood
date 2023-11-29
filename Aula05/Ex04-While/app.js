// Exercício Avançado:
// Escreva um programa em JavaScript que calcule e imprima os primeiros
// N termos da sequência de Fibonacci,
// onde N é um número fornecido pelo usuário, utilizando um loop while.

function fibonacci(n) {
  let a = 0,
    b = 1,
    temp;

  while (n >= 0) {
    console.log(a);
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
}

fibonacci(10);
