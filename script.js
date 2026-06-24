const tableBody = document.getElementById("tableBody");

function addTask() {
    const task = document.getElementById("taskInput").value.trim();
    const category = document.getElementById("categoryInput").value;
    const priority = document.getElementById("priorityInput").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${task}</td>
        <td>${category}</td>
        <td class="${priority.toLowerCase()}">${priority}</td>
        <td>Pending</td>
        <td>
            <button onclick="markDone(this)">Done</button>
            <button onclick="deleteTask(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);

    document.getElementById("taskInput").value = "";

    saveData();
}

function markDone(button) {
    const row = button.parentElement.parentElement;

    row.cells[3].innerHTML = "✓ Done";
    row.cells[3].className = "done";

    saveData();
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
    saveData();
}

function saveData() {
    localStorage.setItem("skillTrackerData", tableBody.innerHTML);
}

function showData() {
    tableBody.innerHTML =
        localStorage.getItem("skillTrackerData") || "";
}

showData();
