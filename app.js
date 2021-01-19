const inputTarefa = document.querySelector('#inputTarefa');

const btnAdd = document.querySelector('button');

const tagUl = document.querySelector('ul');

const tarefas = [];

function showTarefas(){

    tagUl.innerHTML = ''

    for(tarefa of tarefas){
      
        const tagLI = document.createElement('li');
        const texto = document.createTextNode(tarefa);

        const link = document.createElement('a');
        const indice = tarefas.indexOf(tarefa);

        const textoLink = document.createTextNode('remover');

        link.appendChild(textoLink);

        link.setAttribute('onclick',`btnDeletar(${indice})`);

        tagLI.appendChild(texto);

        tagUl.appendChild(tagLI);

        tagLI.appendChild(link);

      
    };

};


function addTarefa(){
    if(inputTarefa.value === ""){
        alert('Campo de texto vazio, por favor preencher antes de adicionar.')
    }else{
        const texto = inputTarefa.value;
    
        tarefas.push(texto);
        inputTarefa.value = '';
    
        showTarefas();
    }

};

btnAdd.addEventListener('click',addTarefa);

function btnDeletar(indice) {
    tarefas.splice(indice, 1);
    showTarefas();
}