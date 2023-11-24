import { adicionarContato, apagarContatoPeloId, editarContatoById, lista } from "./modules/contatos.js";
import darkMode from "./modules/darkMode.js";

darkMode();

const divLista = document.querySelector("div[data-lista]");

function criarItemLista(contato) {
  const item = document.createElement("div");

  item.setAttribute(
    "class",
    "flex-1 min-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4"
  );

  item.innerHTML = `
    <div class="flex flex-col items-center gap-1">
      <div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex justify-center">
        <svg class="absolute w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
          </path>
        </svg>
      </div>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${contato.name}</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">${contato.email}</span>
      <span class="text-sm text-gray-500 dark:text-gray-400">${contato.phone}</span>
      <div class="flex mt-4 md:mt-6">
        <button
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500/80 rounded-lg hover:bg-red-800 transition-colors focus:ring-4 focus:outline-none focus:ring-red-300"
          onclick="excluirContato(${contato.id})"
        >
          Excluir
        </button>

        <!-- Modal toggle -->
        <button
          data-modal-target="editar-contato"
          data-modal-toggle="editar-contato"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
          type="button"
          onclick="editarValoresModal('${contato.id}', '${contato.name}', '${contato.phone}', '${contato.email}')"
        >
          Editar
        </button>
      </div>
    </div>
  `;

  return item;
}

function atualizarLista() {
  divLista.innerHTML = "";

  for (const contato of lista) {
    const item = criarItemLista(contato);
    divLista.appendChild(item);
  }
}

function excluirContato(id) {
  apagarContatoPeloId(id);
  atualizarLista();
}

function handleAdicionarContato(event) {
  // event.preventDefault();

  const nome = event.target.elements[0].value;
  const email = event.target.elements[1].value;
  const telefone = event.target.elements[2].value;

  adicionarContato(nome, email, telefone);

  event.target.elements[0].value = "";
  event.target.elements[1].value = "";
  event.target.elements[2].value = "";

  atualizarLista();
}

function handleEditarContato(event) {
  // event.preventDefault();

  const nome = event.target.elements[0].value;
  const email = event.target.elements[1].value;
  const telefone = event.target.elements[2].value;
  const id = event.target.elements[3].value;

  console.log(lista);

  editarContatoById(id, {
    id: Number(id),
    name: nome,
    phone: telefone,
    email: email,
  });

  console.log(lista);

  event.target.elements[0].value = "";
  event.target.elements[1].value = "";
  event.target.elements[2].value = "";
  event.target.elements[3].value = "";

  atualizarLista();
}

function editarValoresModal(id, nome, telefone, email) {
  const nomeInput = document.querySelector("input[data-form-editar='nome']");
  const emailInput = document.querySelector("input[data-form-editar='email']");
  const telefoneInput = document.querySelector("input[data-form-editar='telefone']");
  const contatoIdInput = document.querySelector("input[data-form-editar='contatoId']");

  nomeInput.value = nome;
  emailInput.value = email;
  telefoneInput.value = telefone;
  contatoIdInput.value = id;
}

window.excluirContato = excluirContato;
window.handleAdicionarContato = handleAdicionarContato;
window.handleEditarContato = handleEditarContato;
window.editarValoresModal = editarValoresModal;

atualizarLista()
