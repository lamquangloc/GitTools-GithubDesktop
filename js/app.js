// Main Application File
// File này sẽ được Team Lead hoàn thiện sau khi các module đã xong

import { addTodo } from './modules/addTodo.js';
import { deleteTodo } from './modules/deleteTodo.js';
import { filterTodo } from './modules/filterTodo.js';
import { renderTodo } from './modules/renderTodo.js';
import { saveTodos, loadTodos } from './modules/storageTodo.js';
import { initDarkMode, toggleDarkMode } from './modules/darkMode.js';

// State management
let todos = [];
let currentFilter = 'all';

// Initialize app
function init() {
    // Load todos from localStorage
    todos = loadTodos();
    renderTodo(todos);

    // Init Dark Mode
    initDarkMode();

    // Attach event listeners
    attachEventListeners();
}

// Attach event listeners
function attachEventListeners() {
    // Dark mode toggle
    const darkModeBtn = document.getElementById('dark-mode-btn');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleDarkMode);
    }

    // Add todo
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');

    addBtn.addEventListener('click', handleAddTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddTodo();
    });

    // Filter todos
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // Delete and toggle (event delegation)
    const todoList = document.getElementById('todo-list');
    todoList.addEventListener('click', handleTodoActions);
}

// Handle add todo
function handleAddTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();

    if (!text) return;

    const newTodo = addTodo(text);
    todos.push(newTodo);

    saveTodos(todos);
    renderFilteredTodos();

    input.value = '';
}

// Handle delete and toggle
function handleTodoActions(e) {
    const id = e.target.dataset.id;

    // Delete todo
    if (e.target.classList.contains('delete-btn')) {
        todos = deleteTodo(todos, id);
        saveTodos(todos);
        renderFilteredTodos();
    }

    // Toggle completed
    if (e.target.type === 'checkbox') {
        todos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos(todos);
        renderFilteredTodos();
    }
}

// Handle filter
function handleFilter(e) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Update current filter
    currentFilter = e.target.dataset.filter;
    renderFilteredTodos();
}

// Render filtered todos
function renderFilteredTodos() {
    const filtered = filterTodo(todos, currentFilter);
    renderTodo(filtered);
}

// Start app
init();
