// Dark Mode Module
// Người phụ trách: [Tên thành viên]
// Chức năng: Xử lý giao diện sáng/tối (Dark Mode)

const THEME_STORAGE_KEY = 'todolist_theme';

/**
 * Khởi tạo giao diện ban đầu khi load trang
 * Hàm này sẽ kiểm tra localStorage xem người dùng đã chọn theme gì trước đó
 */
export function initDarkMode() {
    // TODO: Implement logic khởi tạo Dark Mode
    // 1. Kiểm tra trong localStorage xem có lưu THEME_STORAGE_KEY không
    // 2. Nếu có và là 'dark', thì thêm class 'dark-mode' vào thẻ <body>
    // 3. (Tùy chọn) Cập nhật icon/text của nút chuyển đổi trạng thái

}

/**
 * Hàm xử lý khi người dùng bấm nút chuyển đổi Dark/Light mode
 */
export function toggleDarkMode() {
    // TODO: Implement logic chuyển đổi Dark Mode
    // 1. Toggle (thêm/bớt) class 'dark-mode' ở thẻ <body> (dùng document.body.classList.toggle)
    // 2. Kiểm tra xem <body> hiện tại có class 'dark-mode' hay không
    // 3. Lưu trạng thái mới vào localStorage ('dark' hoặc 'light') sử dụng THEME_STORAGE_KEY
    // 4. (Tùy chọn) Đổi icon/text của nút chuyển đổi cho phù hợp

}
