const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const clearButton = document.getElementById('clear-button');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recarregar a página
    const tarefa = taskInput.value.trim();
    if (tarefa !== '') { // Verifica se a descrição da tarefa não está vazia
        addTask(tarefa); // Adiciona a tarefa à lista
        taskInput.value = ''; // Limpa o campo de entrada após adicionar a tarefa
    } else {
        alert('Por favor, digite uma tarefa válida.'); // Exibe um alerta se a entrada estiver vazia
    }
});

function addTask(Tarefa) {
    const li = document.createElement('li'); // Cria um novo elemento de lista

    // Define o texto da tarefa no elemento de lista
    li.textContent = Tarefa;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        // Confirmação antes de remover a tarefa
        const confirmacao = confirm('Tem certeza de que deseja remover esta tarefa?');
        if (confirmacao) {
            li.remove(); // Remove o elemento de lista (a tarefa)
            toggleClearButton(); // Verifica se deve exibir ou ocultar o botão "Limpar Lista"
        }
    });

    removeButton.addEventListener('mouseover', function() {
        removeButton.style.backgroundColor = 'red'; // Muda cor ao passar o mouse
    });
    removeButton.addEventListener('mouseout', function() {
        removeButton.style.backgroundColor = '#fbdf1f';
    });
    
    const completeButton = document.createElement('button');
    completeButton.textContent = '✔';
    completeButton.classList.add('complete-btn');


    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    

    completeButton.addEventListener('mouseover', function() {
        completeButton.style.backgroundColor = 'green'; // Muda cor ao passar o mouse
    });
    completeButton.addEventListener('mouseout', function() {
        completeButton.style.backgroundColor = '#fbdf1f';
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);
    li.appendChild(completeButton);

    toggleClearButton();

}

function toggleClearButton() {
    if (taskList.childElementCount > 0) {
        clearButton.style.display = 'inline-block'; // Exibe o botão "Limpar Lista"
    } else {
        clearButton.style.display = 'none'; // Oculta o botão "Limpar Lista"
    }
}

clearButton.addEventListener('click', function() {
    const confirmacao = confirm('Tem certeza de que deseja limpar toda a lista de tarefas?');
    if (confirmacao) {
        taskList.innerHTML = ''; // Limpa o conteúdo da lista de tarefas
        toggleClearButton(); // Verifica se deve exibir ou ocultar o botão "Limpar Lista"
    }
});
