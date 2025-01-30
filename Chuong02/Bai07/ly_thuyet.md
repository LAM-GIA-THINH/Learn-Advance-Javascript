**Lý thuyết và ví dụ chi tiết về `Object.assign` và **Object Spread Operator** trong JavaScript:**

---

### **1. Mục đích:**
Cả `Object.assign` và **Object Spread Operator** (`...`) đều được sử dụng để **kết hợp các thuộc tính từ nhiều đối tượng** vào một đối tượng mới. Điều này hữu ích khi bạn muốn:

- Sao chép đối tượng.
- Thêm hoặc ghi đè thuộc tính vào đối tượng.
- Kết hợp nhiều đối tượng thành một đối tượng mới.

---

### **2. Cú pháp:**

#### **`Object.assign`:**
- **Cú pháp**:
  ```javascript
  Object.assign(target, ...sources)
  ```
  - `target`: Đối tượng đích để sao chép thuộc tính vào.
  - `sources`: Một hoặc nhiều đối tượng nguồn.

- **Ví dụ:**
  ```javascript
  const target = { a: 1 };
  const source1 = { b: 2 };
  const source2 = { c: 3 };

  const result = Object.assign(target, source1, source2);
  console.log(result); // { a: 1, b: 2, c: 3 }
  ```

#### **Object Spread Operator (`...`):**
- **Cú pháp**:
  ```javascript
  const newObject = { ...obj1, ...obj2 };
  ```
- **Ví dụ:**
  ```javascript
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };

  const result = { ...obj1, ...obj2 };
  console.log(result); // { a: 1, b: 2 }
  ```

---

### **3. Tính bất biến (Immutability):**

- **`Object.assign`:**
  - Nếu sử dụng đối tượng đích không rỗng, `Object.assign` sẽ **thay đổi đối tượng đích**.
  - Để đảm bảo tính bất biến, bạn cần sử dụng một đối tượng rỗng `{}` làm đối tượng đích.

  ```javascript
  const obj = { a: 1 };
  const updatedObj = Object.assign({}, obj, { b: 2 });

  console.log(updatedObj); // { a: 1, b: 2 }
  console.log(obj);        // { a: 1 } (không bị thay đổi)
  ```

- **Object Spread Operator:**
  - Luôn tạo ra một đối tượng mới mà không làm thay đổi đối tượng gốc.
  ```javascript
  const obj = { a: 1 };
  const updatedObj = { ...obj, b: 2 };

  console.log(updatedObj); // { a: 1, b: 2 }
  console.log(obj);        // { a: 1 } (không bị thay đổi)
  ```

---

### **4. Thứ tự quan trọng:**

- Nếu có các thuộc tính trùng lặp giữa các đối tượng, giá trị từ đối tượng **được kết hợp sau cùng** sẽ ghi đè giá trị trước đó.

- **Ví dụ:**
  ```javascript
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };

  const result1 = Object.assign({}, obj1, obj2);
  console.log(result1); // { a: 1, b: 3, c: 4 }

  const result2 = { ...obj1, ...obj2 };
  console.log(result2); // { a: 1, b: 3, c: 4 }
  ```

---

### **5. Sử dụng trong thực tế:**

#### **Tạo đối tượng mới dựa trên đối tượng cũ:**

- **`Object.assign`:**
  ```javascript
  const user = { name: "John", age: 25 };
  const updatedUser = Object.assign({}, user, { age: 26, city: "New York" });

  console.log(updatedUser); // { name: "John", age: 26, city: "New York" }
  ```

- **Object Spread Operator:**
  ```javascript
  const user = { name: "John", age: 25 };
  const updatedUser = { ...user, age: 26, city: "New York" };

  console.log(updatedUser); // { name: "John", age: 26, city: "New York" }
  ```

---

#### **Thiết lập thuộc tính mặc định:**

- **`Object.assign`:**
  ```javascript
  const defaults = { theme: "light", showSidebar: true };
  const userSettings = { theme: "dark" };

  const settings = Object.assign({}, defaults, userSettings);
  console.log(settings); // { theme: "dark", showSidebar: true }
  ```

- **Object Spread Operator:**
  ```javascript
  const defaults = { theme: "light", showSidebar: true };
  const userSettings = { theme: "dark" };

  const settings = { ...defaults, ...userSettings };
  console.log(settings); // { theme: "dark", showSidebar: true }
  ```

---

#### **Sao chép đối tượng:**

- **`Object.assign`:**
  ```javascript
  const obj = { a: 1, b: 2 };
  const copy = Object.assign({}, obj);

  console.log(copy); // { a: 1, b: 2 }
  ```

- **Object Spread Operator:**
  ```javascript
  const obj = { a: 1, b: 2 };
  const copy = { ...obj };

  console.log(copy); // { a: 1, b: 2 }
  ```

---

### **6. Lời khuyên:**

- Nên sử dụng **Object Spread Operator** thay vì `Object.assign`:
  - Dễ đọc và trực quan hơn.
  - Luôn đảm bảo tính bất biến.

- Chỉ sử dụng `Object.assign` trong các trường hợp đặc biệt khi bạn cần xử lý cụ thể với các tham số động hoặc phải làm việc với môi trường không hỗ trợ ES6+.

---

### **7. Ví dụ tổng hợp:**

```javascript
const defaultUser = {
    name: "",
    email: "",
    phone: "",
    isAdmin: false,
};

const newUser = {
    name: "Alice",
    email: "alice@example.com",
};

// Object.assign
const createdUser1 = Object.assign({}, defaultUser, newUser, { isAdmin: true });

// Object Spread
const createdUser2 = { ...defaultUser, ...newUser, isAdmin: true };

console.log(createdUser1); // { name: "Alice", email: "alice@example.com", phone: "", isAdmin: true }
console.log(createdUser2); // { name: "Alice", email: "alice@example.com", phone: "", isAdmin: true }
```