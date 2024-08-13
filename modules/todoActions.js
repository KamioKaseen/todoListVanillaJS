import createTodoItem from "./createTodoItem.js";
import { saveTodo } from "./localStorageActions.js";
import { removeTodoFromStorage } from "./localStorageActions.js";
import { updateTodoInStorage } from "./localStorageActions.js";
import generateUniqueId from "../utils/generateUniqueId.js";
import validateTaskText from "../utils/validateTask.js";

export function addTodo(event) {
    event.preventDefault();

    const input = document.querySelector('.todo-form__input');
    const taskText = input.value.trim();
    const todoList = document.querySelector('.todo-list');
    const uniqueId = generateUniqueId();

    if (!validateTaskText(taskText)) return;

    const { todoItem, checkButton, deleteButton, todoItemTextContainer } = createTodoItem(taskText, false, uniqueId);

    todoList.appendChild(todoItem);

    saveTodo({
        id: uniqueId,
        text: taskText,
        completed: false
    });

    checkButton.addEventListener('click', () => toggleComplete(todoItem, todoItemTextContainer, checkButton));
    deleteButton.addEventListener('click', () => deleteTodo(uniqueId));

    input.value = '';
}

export function toggleComplete(todoItem, textContainer, checkButton) {
    const isCompleted = textContainer.classList.contains('completed');
    textContainer.classList.toggle('completed', !isCompleted);
    checkButton.classList.toggle('completed', !isCompleted);

    const taskId = todoItem.getAttribute('data-id');
    updateTodoInStorage(taskId, !isCompleted);
}

export function deleteTodo(taskId) {
    const todoItem = document.querySelector(`li[data-id='${taskId}']`);
    if (todoItem) {
        todoItem.remove();
    }
    removeTodoFromStorage(taskId);
}

export function deleteAllTodos() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
    localStorage.removeItem('todos');
}