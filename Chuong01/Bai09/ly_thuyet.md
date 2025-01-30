Nguyên tắc đặt tên hàm trong JavaScript:

---

### 1. **Tên hàm nên rõ ràng, thể hiện hành động và dữ liệu**
```javascript
// Tốt: Thể hiện hành động "create" và dữ liệu "user"
function createUser(userData) { ... }

// Xấu: Tên không rõ hành động/dữ liệu
function userCreator(data) { ... }
```

---

### 2. **Bắt đầu bằng động từ, theo sau là danh từ**
```javascript
// Tốt: Động từ "update" + danh từ "post"
function updatePost(postId, newContent) { ... }

// Xấu: Động từ đặt sai vị trí
function postUpdater(postId, newContent) { ... }
```

---

### 3. **Tránh các liên từ thừa**
```javascript
// Tốt: Không dùng "a/an"
function deleteAccount(userId) { ... }

// Xấu: Thừa liên từ
function deleteAnAccount(userId) { ... }
```

---

### 4. **Dùng số ít/số nhiều để thể hiện số lượng**
```javascript
// Tác động lên 1 đối tượng
function getProduct(productId) { ... }

// Tác động lên nhiều đối tượng
function getProducts() { ... }
```

---

### 5. **Thêm thông tin nếu tên chưa rõ**
```javascript
// Tốt: Làm rõ hành động "check complete"
function checkCompleteTodo(todoId) { ... }

// Xấu: Không rõ "check" cái gì
function checkTodo(todoId) { ... }
```

---

### 6. **Động từ đứng trước danh từ**
```javascript
// Tốt: "calculate" (động từ) + "totalPrice" (danh từ)
function calculateTotalPrice(items) { ... }

// Xấu: Đảo ngược thứ tự
function totalPriceCalculate(items) { ... }
```

---

### 7. **Sử dụng tiền tố nhất quán**
```javascript
// Tốt: Dùng "get" xuyên suốt
function getTodos() { ... }
function getUser(userId) { ... }

// Xấu: Tiền tố không nhất quán
function getTodos() { ... }
function fetchUser(userId) { ... } // "fetch" khác với "get"
```

---

### 8. **Duy trì logic đặt tên trong toàn dự án**
```javascript
// Tốt: Dùng "fetch" cho tất cả hàm gọi API
function fetchData(endpoint) { ... }
function fetchUserDetails(userId) { ... }

// Xấu: Lẫn lộn giữa "fetch" và "retrieve"
function fetchData(endpoint) { ... }
function retrieveUserDetails(userId) { ... }
```

---

### 9. **Tiền tố phổ biến: `get`, `create`, `update`, `delete`**
```javascript
function createOrder(orderData) { ... }
function updateOrderStatus(orderId, status) { ... }
function deleteOrder(orderId) { ... }
```

---

### 10. **Đọc to tên hàm để kiểm tra tính rõ ràng**
```javascript
// Tốt: Tên hàm tự giải thích
function validateEmailInput(email) { ... } // Rõ ràng khi đọc

// Xấu: Tên mơ hồ
function checkInput(input) { ... } // Không biết "check" gì?
```

---

### 11. **Truyền tải đúng ý nghĩa và nhất quán**
```javascript
// Tốt: Tên hàm thể hiện chính xác hành động
function sendMessage(message) { ... }

// Xấu: Tên không nhất quán
function msgSend(message) { ... } // Sai thứ tự động từ
```

---
