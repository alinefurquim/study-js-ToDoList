const createItem = (task, status='') => {
    const item = document.createElement('label');
    item.classList.add('todo-item');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${task}</div>
        <input type="button" value="x">
    `;
    
    document.getElementById('todoList').appendChild(item);
}