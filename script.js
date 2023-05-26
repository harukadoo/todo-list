const addBtn = document.querySelector('.btn-primary');
addBtn.addEventListener('click', addTodo);


const todoList = [];

const table = document.getElementById('todoTable');

function clearList() {
    const tableRows = table.getElementsByTagName('tr');

    for (let i = tableRows.length - 1; i > 0; i--) {
        table.removeChild(tableRows[i]);
    }
}

function renderTodo() {
    clearList();

    todoList.forEach((todo, index) => {
        const row = document.createElement('tr');

        const cell1 = document.createElement('td');
        row.appendChild(cell1);
        cell1.innerHTML = index + 1;

        const cell2 = document.createElement('td');
        row.appendChild(cell2);
        cell2.innerHTML = todo;

        const cell3 = document.createElement('td');
        row.appendChild(cell3);

        const editBtn = document.createElement('button');
        editBtn.className = 'btn btn-sm btn-primary';

        editBtn.innerText = 'edit';
        cell3.appendChild(editBtn);

        editBtn.addEventListener('click', () => editTodo(index));


        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-sm btn-danger ml-2';
        deleteBtn.innerText = 'delete'

        cell3.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => deleteTodo(index));
        

        table.appendChild(row);

    });

}


function addTodo() {
    const input = document.getElementById('todoInput');
    const inputValue = input.value;


    if (inputValue !== '') {
        todoList.push(inputValue);
        renderTodo()
    }

    input.value = '';
}



function editTodo(index) {
    const newValue = prompt('new value');
    todoList.splice(index, 1, newValue);
    renderTodo()
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodo();
}

