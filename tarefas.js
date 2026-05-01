let tarefas = [
    {
        nome: "Fazer as compras do mês",
        categoria: "compras",
        realizada: false
    },
    {
        nome: "Estudar para a prova de SD",
        categoria: "estudos",
        realizada: true
    }
];

const listaDeTarefasEl = document.querySelector("#lista-tarefas");
listaDeTarefasEl.innerHTML = "";

const botaoIncluirNovaTarefaEl = document.querySelector("#incluir-nova-tarefa");
const nomeNovaTarefaEl = document.querySelector("#nova-tarefa-nome");
const categoriaNovaTarefaEl = document.querySelector("#nova-tarefa-categoria");

const filtroDaCategoriaEl = document.querySelector("#filtro-de-categoria");

for(let tarefa of tarefas){
    insereTarefaNaPagina(tarefa);
}

botaoIncluirNovaTarefaEl.addEventListener("click", adiconaNovaTarefa);

nomeNovaTarefaEl.addEventListener("keyup", function (event){
    if(event.key === "Enter"){
        adiconaNovaTarefa();
    }
});

filtroDaCategoriaEl.addEventListener("change", function (){
    const tarefaEls = Array.from(listaDeTarefasEl.children);
    tarefaEls.forEach(tarefa => tarefa.classList.remove("retido-no-filtro"));
    
    if(filtroDaCategoriaEl.value !== ""){
        const tarefasRetidas = tarefaEls.filter(tarefa => !tarefa.classList.contains(`categoria-${filtroDaCategoriaEl.value}`));
        tarefasRetidas.forEach(tarefa => tarefa.classList.add("retido-no-filtro"));
    }
});

listaDeTarefasEl.addEventListener("click", function (event){
    event.target.classList.toggle("marcado");
    for(let tarefa of tarefas){
        if(tarefa.nome === event.target.innerHTML){
            tarefa.realizada = !tarefa.realizada;
        }
    }
});

function adiconaNovaTarefa(){
    const novaTarefa = {
        nome: `${nomeNovaTarefaEl.value}`,
        categoria: `${categoriaNovaTarefaEl.value}`,
        realizada: false
    };

    tarefas.push(novaTarefa);
    insereTarefaNaPagina(novaTarefa);

    nomeNovaTarefaEl.value = "";
    nomeNovaTarefaEl.focus();
}

function insereTarefaNaPagina(tarefa){
    const tagTarefa = `<li class="item-tarefa categoria-${tarefa.categoria} ${tarefa.realizada === true ? "marcado" : ""}">${tarefa.nome}</li>`;
    listaDeTarefasEl.innerHTML += tagTarefa;
}