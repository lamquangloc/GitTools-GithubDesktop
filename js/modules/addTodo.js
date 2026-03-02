export function addTodo(text) {
    const newTodo = {
        id: Date.now().toString(),  // String id duy nhất dựa trên timestamp
        text: text,                  // Nội dung todo
        completed: false,            // Mặc định chưa hoàn thành
        createdAt: Date.now()        // Timestamp lúc tạo
    };

    return newTodo;
}