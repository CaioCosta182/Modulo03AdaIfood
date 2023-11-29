// Exercício Moderado:
// Escreva um programa em JavaScript que calcule a soma dos
// números de 1 a 100 utilizando um loop while. Imprima o resultado no final.

let cont = 1;
let soma = 0;

while (cont <= 100) {
  soma += cont;
  cont++;
}
console.log("A soma dos valores de 1 a 100 é: " + soma);
