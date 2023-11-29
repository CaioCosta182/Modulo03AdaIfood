// 1. Utilize o método "find" para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 10 pessoas.
// 2. Utilize o método "find" novamente para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 25 pessoas.
// 3. Utilize o método "find" mais uma vez para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 40 pessoas.
// 4. Verifique se você conseguiu utilizar o método "find" corretamente.

const lugares = [
  { nome: "Sala de Reuniões", capacidade: 8 },
  { nome: "Auditório", capacidade: 50 },
  { nome: "Sala de Treinamento", capacidade: 20 },
  { nome: "Sala de Conferências", capacidade: 30 },
  { nome: "Sala de Estudos", capacidade: 12 },
];

const minimo10Pessoas = lugares.find((lugar) => lugar.capacidade >= 10);
console.log("O primeiro lugar que comporta 10 pessoas é o:");
console.log(minimo10Pessoas);
console.log("");

const minimo25Pessoas = lugares.find((lugar) => lugar.capacidade >= 25);
console.log("O primeiro lugar que comporta 25 pessoas é o:");
console.log(minimo25Pessoas);
console.log("");

const minimo50Pessoas = lugares.find((lugar) => lugar.capacidade >= 50);
console.log("O primeiro lugar que comporta 50 pessoas é o:");
console.log(minimo50Pessoas);
