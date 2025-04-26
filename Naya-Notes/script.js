const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="toggleComplete(this)">✔️</button>
            <button onclick="deleteTask(this)">🗑️</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle("completed");
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
