const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const allBtn = document.getElementById('all-btn');
const uncompletedBtn = document.getElementById('uncompleted-btn');
const completedBtn = document.getElementById('completed-btn');
const deleteAllBtn = document.getElementById('deleteAll-btn');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    //checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    //buton Șterge
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Șterge';
    deleteBtn.classList.add('delete-btn');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = 'line-through';
        } else {
            taskSpan.style.textDecoration = 'none';
        }
    });

    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
    });

   // container pentru checkbox + delete
    let Container = document.createElement("div");
    Container.classList.add("task-actions");
    Container.appendChild(checkbox);
    Container.appendChild(deleteBtn);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(Container);

    taskList.appendChild(taskItem);
    taskInput.value = '';
});

// Buton Toate
allBtn.addEventListener('click', function() {
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach(task => task.style.display = 'flex');
});

// Buton Nerezolvate (nebifate)
uncompletedBtn.addEventListener('click', function() {
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach(task => {
        const checkbox = task.querySelector('input[type="checkbox"]');
        task.style.display = checkbox.checked ? 'none' : 'flex';
    });
});

// Buton Rezolvate (bifate)
completedBtn.addEventListener('click', function() {
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach(task => {
        const checkbox = task.querySelector('input[type="checkbox"]');
        task.style.display = checkbox.checked ? 'flex' : 'none';
    });
});

// Buton Șterge tot
deleteAllBtn.addEventListener('click', function() {
    taskList.innerHTML = '';
});
