/**
 * Module renderTodo - Hiển thị danh sách todo ra giao diện
 * @module renderTodo
 */

// Inject CSS animation một lần duy nhất khi module được load
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInSlide {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    #todo-list li {
        animation: fadeInSlide 0.3s ease forwards;
    }
    .empty-message {
        text-align: center;
        color: #999;
        padding: 40px 20px;
        font-style: italic;
    }
`;
document.head.appendChild(style);

/**
 * Hiển thị thông báo khi danh sách trống
 * @param {HTMLElement} todoList - Phần tử ul chứa danh sách todo
 */
function showEmptyState(todoList) {
    const emptyMsg = document.createElement('li');
    emptyMsg.className = 'empty-message';
    emptyMsg.textContent = 'Chưa có công việc nào. Hãy thêm công việc mới! 🎯';
    todoList.appendChild(emptyMsg);
}

/**
 * Render danh sách todos vào DOM
 * @param {Array} todos - Mảng các todo object cần hiển thị
 */
export function renderTodo(todos) {
    const todoList = document.getElementById('todo-list');

    // Xóa nội dung cũ trước khi render lại
    todoList.innerHTML = '';

    // Hiển thị thông báo nếu danh sách trống
    if (!todos || todos.length === 0) {
        showEmptyState(todoList);
        return;
    }

    // Duyệt qua từng todo và tạo phần tử HTML
    todos.forEach((todo, index) => {
        const li = document.createElement('li');

        // Thêm hiệu ứng animation delay cho từng item
        li.style.animationDelay = `${index * 0.05}s`;
        li.style.opacity = '0';

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
