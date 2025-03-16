let tasks = [];
let currentId = 1;

// Create
function addTask(name, description) {
    tasks.push({ id: currentId++, name, description });
}

// Read
function getAllTasks() {
    return tasks;
}

// Update
function updateTask(id, newName, newDescription) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], name: newName, description: newDescription };
    }
}

// Delete
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Example usage
addTask("Task 1", "Description 1");
console.log(getAllTasks());
updateTask(1, "Updated Task 1", "Updated Description 1");
console.log(getAllTasks());
deleteTask(1);
console.log(getAllTasks());