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
    // Đọc theme lưu trong localStorage
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    // Nếu user đã lưu là 'dark' thì bật, nếu lưu là 'light' thì tắt.
    // Nếu chưa lưu, tôn trọng prefers-color-scheme của hệ thống nếu có.
    let useDark = false;
    if (savedTheme === 'dark') useDark = true;
    else if (savedTheme === 'light') useDark = false;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) useDark = true;

    if (useDark) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');

    // Cập nhật nút và log để debug
    updateThemeButton(useDark);
    console.log('initDarkMode:', useDark ? 'dark' : 'light');
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
    console.log('toggleDarkMode called');

    // Toggle class trên body
    const isNowDark = document.body.classList.toggle('dark-mode');

    // Lưu trạng thái
    try {
        localStorage.setItem(THEME_STORAGE_KEY, isNowDark ? 'dark' : 'light');
    } catch (e) {
        console.warn('Could not access localStorage to save theme', e);
    }

    // Cập nhật nút
    updateThemeButton(isNowDark);
    console.log('toggleDarkMode ->', isNowDark ? 'dark' : 'light');
}

/**
 * Cập nhật icon của nút theme toggle
 * @param {boolean} isDarkMode - true nếu đang ở dark mode, false nếu light mode
 */
function updateThemeButton(isDarkMode) {
    const darkModeBtn = document.getElementById('dark-mode-btn');
    if (darkModeBtn) {
        darkModeBtn.textContent = isDarkMode ? '☀️' : '🌙';
        darkModeBtn.title = isDarkMode ? 'Chuyển sang Light Mode' : 'Chuyển sang Dark Mode';
        darkModeBtn.setAttribute('aria-pressed', isDarkMode ? 'true' : 'false');
    }
}
