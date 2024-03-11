const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    }
});

function addTask(Tarefa) {
    const li = document.createElement('li');
    li.textContent = Tarefa;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        li.remove();
    });

    removeButton.addEventListener('mouseover', function() {
        removeButton.style.backgroundColor = 'red';
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
        completeButton.style.backgroundColor = 'green';
    });
    completeButton.addEventListener('mouseout', function() {
        completeButton.style.backgroundColor = '#fbdf1f';
    });

    li.appendChild(removeButton);
    li.appendChild(completeButton);

    taskList.appendChild(li);
}
