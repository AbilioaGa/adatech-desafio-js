const contatos = require("./contatos.js")

const prompt = require('prompt-sync')({ sigint: true });

while (true) {

  let input = Number(prompt(`
  Escolha uma opção:

    1 - Listar todas os contatos
    2 - Exibir um contato
    3 - Adicionar um contato
    4 - Editar um contato
    5 - Remover um contato

    0 - Sair \n
  Opção: `))

  switch (input) {
    case 1:
      console.log("Contatos: ")
      console.log(contatos.lista)
      break
    case 2:
      console.log("Exibir um contato")
      break
    case 3:
      console.log("Adicionar um contato")
      contatos.adicionarContato({
        nome: prompt("Nome: "),
        email: prompt("Email: "),
        telefone: prompt("Telefone: ")
      })
      break
    case 4:
      console.log("Editar um contato")
      break
    case 5:
      console.log("Remover um contato")
      break
    case 0:
      process.exit(0);
      break
    default:
      console.log("Opcão inválida")
  }

}
