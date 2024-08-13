import createElement from '../utils/createElement.js';
import { addTodo, deleteAllTodos } from './todoActions.js';
import { loadTodos } from './localStorageActions.js';

export function render() {
  const container = createElement('main', { class: 'container' });
  const title = createElement('h1', {class: 'title'}, 'To-do List');

  const form = createElement('form', { class: 'todo-form' });
  const input = createElement('input', { type: 'text', class: 'todo-form__input', placeholder: 'Добавить задачу' });
  const addButton = createElement('button', { type: 'submit', class: 'todo-form__button' }, '➕');

  const todoList = createElement('ul', { class: 'todo-list' });
  const deleteButton = createElement('button', { class: 'delete-todos' }, 'Удалить все задачи');

  form.appendChild(input);
  form.appendChild(addButton);
  container.appendChild(title);
  container.appendChild(form);
  container.appendChild(deleteButton);
  container.appendChild(todoList);
  document.body.appendChild(container);
  
  form.addEventListener('submit', addTodo);
  deleteButton.addEventListener('click', deleteAllTodos);

  loadTodos();
}
