// 3. Criando estrutura de números
// Crie laços de repetição para retornar a seguinte estrutura de numeros:

for (let linha = 1; linha <= 5; linha++) {
    let linhaAtual = '';
    for(let coluna = 1; coluna <= linha; coluna++){
        linhaAtual += coluna;
    }
    console.log(linhaAtual);
    
}
console.log('');

for (let linha = 5; linha >= 1; linha--) {
    let linhaAtual = '';
    for(let coluna = 1; coluna <= linha; coluna++){
        linhaAtual += coluna;
    }
    console.log(linhaAtual);
    
}