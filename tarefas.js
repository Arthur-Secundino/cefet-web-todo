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

botaoIncluirNovaTarefaEl.addEventListener("click", function (){
    const novaTarefa = {
        nome: `${nomeNovaTarefaEl.value}`,
        categoria: `${categoriaNovaTarefaEl.value}`,
        realizada: false
    };

    tarefas.push(novaTarefa);
    insereTarefaNaPagina(novaTarefa);

    nomeNovaTarefaEl.value = "";
    nomeNovaTarefaEl.focus();
});

filtroDaCategoriaEl.addEventListener("change", function (){
    const tarefaEls = Array.from(listaDeTarefasEl.children);
    tarefaEls.forEach(tarefa => tarefa.classList.remove("retido-no-filtro"));
    
    if(filtroDaCategoriaEl.value !== ""){
        const tarefasRetidas = tarefaEls.filter(tarefa => !tarefa.classList.contains(`categoria-${filtroDaCategoriaEl.value}`));
        tarefasRetidas.forEach(tarefa => tarefa.classList.add("retido-no-filtro"));
    }
});

function insereTarefaNaPagina(tarefa){
    const tagTarefa = `<li class="item-tarefa categoria-${tarefa.categoria} ${tarefa.realizada === true ? "marcado" : ""}">${tarefa.nome}</li>`;
    listaDeTarefasEl.innerHTML += tagTarefa;
}