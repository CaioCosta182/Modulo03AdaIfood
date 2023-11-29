let contatos = [];
let cont = 0;

function adicionarContato() {
  while (cont < 2) {
    let nome = prompt("Digite o nome do contato:");
    let telefone = prompt("Digite o telefone do contato:");
    let idade = prompt("Digite a idade do contato:");
    let profissao = prompt("Digite a profissão do contato:");

    let contato = {
      Nome: nome,
      Telefone: telefone,
      Idade: idade,
      Profissão: profissao,
    };

    contatos.push(contato);
    cont++;
  }

  let contatosStr = "";
  for (let i = 0; i < contatos.length; i++) {
    contatosStr += "</br>" + "Nome: " + contatos[i].Nome + "</br>";
    contatosStr += "Telefone: " + contatos[i].Telefone + "</br>";
    contatosStr += "Idade: " + contatos[i].Idade + "</br>";
    contatosStr += "Profissão: " + contatos[i].Profissão + "</br>";
  }

  document.getElementById("contatos").innerHTML = contatosStr;
}
