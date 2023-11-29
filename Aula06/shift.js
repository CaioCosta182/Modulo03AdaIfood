// 1. Utilize o método "shift" para remover o primeiro elemento do array.
// 2. Verifique o comprimento (length) do array para confirmar que o elemento foi removido corretamente.
// 3. Utilize o método "shift" novamente para remover outro elemento do array.
// 4. Verifique o comprimento (length) do array novamente para confirmar que o segundo elemento foi removido corretamente.

const linguagens = ["javascript", "python", "golang", "java"];
let tamanhoLinguagens = linguagens.length;

console.log(linguagens);
console.log(tamanhoLinguagens);
linguagens.shift();

tamanhoLinguagens = linguagens.length;
console.log(linguagens);
console.log(tamanhoLinguagens);
linguagens.shift();

tamanhoLinguagens = linguagens.length;
console.log(linguagens);
console.log(tamanhoLinguagens);
