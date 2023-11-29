// 5. **Exercicios Desafiador:** Com orientaçao a objetos

//     Escreva um programa em JavaScript cria uma lista de contatos,
//     com dados inputados pelo usuário, dados para salvar:

//     - Nome
//     - Telefone
//     - Idade
//     - Profissão

//     O usuário deve inputar dados de 5 contatos.
//     Ao final o programa deve mostrar uma lista com os contatos.

class Contato {
  constructor(nome, telefone, idade, profissao) {
    this.nome = nome;
    this.telefone = telefone;
    this.idade = idade;
    this.profissao = profissao;
  }
}

let listaDeContatos = [];

function adicionarContato(nome, telefone, idade, profissao) {
  let contato = new Contato(nome, telefone, idade, profissao);
  listaDeContatos.push(contato);
}

function exibirContatos() {
  let listaContatosDiv = document.getElementById("listaContatos");
  for (let i = 0; i < listaDeContatos.length; i++) {
    listaContatosDiv.innerHTML += `Nome: ${listaDeContatos[i].nome}, 
    Telefone: ${listaDeContatos[i].telefone}, 
    Idade: ${listaDeContatos[i].idade}, 
    Profissão: ${listaDeContatos[i].profissao}<br/>`;
  }
}

//exibirContatos();
