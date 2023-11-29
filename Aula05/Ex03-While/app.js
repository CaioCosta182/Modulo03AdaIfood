// Exercício Intermediário:
// Escreva um programa em JavaScript que encontre e
// imprima todos os números primos de 1 a 100 utilizando um loop while.

let cont = 2;

while (cont <= 100) {
  let primos = true;
  let divisor = 2;

  while (divisor < cont) {
    if (cont % divisor === 0) {
      primos = false;
      break;
    }
    divisor++;
  }
  if (primos) {
    console.log("Número " + cont + " é primo");
  }
  cont++;
}
