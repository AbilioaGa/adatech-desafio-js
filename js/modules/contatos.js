
let lista = JSON.parse(localStorage.getItem("contatos")) || [];

function mostrarModalContatoExistente() {
  document.getElementById("botao-contato-existente").click();
}

function adicionarContato(nome, email, telefone) {
  let contato = {
    id: new Date().getDate() + Math.floor(Math.random() * 9999999),
    name: nome,
    email: email,
    phone: telefone,
  };

  // Verificar se o usuário já existe, caso exista, retornar
  const novoContatoJaExiste = verificarSeContatoExiste(contato);

  if (novoContatoJaExiste) {
    mostrarModalContatoExistente();
    return;
  }

  lista.unshift(contato);
  salvarListaNoLocalStorage();

  console.log(lista);
}

function verificarSeContatoExiste(contato) {
  return lista.some(
    (item) => item.name === contato.name && item.email === contato.email && item.phone === contato.phone
  );
}

function apagarContatoPeloId(contatoId) {
  lista = lista.filter((contato) => contato.id !== contatoId);
  salvarListaNoLocalStorage();
}

function imprimirContato(contato) {
  return `ID: ${contato.id} - Nome: ${contato.name}`;
}

function editarContatoById(idContato, novoContato) {
  const contatoIndex = lista.findIndex((contato) => contato.id === Number(idContato));

  if (contatoIndex === -1) {
    console.log("O contato que você está tentando editar não existe");
    return;
  }

  lista[contatoIndex] = novoContato;
  salvarListaNoLocalStorage();
}

function mostrarContatoById(idContato) {
  const contato = lista.find((contato) => contato.id === idContato);

  if (!contato) {
    alert("Usuário não cadastrado");
    return;
  }

  imprimirContato(contato);
}

function listarlista() {
  let lista2 = "";

  lista.map((contato) => lista2.concat(imprimirContato(contato)));

  return lista2;
}

function salvarListaNoLocalStorage() {
  localStorage.setItem("contatos", JSON.stringify(lista));
}

export {
  adicionarContato,
  apagarContatoPeloId,
  editarContatoById,
  imprimirContato,
  lista,
  listarlista,
  mostrarContatoById,
  verificarSeContatoExiste,
};
