import createTodoItem from "./createTodoItem.js";
import { deleteTodo } from "./todoActions.js";
import { toggleComplete } from "./todoActions.js";
import { deleteButtonVisibility } from "./todoActions.js";

export function saveTodo(todo) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.querySelector('.todo-list');

    todos.forEach(todo => {
        const { todoItem, checkButton, deleteButton, todoItemTextContainer } = createTodoItem(todo.text, todo.completed, todo.id);

        todoList.appendChild(todoItem);

        checkButton.addEventListener('click', () => toggleComplete(todoItem, todoItemTextContainer, checkButton));
        deleteButton.addEventListener('click', () => deleteTodo(todo.id));
    });

    deleteButtonVisibility();
}

export function updateTodoInStorage(taskId, isCompleted) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todo = todos.find(todo => todo.id === taskId);

    if (todo) {
        todo.completed = isCompleted;
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}

export function removeTodoFromStorage(taskId) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo.id !== taskId);
    localStorage.setItem('todos', JSON.stringify(todos));
}