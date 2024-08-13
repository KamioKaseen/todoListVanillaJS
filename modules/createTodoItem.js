import createElement from "../utils/createElement.js";

function createTodoItem(text, isCompleted = false, id) {
    const todoItemText = createElement('p', { class: 'todo-list__text' }, text);
    const todoItem = createElement('li', { class: 'todo-list__item', 'data-id': id });

    const todoItemTextContainer = createElement('div', { class: 'todo-list__text-container' });
    const todoListButtons = createElement('div', { class: 'todo-list__buttons' });
    const checkButton = createElement('button', { class: 'todo-list__check' }, '✔');
    const deleteButton = createElement('button', { class: 'todo-list__delete' }, '✘');

    if (isCompleted) {
        todoItemTextContainer.classList.add('completed');
        checkButton.classList.add('completed');
    }

    todoItemTextContainer.appendChild(todoItemText);
    todoItem.appendChild(todoItemTextContainer);
    todoItem.appendChild(todoListButtons);
    todoListButtons.appendChild(checkButton);
    todoListButtons.appendChild(deleteButton);

    return { todoItem, checkButton, deleteButton, todoItemTextContainer };
}

export default createTodoItem;