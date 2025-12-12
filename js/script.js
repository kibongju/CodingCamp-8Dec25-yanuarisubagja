
let todo = [];

function addTodo() {
    const inputTodo = document.getElementById('todo-Input');
    const todoDate = document.getElementById('todo-Date');

    console.log("inputvalue", inputTodo.value);
    console.log("todoDate", todoDate.value);

    if (inputTodo.value === "" || todoDate.value === "") {
        alert("Please fill in all fields");
    } else {
        const todoObj = {
            task: inputTodo.value,
            date: todoDate.value,
        }

        todo.push(todoObj);

        renderTodo();
        inputTodo.value = "";
        todoDate.value = "";
    }
}

function resetTodo() {
    todo = [];
    renderTodo();
}

function renderTodo() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = "";
    todo.forEach((todoObj, index) => {
        const li = document.createElement('li');
        li.textContent = `${todoObj.task} - ${todoObj.date}`;
        todoList.appendChild(li);
    });
}


