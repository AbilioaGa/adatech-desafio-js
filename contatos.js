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

function imprimirContato(contato) {
  return `ID: ${contato.id} - Nome: ${contato.nome}`
}

function editarContatoById(idContato, novoContato) {
  const contatoIndex = contatos.findIndex(contato => contato.id === idContato);

  if (contatoIndex === -1) {
  console.log("O contato que você está tentando editar não existe");
  return;
  }

  contatos[contatoIndex] = novoContato;
}

function mostrarContatoById(idContato) {
  const contato = verificarSeContatoExiste(idContato)

  if (!contato) {
    alert("Usuário não cadastrado")
    return
  }

  imprimirContato(contato)
}

function listarContatos() {
  let lista = ""

  contatos.map(contato => lista.concat(imprimirContato(contato)))

  return lista
}

export {
  contatos,
  adicionarContato,
  verificarSeContatoExiste,
  apagarContatoPeloId,
  imprimirContato,
  editarContatoById,
  mostrarContatoById,
  listarContatos
}