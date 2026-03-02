// Storage Todo Module
// Feature: Add utility functions (clearTodos, getTodoCount)

const STORAGE_KEY = 'todolist';

/**
 * Kiểm tra localStorage có khả dụng không
 */
function isLocalStorageAvailable() {
    try {
        const testKey = '__storage_test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch {
        return false;
    }
}

/**
 * Lưu danh sách todos vào localStorage
 * @param {Array} todos
 */
export function saveTodos(todos) {
    if (!isLocalStorageAvailable()) {
        console.error('localStorage is not available');
        return false;
    }

    try {
        const json = JSON.stringify(todos);
        localStorage.setItem(STORAGE_KEY, json);
        return true;
    } catch (error) {
        console.error('Save todos error:', error);
        return false;
    }
}

/**
 * Lấy danh sách todos từ localStorage
 * @returns {Array}
 */
export function loadTodos() {
    if (!isLocalStorageAvailable()) {
        return [];
    }

    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Load todos error:', error);
        return [];
    }
}

/**
 * Xóa toàn bộ todos khỏi localStorage
 * @returns {boolean}
 */
export function clearTodos() {
    if (!isLocalStorageAvailable()) {
        return false;
    }

    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch (error) {
        console.error('Clear todos error:', error);
        return false;
    }
}

/**
 * Lấy số lượng todo hiện tại
 * @returns {number}
 */
export function getTodoCount() {
    const todos = loadTodos();
    return todos.length;
}