// Exercício Fácil:
// Escreva um programa em JavaScript que recebe uma cor em inglês e retorna o seu nome em português. 
// Utilize a estrutura switch/case para realizar essa verificação. 
// As cores podem ser: "red" (vermelho), "blue" (azul), "green" (verde), "yellow" (amarelo) e "black" (preto).

let corEmIngles = "blue";
let corEmPortugues;

    switch (corEmIngles) {
        case "red":
            corEmPortugues = "vermelho";
            console.log(corEmPortugues);
            break;
        case "blue":
            corEmPortugues = "azul";
            console.log(corEmPortugues);
            break;
        case "green":
            corEmPortugues = "verde";
            console.log(corEmPortugues);
            break;
        case "yellow":
            corEmPortugues = "amarelo";
            console.log(corEmPortugues);
            break;
        case "black":
            corEmPortugues = "preto";
            console.log(corEmPortugues);
            break;
        default:
            corEmPortugues = "Cor desconhecida";
            console.log(corEmPortugues);
    }
