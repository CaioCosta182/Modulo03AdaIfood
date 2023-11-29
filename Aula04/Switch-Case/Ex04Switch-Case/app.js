// // 4. **Exercício Avançado:**
// // Crie um programa em JavaScript que implemente uma calculadora básica.
// A função `calculadora` receberá dois números como parâmetro e um terceiro parâmetro indicando a ação a ser executada.
// Utilize a estrutura `switch/case` para realizar a operação correta com base na ação fornecida.
// As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar". O resultado da operação deve ser retornado pela função.
// // **Exemplo de uso:** `calculadora(5, 3, "somar")` deve retornar 8.

let num1 = 2;
let num2 = 2;
let operador = "dividir";
let resultado;

switch (operador) {
  case "somar":
    resultado = num1 + num2;
    console.log(resultado);
    break;
  case "subitrair":
    resultado = num1 - num2;
    console.log(resultado);
    break;
  case "multiplicar":
    resultado = num1 * num2;
    console.log(resultado);
    break;
  case "dividir":
    resultado = num1 / num2;
    console.log(resultado);
    break;

  default:
    console.log("Operação inválida.");
    break;
}
