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

for(let tarefa of tarefas){
    insereTarefaNaPagina(tarefa);
}

function insereTarefaNaPagina(tarefa){
    const tagTarefa = `<li class="item-tarefa categoria-${tarefa.categoria} ${tarefa.realizada === true ? "marcado" : ""}">${tarefa.nome}</li>`;
    listaDeTarefasEl.innerHTML += tagTarefa;
}