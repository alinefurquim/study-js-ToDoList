// let database = [
//     {'task': 'Estudar JS', 'status': ''},
//     {'task': 'Netflix', 'status': 'checked'}
// ];

const getDatabase = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setDatabase = (database) => localStorage.setItem('todoList', JSON.stringify(database))

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
    const database = getDatabase();
    database.forEach((item, index) => createItem(item.task, item.status, index));
}

const insertItem = (event) => {
    const key = event.key;
    const text = event.target.value;
    if(key === 'Enter') {
       const database = getDatabase();
       database.push({'task': text, 'status': ''}); 
       setDatabase(database);
       render();
       event.target.value = '';
    }
}
const removeItem = (index) => {
    const database = getDatabase();
    database.splice (index, 1);
    setDatabase(database);
    render();
}

const renderItem = (index) => {
    const database = getDatabase();
    database[index].status = database[index].status === '' ? 'checked' : '';
    setDatabase(database);
    render();
}

const clickItem = (event) => {
    const element = event.target;
    if (element.type === 'button') {
        const index = element.dataset.index;
        removeItem(index);
    } else if (element.type === 'checkbox') {
        const index = element.dataset.index;
        renderItem(index);
    }
}

document.getElementById('newItem').addEventListener('keypress', insertItem);
document.getElementById('todoList').addEventListener('click', clickItem);

render();