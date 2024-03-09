function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    if (taskInput === "") {
        alert("Please enter a task!");
    } else {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.classList.add("task-item");

        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "taskStatus";
        radio.onclick = function () {
            if (this.checked) {
                li.classList.toggle("completed");
            }
        };

        var taskText = document.createElement("span");
        taskText.textContent = taskInput;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function () {
            ul.removeChild(li);
        };

        li.appendChild(radio);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        ul.appendChild(li);
        document.getElementById("taskInput").value = "";
    }
}