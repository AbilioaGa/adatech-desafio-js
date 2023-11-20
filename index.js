/*
  Estrutura do contato

  {
    id: number,
    nome: string,
    telefone: string,
    email: string,
    endereco: string
  }
*/

let contatos = []

function adicionarContato(novoContato) {
  // Verificar se usuário já existe, caso exista return
  const novoContatoJaExiste = verificarSeContatoExiste(novoContato.id)

  if (novoContatoJaExiste) {
    console.log("Usuário já cadastrado")
    return
  }

  contatos.unshift(novoContato)
}

function verificarSeContatoExiste(idContato) {
  return contatos.find(contato => contato.id === idContato)
}

function apagarContatoPeloId(contatoId) {
  const contatoExiste = verificarSeContatoExiste(contatoId)

  if (!contatoExiste) {
    console.log("O contato que você está tentando excluir não existe")
    return
  }

  contatos = contatos.filter(contato => contato.id !== contatoId)
}

function imprimirContatos() {
  contatos.map(contato => {
    console.log(`ID: ${contato.id} - Nome: ${contato.nome}`)
  })
}

adicionarContato({
  id: 1,
  nome: "Vinicius",
  telefone: "19997820000",
  email: "vinicius@becaleti.com",
  endereco: "Rua sem saída"
})

adicionarContato({
  id: 2,
  nome: "Laiane",
  telefone: "19997821111",
  email: "laiane@gmail.com",
  endereco: "Rua sem saída 2"
})

adicionarContato({
  id: 3,
  nome: "Rodrigo",
  telefone: "19997822222",
  email: "rodrigo@gmail.com",
  endereco: "Rua sem saída 3"
})

apagarContatoPeloId(3)