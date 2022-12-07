
let tarefasPendentesUl = document.querySelector(".tarefas-pendentes");

function renderizaTarefaPendente(tarefa) {

    let li = document.createElement("li");
    li.classList.add("tarefa");
    li.innerHTML = 
    `
        <div class="not-done" id="${tarefa.id}" onclick="manipulaTarefaPeloId(${tarefa.id})"></div>
        <div class="descricao">
            <p class="nome">ID: ${tarefa.id}</p>
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
        </div>

    `;
    tarefasPendentesUl.appendChild(li);
}

function manipulaTarefaPeloId(id){
    console.log("ID recebido: "+ id);
    window.location.reload(); //Refresh //F5 na página
}