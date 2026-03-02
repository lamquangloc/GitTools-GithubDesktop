# GitTools-GithubDesktop

## 📁 Cấu trúc dự án
```
todolist/
├── index.html              # Giao diện chính
├── css/
│   └── style.css          # Styles
└── js/
    ├── app.js             # File điều phối chính
    └── modules/
        ├── addTodo.js     # Module thêm todo
        ├── deleteTodo.js  # Module xóa todo
        ├── filterTodo.js  # Module lọc todo
        ├── renderTodo.js  # Module hiển thị todo
        └── storageTodo.js # Module lưu trữ
```

## 👥 Phân công công việc

| Người | Module | Branch | Tên Github |
|-------|--------|--------|------------|
| Lâm Quang Lộc (leader) |  | main,develop | LamQuangLoc-2280618505 |
| Đào Nhật Cường | addTodo.js | feature/add-todo | Dex-NCuong |
| Hoàng Gia Bảo | deleteTodo.js | feature/delete-todo | hoangbao1265 |
| Nguyễn Hữu Tịnh | filterTodo.js | feature/filter-todo | Nguyễn Hữu Tịnh |
| Phạm Tùng Dương | renderTodo.js | feature/render-todo | PTDuong48 |
| Phạm Thanh Tuấn | storageTodo.js | feature/storage-todo | nhoctuan507 |
| Huỳnh Trung Hậu | darkMode.js | feature/darkmode | NerdKan |
## 📝 Quy ước code

### 1. Cấu trúc dữ liệu Todo
```javascript
const todo = {
    id: 'unique-id',           // String hoặc Number
    text: 'Nội dung todo',     // String
    completed: false,          // Boolean
    createdAt: Date.now()      // Timestamp
};
```

### 2. Tên hàm và export

#### addTodo.js
```javascript
export function addTodo(text) {
    // Trả về todo object mới
    return newTodo;
}
```

#### deleteTodo.js
```javascript
export function deleteTodo(todos, id) {
    // Trả về mảng todos sau khi xóa
    return updatedTodos;
}
```

#### filterTodo.js
```javascript
export function filterTodo(todos, filter) {
    // filter: 'all' | 'active' | 'completed'
    // Trả về mảng todos đã lọc
    return filteredTodos;
}
```

#### renderTodo.js
```javascript
export function renderTodo(todos) {
    // Render todos vào DOM
    // Không return gì
}
```

#### storageTodo.js
```javascript
export function saveTodos(todos) {
    // Lưu vào localStorage
}

export function loadTodos() {
    // Trả về mảng todos từ localStorage
    return todos;
}
```

## 🔧 Quy trình làm việc

1. **Clone repo và tạo branch**
   ```bash
   git clone <repo-url>
   cd todolist
   git checkout -b feature/ten-chuc-nang
   ```

2. **Code module của bạn** theo đúng quy ước trên

3. **Test thử function**
   - Tạo file test đơn giản hoặc dùng console.log

4. **Commit và push**
   ```bash
   git add .
   git commit -m "feat: implement addTodo module"
   git push origin feature/ten-chuc-nang
   ```

5. **Tạo Pull Request** để review

## ⚠️ Lưu ý quan trọng

- ✅ **CHỈ sửa file module của bạn**
- ❌ **KHÔNG sửa** `index.html`, `app.js`, `style.css` (trừ khi được phép)
- ✅ **Tuân thủ cấu trúc dữ liệu** đã quy ước
- ✅ **Đặt tên hàm đúng** như trong README
- ✅ **Export function** để app.js có thể import

## 🚀 Chạy dự án

1. Mở file `index.html` bằng trình duyệt
2. Hoặc dùng Live Server (VS Code extension)

## 📞 Liên hệ

Nếu có thắc mắc, hỏi trong group chat!
