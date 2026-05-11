const tasks = [];
const form = document.getElementById('task-form');
const taskContainer = document.querySelector('.listTasks');

form.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault(); // Prevent page refresh
    
    const input = document.getElementById('task-input');
    const taskText = input.value;

    if (taskText === "") return; // Check if input is empty

    // Bonus I: Task Object
    const taskObj = {
        task_id: tasks.length,
        text: taskText,
        done: false
    };

    tasks.push(taskObj);
    renderTask(taskObj);
    input.value = ""; // Clear input
}

function renderTask(task) {
    // Create task container
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');
    taskDiv.setAttribute('data-task-id', task.task_id);

    // 1. Create "X" button (Font Awesome)
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa-solid', 'fa-xmark');
    deleteBtn.addEventListener('click', () => deleteTask(task.task_id));

    // 2. Create Checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', () => doneTask(task.task_id));

    // 3. Create Label
    const label = document.createElement('label');
    label.innerText = task.text;

    // Append elements to div
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);

    // Append div to the list
    taskContainer.appendChild(taskDiv);
}

// Bonus I: Mark as Done
function doneTask(id) {
    const taskIndex = tasks.findIndex(t => t.task_id === id);
    tasks[taskIndex].done = !tasks[taskIndex].done;

    // Find the DOM element and toggle class
    const taskElement = document.querySelector(`[data-task-id="${id}"]`);
    taskElement.classList.toggle('is-done');
}

// Bonus II: Delete Task
function deleteTask(id) {
    // Find index in array and remove
    const taskIndex = tasks.findIndex(t => t.task_id === id);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
    }

    // Remove from DOM
    const taskElement = document.querySelector(`[data-task-id="${id}"]`);
    taskElement.remove();
}