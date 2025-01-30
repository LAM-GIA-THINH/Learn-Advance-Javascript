Dưới đây là phần lý thuyết kèm ví dụ minh họa chi tiết cho từng khái niệm:

---

### **Arrow Function (Hàm mũi tên)**
*Là cách viết hàm ngắn gọn, được giới thiệu trong ES6.*

#### Ví dụ:
1. **Cú pháp cơ bản**:
    ```javascript
    // Hàm truyền thống
    function sum(a, b) {
      return a + b;
    }

    // Arrow function tương đương
    const sum = (a, b) => a + b;
    ```

2. **Bỏ dấu ngoặc đơn với một tham số**:
    ```javascript
    // Hàm truyền thống
    function double(n) {
      return n * 2;
    }

    // Arrow function (bỏ ngoặc đơn)
    const double = n => n * 2;
    ```

3. **Implicit return (trả về ngầm định)**:
    ```javascript
    // Không dùng implicit return
    const greet = (name) => {
      return `Hello, ${name}!`;
    };

    // Dùng implicit return (bỏ {} và `return`)
    const greet = name => `Hello, ${name}!`;
    ```

4. **Sử dụng trong xử lý mảng**:
    ```javascript
    const numbers = [1, 2, 3];
    
    // Arrow function làm callback cho map()
    const squared = numbers.map(num => num * num); // [1, 4, 9]
    ```

5. **Luôn là hàm ẩn danh**:
    ```javascript
    // Arrow function không thể đặt tên trực tiếp
    const sayHello = () => console.log("Hello!"); // Phải gán vào biến
    ```

---

### **Callback Function (Hàm gọi lại)**
*Là hàm được truyền vào một hàm khác như tham số và được gọi sau khi hàm chứa nó thực thi.*

#### Ví dụ:
1. **Callback trong hàm bậc cao**:
    ```javascript
    // Hàm nhận callback làm tham số (higher-order function)
    function processArray(arr, callback) {
      const result = [];
      for (let item of arr) {
        result.push(callback(item));
      }
      return result;
    }

    // Sử dụng arrow function làm callback
    const output = processArray([1, 2, 3], item => item * 10); // [10, 20, 30]
    ```

2. **Callback trong xử lý bất đồng bộ**:
    ```javascript
    // setTimeout() nhận callback
    setTimeout(() => {
      console.log("Đây là callback được gọi sau 2 giây");
    }, 2000);
    ```

3. **Callback với phương thức mảng**:
    ```javascript
    const languages = ["JavaScript", "Python", "C++"];

    // Dùng arrow function làm callback cho filter()
    const shortNames = languages.filter(lang => lang.length <= 3); // ["C++"]
    ```

4. **Callback trong sự kiện**:
    ```javascript
    // Thêm callback cho sự kiện click
    button.addEventListener("click", () => {
      console.log("Button đã được click!");
    });
    ```

5. **Callback với Promise**:
    ```javascript
    // Xử lý bất đồng bộ với Promise
    fetch("https://api.example.com/data")
      .then(response => response.json()) // Arrow function làm callback
      .then(data => console.log(data));
    ```

---

### **So sánh trực quan**
| Trường hợp       | Hàm thông thường                          | Arrow function                     |
|------------------|-------------------------------------------|------------------------------------|
| Khai báo hàm     | `function greet() { ... }`                | `const greet = () => { ... }`      |
| Một tham số      | `function (n) { ... }`                    | `n => { ... }`                     |
| Implicit return  | Không hỗ trợ                              | `() => "Hello"`                    |
| Callback ngắn    | `arr.map(function (x) { return x * 2 })`  | `arr.map(x => x * 2)`              |

---

**Lưu ý**:  
- Arrow function không có `this` riêng, nên tránh dùng trong phương thức của object hoặc sự kiện DOM nếu cần truy cập `this`.
- Callback function là nền tảng của lập trình bất đồng bộ trong JavaScript.