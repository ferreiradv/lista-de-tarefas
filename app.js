const inputTarefa = document.querySelector('#inputTarefa');

const btnAdd = document.querySelector('button');

const tagUl = document.querySelector('ul');

const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || [];

function mostraTarefa(){

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

mostraTarefa();

function addTarefa(){
        
        const texto = inputTarefa.value;
    
        tarefas.push(texto);

        inputTarefa.value = '';
        
        mostraTarefa();

        salvaTarefas();

};

btnAdd.addEventListener('click',addTarefa);

function btnDeletar(indice) {
    tarefas.splice(indice, 1);
    mostraTarefa();
    salvaTarefas();
}

function salvaTarefas() {
    localStorage.setItem('list_tarefas',JSON.stringify(tarefas))
}