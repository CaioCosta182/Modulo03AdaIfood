// Crie uma lista de contatos, essa lista deve ter o seguintes dados:

// - Nome
// - Telefone
// - Endereço
//     - Nome da rua
//     - Número da residência
//     - Nome do bairro
// - Data de nascimento

// ### 2. Percorrendo a lista de contato
// Crie um laço de repetição que percorra toda a lista de contatos 
//e mostre uma frase contento Nome, Telefone, Endereço e data de nascimento,
// exemplo:
// Bonus: Utilizar template string

let listaContatos = [
    {
        nome: "Caio",
        telefone: "31 9999 9999",
        endereco: {
            nomerua: "Rua: A",
            numeroCasa: "Número: 22",
            bairro: "Bairro: Centro"
        },
        // Data de nascimento no formato "YYYY-MM-DD"
        dataNascimento: "1900-10-01"
    },
    {
        nome: "Jão",
        telefone: "31 8888 8888",
        endereco: {
            nomerua: "Rua: B",
            numeroCasa: "Número: 2",
            bairro: "Bairro: Centro"
        },
        // Data de nascimento no formato "YYYY-MM-DD"
        dataNascimento: "1800-10-01"
    },
    {
        nome: "Maria",
        telefone: "31 7777 7777",
        endereco: {
            nomerua: "Rua: C",
            numeroCasa: "Número: 222",
            bairro: "Bairro: Centro"
        },
        // Data de nascimento no formato "YYYY-MM-DD"
        dataNascimento: "1700-10-01"
    }
];

for (let contato of listaContatos) {
    let { nome, telefone, endereco, dataNascimento } = contato;
    let { nomerua, numeroCasa, bairro } = endereco;

    const frase = `Nome: ${nome}, Telefone: ${telefone}, Endereço: ${nomerua}, ${numeroCasa}, ${bairro}, Data de Nascimento: ${dataNascimento}`;
    console.log(frase);
}


// console.log("Nome: " + listaContatos[0].nome);
// console.log("Telefone: " + listaContatos[0].telefone);
// console.log("Endereço: " + listaContatos[0].endereco.nomerua + ", " + listaContatos[0].endereco.numeroCasa + ", " + listaContatos[0].endereco.bairro);
// console.log("Data de Nascimento: " + listaContatos[0].dataNascimento);
