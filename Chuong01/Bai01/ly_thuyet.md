### **Mục đích của hàm**
Hàm giúp giảm lặp lại mã và làm cho chương trình dễ bảo trì, mở rộng hơn. Chúng cũng hỗ trợ tổ chức mã một cách rõ ràng và cho phép tái sử dụng.

**Ví dụ:**
```javascript
// Hàm tính tổng hai số
function add(a, b) {
    return a + b;
}

// Thay vì lặp lại logic, chỉ cần gọi hàm
console.log(add(3, 5)); // Output: 8
console.log(add(10, 20)); // Output: 30
```

---

### **Cấu trúc của hàm**
Hàm bao gồm:
1. **Tên hàm:** Để xác định hàm.  
2. **Tham số:** Nhận dữ liệu đầu vào.  
3. **Phần thân:** Chứa các dòng mã thực thi.

**Ví dụ:**
```javascript
// Hàm tính bình phương của một số
function square(number) {
    return number * number; // Phần thân hàm
}

console.log(square(4)); // Output: 16
console.log(square(7)); // Output: 49
```

---

### **Gọi hàm và truyền đối số**
Hàm nhận giá trị từ đối số khi gọi. Các giá trị này được gán cho tham số tương ứng.

**Ví dụ:**
```javascript
function greet(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Gọi hàm với các đối số khác nhau
greet("Alice", 25); // Output: Hello, Alice! You are 25 years old.
greet("Bob", 30);   // Output: Hello, Bob! You are 30 years old.

// Đối số thừa bị bỏ qua
greet("Charlie", 40, "extra"); // Output: Hello, Charlie! You are 40 years old.
```

---

### **Phạm vi (scope) của biến**
Phạm vi xác định nơi biến có thể được truy cập. Các biến cục bộ chỉ tồn tại bên trong hàm, trong khi biến toàn cục có thể được truy cập ở bất cứ đâu.

**Ví dụ:**
```javascript
let globalVar = "I am global"; // Biến toàn cục

function demoScope() {
    let localVar = "I am local"; // Biến cục bộ
    console.log(globalVar); // Có thể truy cập biến toàn cục
    console.log(localVar);  // Có thể truy cập biến cục bộ
}

demoScope();
// console.log(localVar); // Lỗi: localVar không được định nghĩa
```

---

### **Giá trị trả về (return values)**
Hàm có thể trả về kết quả để sử dụng ở nơi khác trong chương trình.

**Ví dụ:**
```javascript
function multiply(a, b) {
    return a * b; // Trả về tích của a và b
}

const result = multiply(5, 4); // Gán giá trị trả về cho biến
console.log(result); // Output: 20
```

Nếu không có `return`, hàm sẽ trả về `undefined`:
```javascript
function noReturn() {
    console.log("This function has no return statement");
}

console.log(noReturn()); // Output: undefined
```

---

### **Tái sử dụng**
Hàm giúp tránh lặp lại mã và dễ dàng áp dụng trong nhiều trường hợp khác nhau.

**Ví dụ:**
```javascript
function calculateArea(length, width) {
    return length * width;
}

// Gọi hàm với các đối số khác nhau
console.log(calculateArea(10, 5)); // Output: 50
console.log(calculateArea(7, 3));  // Output: 21
```

---

### **Ví dụ: Hàm ứng dụng trong ứng dụng chat**
Hàm có thể được sử dụng để quản lý tin nhắn trong ứng dụng chat.

**Ví dụ:**
```javascript
function sendUserMessage(username, message) {
    const formattedMessage = `[${username}]: ${message}`;
    console.log(formattedMessage);
}

// Gọi hàm để hiển thị các tin nhắn khác nhau
sendUserMessage("Alice", "Hi, how are you?");
// Output: [Alice]: Hi, how are you?
sendUserMessage("Bob", "I'm doing great, thanks!");
// Output: [Bob]: I'm doing great, thanks!
```

---

### **Ví dụ nâng cao: Ứng dụng thực tế**
Một ứng dụng chat có thể sử dụng nhiều hàm để xử lý nhiều tính năng.

**Ví dụ:**
```javascript
// Hàm định dạng tin nhắn
function formatMessage(username, message) {
    return `[${username}]: ${message}`;
}

// Hàm gửi tin nhắn
function sendMessage(username, message) {
    const formattedMessage = formatMessage(username, message);
    console.log(formattedMessage);
}

// Hàm nhận tin nhắn
function receiveMessage(username, message) {
    const formattedMessage = formatMessage(username, message);
    console.log(`New message received: ${formattedMessage}`);
}

// Sử dụng các hàm
sendMessage("Alice", "Hello!");
// Output: [Alice]: Hello!
receiveMessage("Bob", "Hi, Alice!");
// Output: New message received: [Bob]: Hi, Alice!
```

Hàm không chỉ giúp mã gọn gàng hơn mà còn hỗ trợ quản lý dữ liệu và hành động một cách rõ ràng, dễ bảo trì.