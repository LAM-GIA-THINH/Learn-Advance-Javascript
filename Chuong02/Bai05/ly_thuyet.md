**Lý thuyết và ví dụ chi tiết về **destructuring đối tượng (object destructuring)** trong JavaScript:**

---

### **1. Mục đích:**
Destructuring cho phép bạn "nhặt ra" các thuộc tính (properties) từ một đối tượng và gán chúng vào các biến riêng biệt. Điều này giúp code ngắn gọn và dễ đọc hơn, tránh lặp lại tham chiếu đến đối tượng nhiều lần.

---

### **2. Cú pháp cơ bản:**

- **Lý thuyết:**
  - Lấy đối tượng muốn destructure, sau đó đặt bằng một cặp dấu ngoặc nhọn `{}`.
  - Tên biến phải **trùng với tên thuộc tính** trong đối tượng.
  - Có thể sử dụng `const`, `let` hoặc `var` để khai báo biến.

- **Ví dụ:**
  ```javascript
  const user = {
      username: "john_doe",
      email: "john@example.com",
      age: 30
  };

  // Destructuring
  const { username, email } = user;
  console.log(username); // "john_doe"
  console.log(email);    // "john@example.com"

  // Có thể thêm biến mới
  const { age } = user;
  console.log(age); // 30
  ```

---

### **3. Destructuring đối tượng lồng nhau (nested objects):**

- **Lý thuyết:**
  - Đối tượng lồng nhau có thể được destructure bằng:
    - **Cách 1:** Truy cập đối tượng lồng nhau trước, sau đó destructure.
    - **Cách 2:** Destructure trực tiếp trong cùng một câu lệnh.

- **Ví dụ:**
  ```javascript
  const user = {
      name: "Alice",
      details: {
          title: "Software Engineer",
          location: "New York"
      }
  };

  // Cách 1: Truy cập từng đối tượng
  const { details } = user;
  const { title } = details;
  console.log(title); // "Software Engineer"

  // Cách 2: Destructure trực tiếp
  const { name, details: { title, location } } = user;
  console.log(name);     // "Alice"
  console.log(location); // "New York"
  ```

---

### **4. Destructuring trong tham số hàm (function parameters):**

- **Lý thuyết:**
  - Có thể destructure trực tiếp trong danh sách tham số của hàm để truy cập nhanh các thuộc tính cần thiết.
  - Điều này giúp tránh việc tham chiếu đối tượng nhiều lần trong thân hàm.

- **Ví dụ:**
  ```javascript
  const user = {
      name: "Bob",
      details: {
          title: "Designer",
          experience: 5
      }
  };

  // Destructuring trong tham số hàm
  function displayUserBio({ name, details: { title, experience } }) {
      console.log(`${name} là một ${title} với ${experience} năm kinh nghiệm.`);
  }

  displayUserBio(user);
  // "Bob là một Designer với 5 năm kinh nghiệm."
  ```

---

### **5. Lợi ích:**

- **Code dễ đọc và ngắn gọn hơn**:
  ```javascript
  // Thay vì:
  console.log(user.details.title);
  console.log(user.details.location);

  // Destructuring:
  const { details: { title, location } } = user;
  console.log(title, location);
  ```

- **Chỉ lấy những thuộc tính cần thiết**:
  ```javascript
  const user = {
      name: "Charlie",
      email: "charlie@example.com",
      phone: "123456789"
  };

  const { email } = user;
  console.log(email); // "charlie@example.com"
  ```

- **Linh hoạt và tiện lợi trong tham số hàm**:
  ```javascript
  const user = { name: "Diana", age: 25 };

  // Hàm nhận đối tượng và destructure trong tham số
  function greet({ name, age }) {
      console.log(`Chào ${name}, bạn ${age} tuổi!`);
  }

  greet(user); // "Chào Diana, bạn 25 tuổi!"
  ```

---

### **6. Lưu ý:**

- **Gán giá trị mặc định:**
  - Có thể gán giá trị mặc định khi destructure, trong trường hợp thuộc tính không tồn tại.
  ```javascript
  const user = { name: "Emma" };

  const { name, email = "Không có email" } = user;
  console.log(email); // "Không có email"
  ```

- **Đổi tên biến khi destructure:**
  - Dùng dấu hai chấm `:` để đổi tên biến.
  ```javascript
  const user = { username: "admin" };

  const { username: userLogin } = user;
  console.log(userLogin); // "admin"
  ```

---

### **Tóm lại:**
Object destructuring là một tính năng mạnh mẽ giúp bạn làm việc với dữ liệu đối tượng một cách hiệu quả và dễ đọc hơn. Sử dụng các cú pháp này sẽ giúp code của bạn ngắn gọn, rõ ràng và dễ bảo trì hơn.