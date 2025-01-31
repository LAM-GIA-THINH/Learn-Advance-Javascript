### **Cờ (Flags) trong Regex:**
* **`g` (global):** Tìm tất cả các kết quả khớp trong chuỗi.
  ```javascript
  const text = "cat dog cat";
  console.log(text.match(/cat/));    // ["cat"] (chỉ kết quả đầu)
  console.log(text.match(/cat/g));   // ["cat", "cat"] (tất cả kết quả)
  ```

* **`i` (case-insensitive):** Tìm kiếm không phân biệt hoa/thường.
  ```javascript
  const message = "Hello World";
  console.log(message.match(/hello/i)); // ["Hello"] (khớp dù viết hoa)
  ```

* **Kết hợp cờ:**
  ```javascript
  const data = "Apple apple APPLE";
  console.log(data.match(/apple/gi)); // ["Apple", "apple", "APPLE"]
  ```

---

### **Sử dụng `replaceAll`:**
* **Bắt buộc dùng cờ `g` với regex:**
  ```javascript
  const text = "JS js Js";
  // ✅ Đúng: Cờ 'g' để thay thế toàn bộ
  console.log(text.replaceAll(/js/gi, "JavaScript")); // "JavaScript JavaScript JavaScript"
  
  // ❌ Lỗi: Thiếu cờ 'g'
  // console.log(text.replaceAll(/js/i, "JavaScript")); // TypeError
  ```

* **So sánh `replace` và `replaceAll`:**
  ```javascript
  // replace() chỉ thay thế kết quả đầu tiên (dù có cờ 'g')
  console.log(text.replace(/js/gi, "JavaScript")); // "JavaScript js Js"
  ```

---

### **Phương thức `test()`:**
* **Kiểm tra sự tồn tại của pattern:**
  ```javascript
  const hasNumber = /\d/;
  console.log(hasNumber.test("abc123")); // true
  console.log(hasNumber.test("abcdef")); // false
  ```

---

### **Cách tạo regex:**
* **Dùng dấu gạch chéo `/`:**
  ```javascript
  const regex1 = /wifi/i; // Không phân biệt hoa/thường
  console.log(regex1.test("Wi-Fi")); // true
  ```

* **Dùng `RegExp` constructor:**
  ```javascript
  const pattern = "user";
  const flags = "gi";
  const regex2 = new RegExp(pattern, flags); // Tương đương /user/gi
  
  console.log(regex2.test("USER_123")); // true
  ```

* **Lỗi thường gặp khi nhúng biến:**
  ```javascript
  const dynamicPattern = "admin";
  
  // ❌ Sai: Không thể dùng template string trực tiếp
  // const invalidRegex = /${dynamicPattern}/; // Hiểu là literal "/${dynamicPattern}/"
  
  // ✅ Đúng: Dùng RegExp constructor
  const validRegex = new RegExp(dynamicPattern, "i");
  console.log(validRegex.test("ADMIN")); // true
  ```

---

### **Tổng hợp ví dụ phức tạp:**
```javascript
// Thay thế tất cả email trong chuỗi bằng "[REDACTED]"
const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,}\b/gi;
const userData = "Contact: john@example.com, support@COMPANY.COM";
const redactedData = userData.replaceAll(emailRegex, "[REDACTED]");

console.log(redactedData); // "Contact: [REDACTED], support@[REDACTED]"
```

Các ví dụ trên minh họa rõ cách áp dụng regex trong các tình huống thực tế, giúp củng cố kiến thức lý thuyết.