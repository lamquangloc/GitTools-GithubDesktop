// Delete Todo Module
// Người phụ trách: Hoàng Gia Bảo
// Chức năng: Xóa todo khỏi danh sách

/**
 * Xóa todo theo ID
 * @param {Array} todos - Mảng todos hiện tại
 * @param {string} id - ID của todo cần xóa
 * @returns {Array} Mảng todos sau khi đã xóa
 */
export function deleteTodo(todos, id) {
    // Validate inputs
    if (!Array.isArray(todos)) {
        console.error('deleteTodo: todos phải là một mảng');
        return [];
    }

    if (!id) {
        console.error('deleteTodo: id không được để trống');
        return todos;
    }

    // Tìm và xóa todo có id tương ứng
    // Sử dụng filter để tạo mảng mới không chứa todo đã xóa
    const updatedTodos = todos.filter(todo => todo.id !== id);

    // Log thông báo nếu không tìm thấy todo để xóa
    if (updatedTodos.length === todos.length) {
        console.warn(`deleteTodo: Không tìm thấy todo với id: ${id}`);
    }

    return updatedTodos;
}


/**
 * Xóa nhiều todo theo danh sách ID
 * @param {Array} todos - Mảng todos hiện tại
 * @param {Array} ids - Mảng các ID của todo cần xóa
 * @returns {Array} Mảng todos sau khi đã xóa
 */
export function deleteMultipleTodos(todos, ids) {
    // Validate inputs
    if (!Array.isArray(todos)) {
        console.error('deleteMultipleTodos: todos phải là một mảng');
        return [];
    }

    if (!Array.isArray(ids)) {
        console.error('deleteMultipleTodos: ids phải là một mảng');
        return todos;
    }

    // Lọc ra các todo không nằm trong danh sách cần xóa
    return todos.filter(todo => !ids.includes(todo.id));
}

/**
 * Xóa tất cả todo đã hoàn thành
 * @param {Array} todos - Mảng todos hiện tại
 * @returns {Array} Mảng todos chỉ chứa các todo chưa hoàn thành
 */
export function deleteCompletedTodos(todos) {
    // Validate input
    if (!Array.isArray(todos)) {
        console.error('deleteCompletedTodos: todos phải là một mảng');
        return [];
    }

    // Chỉ giữ lại các todo chưa hoàn thành
    return todos.filter(todo => !todo.completed);
}