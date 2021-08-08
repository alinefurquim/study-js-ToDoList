let database = [
    {'task': 'Estudar JS', 'status': ''},
    {'task': 'Netflix', 'status': 'checked'}
]

const createItem = (task, status, index) => {
    const item = document.createElement('label');
    item.classList.add('todo-item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${index}>
        <div>${task}</div>
        <input type="button" value="x" data-indice=${index}>
    `;
    
    document.getElementById('todoList').appendChild(item);
}

const taskClean = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const render = () => {
    taskClean();
    database.forEach((item, index) => createItem(item.task, item.status, index));
}

const insertItem = (event) => {
    const screen = event.key;
    const text = event.target.value;
    if(screen === 'Enter') {
       database.push({'task': text, 'status': ''}); 
       render();
    }
}

const clickItem = (event) => {
    const element = event.target;
    console.log (element)
}

document.getElementById('newItem').addEventListener('keypress', insertItem);
document.getElementById('todoList').addEventListener('click', clickItem);

render();