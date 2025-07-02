document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    function loadTasks() {
        taskList.innerHTML = "";
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    }

    // Add task to list and local storage
    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText === "") return;
        addTaskToDOM(taskText, false);
        saveTask(taskText, false);
        taskInput.value = "";
    }

    // Add task to DOM
    function addTaskToDOM(text, completed) {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = completed;
        checkbox.addEventListener("change", () => toggleTask(text));

        let span = document.createElement("span");
        span.textContent = text;
        if (completed) span.style.textDecoration = "line-through";

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.style.marginLeft = "10px";
        removeBtn.style.cursor = "pointer";
        removeBtn.addEventListener("click", () => removeTask(text));

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Save task to local storage
    function saveTask(text, completed) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ text, completed });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function toggleTask(text) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => {
            if (task.text === text) {
                task.completed = !task.completed;
            }
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }

    function removeTask(text) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(task => task.text !== text);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") addTask();
    });

    loadTasks();
});