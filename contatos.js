let lista = []

function adicionarContato(novoContato) {
  // Verificar se usuário já existe, caso exista return
  const novoContatoJaExiste = verificarSeContatoExiste(novoContato.id)

  if (novoContatoJaExiste) {
    console.log("Usuário já cadastrado")
    return
  }

  lista.unshift(novoContato)
}

function verificarSeContatoExiste(idContato) {
  return lista.find(contato => contato.id === idContato)
}

function apagarContatoPeloId(contatoId) {
  const contatoExiste = verificarSeContatoExiste(contatoId)

  if (!contatoExiste) {
    console.log("O contato que você está tentando excluir não existe")
    return
  }

  lista = lista.filter(contato => contato.id !== contatoId)
}

function imprimirContato(contato) {
  return `ID: ${contato.id} - Nome: ${contato.nome}`
}

function editarContatoById(idContato, novoContato) {
  const contatoIndex = lista.findIndex(contato => contato.id === idContato);

  if (contatoIndex === -1) {
  console.log("O contato que você está tentando editar não existe");
  return;
  }

  lista[contatoIndex] = novoContato;
}

function mostrarContatoById(idContato) {
  const contato = verificarSeContatoExiste(idContato)

  if (!contato) {
    alert("Usuário não cadastrado")
    return
  }

  imprimirContato(contato)
}

function listarlista() {
  let lista2 = ""

  lista.map(contato => lista2.concat(imprimirContato(contato)))

  return lista2
}

module.exports = {
  lista,
  adicionarContato,
  verificarSeContatoExiste,
  apagarContatoPeloId,
  imprimirContato,
  editarContatoById,
  mostrarContatoById,
  listarlista
}