const todoButton = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

function addList(e) {
    e.preventDefault();
    
    if (todoInput.value != "") { 
        //create div element w/ class="todo"
        const  todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //create li item w/ class="todo-item"
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerHTML = todoInput.value;
        todoDiv.appendChild(newTodo);
        //create button w/ class = "done-btn"
        const doneButton = document.createElement('button');
        doneButton.classList.add('done-btn');
        doneButton.innerHTML = 'Done';
        todoDiv.appendChild(doneButton);
        //create button w/ class del-btn
        const delButton = document.createElement('button');
        delButton.classList.add('del-btn');
        delButton.innerHTML = 'Del';
        todoDiv.appendChild(delButton);
    
        todoList.appendChild(todoDiv);
        todoInput.value = "";
    }
}
todoButton.addEventListener('click', addList); //НОВО

function checkItem(e) {
    //select element on clicking it
    const item = e.target;
    if (item.classList[0] === 'done-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    if (item.classList[0] === "del-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
}

todoList.addEventListener('click', checkItem);
