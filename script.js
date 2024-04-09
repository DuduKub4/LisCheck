$(document).ready(function() {
    const taskForm = $('#task-form');
    const taskInput = $('#task-input');
    const taskList = $('#task-list');
    const clearButton = $('#clear-button');

    taskForm.on('submit', function(e) {
        e.preventDefault();
        const tarefa = taskInput.val().trim();
        if (tarefa !== '') {
            addTask(tarefa);
            taskInput.val(''); //Limpa o campo de entrada após adicionar a tarefa
        } else {
            alert('Adicione uma tarefa!'); // Exibe um alerta se a entrada estiver vazia
        }
    });

    function addTask(Tarefa) {
        const li = $('<li>'); // Cria um novo elemento de lista

        // Define o texto da tarefa no elemento de lista
        li.text(Tarefa);

        const removeButton = $('<button>').text('X').addClass('remove-btn').on('click', function() {
            // Confirmação antes de remover a tarefa
            const confirmacao = confirm('Tem certeza de que deseja remover esta tarefa?');
            if (confirmacao) {
                li.remove(); // Remove o item da lista
                toggleClearButton(); // Verifica se deve exibir ou ocultar o botão "Limpar Lista"
            }
        }).on('mouseover', function() {
            $(this).css('background-color', 'red'); // Muda cor ao passar o mouse
        }).on('mouseout', function() {
            $(this).css('background-color', '#fbdf1f');
        });
        
        const completeButton = $('<button>').text('✔').addClass('complete-btn').on('click', function() {
            li.toggleClass('completed');
        }).on('mouseover', function() {
            $(this).css('background-color', 'green'); // Muda cor ao passar o mouse
        }).on('mouseout', function() {
            $(this).css('background-color', '#fbdf1f');
        });

        li.append(removeButton);
        taskList.append(li);
        li.append(completeButton);

        toggleClearButton();
    }

    function toggleClearButton() {
        if (taskList.children().length > 0) {
            clearButton.css('display', 'inline-block'); // Exibe o botão "Limpar Lista"
        } else {
            clearButton.css('display', 'none'); // Oculta o botão "Limpar Lista"
        }
    }

    clearButton.on('click', function() {
        const confirmacao = confirm('Tem certeza de que deseja limpar toda a lista de tarefas?');
        if (confirmacao) {
            taskList.empty(); //Limpa o conteúdo da lista de tarefas
            toggleClearButton();
        }
    });
});
