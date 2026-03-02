/**
 * Module renderTodo - Hiển thị danh sách todo ra giao diện
 * @module renderTodo
 */

/**
 * Render danh sách todos vào DOM
 * @param {Array} todos - Mảng các todo object cần hiển thị
 */
export function renderTodo(todos) {
    const todoList = document.getElementById('todo-list');

    // Xóa nội dung cũ trước khi render lại
    todoList.innerHTML = '';

    // Duyệt qua từng todo và tạo phần tử HTML
    todos.forEach(todo => {
        const li = document.createElement('li');

        // Tạo checkbox để đánh dấu hoàn thành
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.dataset.id = todo.id;

        // Tạo span hiển thị nội dung todo
        const span = document.createElement('span');
        span.textContent = todo.text;
        if (todo.completed) {
            span.classList.add('completed');
        }

        // Tạo nút xóa
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Xóa';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.dataset.id = todo.id;

        // Thêm các phần tử vào li
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        // Thêm li vào danh sách
        todoList.appendChild(li);
    });
}
