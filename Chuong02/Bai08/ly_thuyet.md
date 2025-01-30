### **`Map` và sự khác biệt so với `Object` trong JavaScript**

---

### **1. Khóa (Keys) trong `Object` và `Map`:**

- **`Object`:**
  - Chỉ chấp nhận **string** hoặc **symbol** làm key.
  - Nếu sử dụng các giá trị khác (số, boolean), chúng sẽ tự động được chuyển thành string.
  ```javascript
  const obj = {};
  obj[123] = "Number Key"; // 123 sẽ được chuyển thành "123"
  console.log(obj["123"]); // "Number Key"
  ```

- **`Map`:**
  - Cho phép sử dụng bất kỳ kiểu dữ liệu nào làm key, bao gồm string, number, boolean, symbol, và object.
  ```javascript
  const map = new Map();
  const objKey = { id: 1 };
  
  map.set(objKey, "Object Key");
  console.log(map.get(objKey)); // "Object Key"
  ```

---

### **2. Thứ tự (Order) của các phần tử:**

- **`Object`:**
  - Thứ tự các cặp key-value không được đảm bảo theo thứ tự chèn vào.

- **`Map`:**
  - **Duy trì thứ tự chèn** của các cặp key-value.
  ```javascript
  const map = new Map();
  map.set("a", 1);
  map.set("b", 2);
  
  console.log([...map.keys()]); // ["a", "b"]
  ```

---

### **3. Cách thêm giá trị:**

- **`Object`:**
  - Sử dụng cú pháp `{ key: value }` hoặc gán trực tiếp.
  ```javascript
  const obj = { name: "Alice" };
  obj.age = 25;
  console.log(obj); // { name: "Alice", age: 25 }
  ```

- **`Map`:**
  - Sử dụng `new Map()` để tạo và `set()` để thêm cặp key-value.
  ```javascript
  const map = new Map();
  map.set("name", "Alice");
  map.set("age", 25);
  console.log(map); // Map(2) { "name" => "Alice", "age" => 25 }
  ```

---

### **4. Lặp (Iteration):**

- **`Object`:**
  - Sử dụng `for...in` để lặp qua các key hoặc dùng `Object.keys()` để lấy danh sách key và lặp qua array đó.
  ```javascript
  const obj = { a: 1, b: 2 };
  for (const key in obj) {
    console.log(key, obj[key]); // a 1, b 2
  }
  ```

- **`Map`:**
  - Có phương thức `forEach()`, `keys()`, `values()` và `entries()` để lặp qua các phần tử.
  ```javascript
  const map = new Map([["a", 1], ["b", 2]]);
  map.forEach((value, key) => {
    console.log(key, value); // a 1, b 2
  });
  ```

---

### **5. Sử dụng Object làm Key:**

- **`Object`:**
  - Không thể sử dụng object làm key vì JavaScript sẽ chuyển key thành chuỗi `[object Object]`.
  ```javascript
  const obj = {};
  const key = { id: 1 };
  
  obj[key] = "Test";
  console.log(obj); // { "[object Object]": "Test" }
  ```

- **`Map`:**
  - Hỗ trợ sử dụng object làm key.
  ```javascript
  const map = new Map();
  const key = { id: 1 };
  
  map.set(key, "Test");
  console.log(map.get(key)); // "Test"
  ```

---

### **6. `WeakMap`:**

- **`WeakMap`:**
  - Chỉ chấp nhận object làm key.
  - Tối ưu cho việc thu gom rác (garbage collection) khi object không còn được tham chiếu ở nơi khác.
  ```javascript
  const weakMap = new WeakMap();
  let obj = { id: 1 };
  
  weakMap.set(obj, "Test");
  console.log(weakMap.get(obj)); // "Test"

  obj = null; // Khi không còn tham chiếu, key sẽ được thu gom rác.
  ```

---

### **7. Độ dài (Length):**

- **`Object`:**
  - Không có thuộc tính `length`. Để lấy số lượng cặp key-value, cần dùng `Object.keys()`:
  ```javascript
  const obj = { a: 1, b: 2 };
  console.log(Object.keys(obj).length); // 2
  ```

- **`Map`:**
  - Có thuộc tính `size` để lấy số lượng cặp key-value.
  ```javascript
  const map = new Map([["a", 1], ["b", 2]]);
  console.log(map.size); // 2
  ```

---

### **8. Tổng kết:**

| **Đặc điểm**                 | **Object**                 | **Map**                   |
|------------------------------|----------------------------|---------------------------|
| **Kiểu dữ liệu của key**     | String, Symbol             | Bất kỳ kiểu dữ liệu nào   |
| **Thứ tự chèn key-value**    | Không đảm bảo              | Duy trì thứ tự chèn       |
| **Truy cập độ dài**          | `Object.keys().length`     | `size`                    |
| **Lặp qua key-value**        | `for...in` hoặc `Object.*` | `forEach()` hoặc `entries()` |
| **Sử dụng object làm key**    | Không hỗ trợ               | Hỗ trợ                    |

---

### **9. Ví dụ tổng hợp:**

```javascript
// Khởi tạo và thêm giá trị
const map = new Map();
map.set("name", "Alice");
map.set(42, "Number Key");
map.set(true, "Boolean Key");
const objKey = { id: 1 };
map.set(objKey, "Object Key");

// Lấy giá trị
console.log(map.get(42)); // "Number Key"
console.log(map.get(objKey)); // "Object Key"

// Kích thước
console.log(map.size); // 4

// Lặp qua các phần tử
map.forEach((value, key) => {
  console.log(key, value);
});
// name Alice
// 42 Number Key
// true Boolean Key
// { id: 1 } Object Key
```