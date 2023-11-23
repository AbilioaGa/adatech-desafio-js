let lista = [
  {
    id: new Date().getDate() + Math.floor(Math.random() * 9999999),
    name: "Vinicius",
    phone: '19997820000',
    email: 'vinicius@email.com'
  },
  {
    id: new Date().getDate() + Math.floor(Math.random() * 9999999),
    name: "Lucas",
    phone: '19996011111',
    email: 'lucas@email.com'
  },
  {
    id: new Date().getDate() + Math.floor(Math.random() * 9999999),
    name: "Sabrina",
    phone: '19984141414',
    email: 'sabrina@email.com'
  }
]

function adicionarContato(nome, email, telefone) {

  let contato = {
    id: new Date().getDate() + Math.floor(Math.random() * 9999999),
    name: nome,
    email: email,
    phone: telefone
  }

  // Verificar se usuário já existe, caso exista return
  const novoContatoJaExiste = verificarSeContatoExiste(contato)

  if (novoContatoJaExiste) {
    console.log("Usuário já cadastrado")
    return
  }

  lista.unshift(contato)

  console.log(lista)
}

function verificarSeContatoExiste(contato) {
  return lista.some(item => item.name === contato.name && item.email === contato.email && item.phone === contato.phone)
}

function apagarContatoPeloId(contatoId) {
  // const contatoExiste = verificarSeContatoExiste(contatoId)

  // if (!contatoExiste) {
  //   console.log("O contato que você está tentando excluir não existe")
  //   return
  // }

  lista = lista.filter(contato => contato.id !== contatoId)
}

function imprimirContato(contato) {
  return `ID: ${contato.id} - Nome: ${contato.nome}`
}

function editarContatoById(idContato, novoContato) {
  const contatoIndex = lista.findIndex(contato => contato.id == idContato);

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

export {
  lista,
  adicionarContato,
  verificarSeContatoExiste,
  apagarContatoPeloId,
  imprimirContato,
  editarContatoById,
  mostrarContatoById,
  listarlista
}