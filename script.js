import {
  contatos,
  adicionarContato,
  listarContatos,
  mostrarContatoById
} from './contatos.js'

const opcoesValidas = [1, 2, 3, 4, 5]

function solicitarOpcaoUsuario() {
  const input = Number(prompt(`
    Escolha uma opção:

    1 - Listar todas os contatos
    2 - Exibir um contato
    3 - Adicionar um contato
    4 - Editar um contato
    5 - Remover um contato
  `))

  return input
}

function start() {
  const opcao = solicitarOpcaoUsuario()

  switch (opcao) {
    case 1:
      const lista = listarContatos()

      if (!lista) {
        alert("Lista de contatos vazia")
      } else {
        alert(lista)
      }

      start()
      break
    case 2:
      if (contatos.length <= 0) {
        alert("Lista de contatos vazia")
        start()
        break
      }

      const idContato = prompt("Informe o ID do usuário")

      mostrarContatoById(idContato)

      start()
      break 
    default:
      alert("Opção inválida")
      start()
      break
  }
}

start()