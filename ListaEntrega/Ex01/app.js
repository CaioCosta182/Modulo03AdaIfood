// Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos:
// `frutas`, `legumes` e `verduras`,
//faça com que essa função retorne o número de itens de cada um desses tipos.

// Sendo que:
// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.

function contarItens(hotifrutis) {
  const tipos = {
    frutas: ["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"],
    legumes: [
      "cenoura",
      "batata",
      "brócolis",
      "abóbora",
      "tomate",
      "alho-poró",
    ],
    verduras: ["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"],
  };

  let contagem = {
    frutas: 0,
    legumes: 0,
    verduras: 0,
  };

  hotifrutis.forEach((item) => {
    if (tipos.frutas.includes(item)) {
      contagem.frutas++;
    } else if (tipos.legumes.includes(item)) {
      contagem.legumes++;
    } else if (tipos.verduras.includes(item)) {
      contagem.verduras++;
    }
  });

  return contagem;
}

let listaHotifrutis = [
  "banana",
  "tomate",
  "espinafre",
  "maçã",
  "abóbora",
  "alho-poró",
];

let frutas = ["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"];
let legumes = [
  "cenoura",
  "batata",
  "brócolis",
  "abóbora",
  "tomate",
  "alho-poró",
];
let verduras = ["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"];

let resultado = contarItens(listaHotifrutis);
console.log(resultado);

resultado = contarItens(frutas);
console.log(resultado);

resultado = contarItens(legumes);
console.log(resultado);

resultado = contarItens(verduras);
console.log(resultado);
