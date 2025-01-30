`this` và arrow function trong JavaScript:

---

### **Từ khóa `this`**
**Lý thuyết:**  
`this` tham chiếu đến đối tượng gọi hàm. Giá trị của `this` được xác định động khi hàm được gọi.

#### Ví dụ 1: `this` trong phương thức đối tượng
```javascript
const user = {
  name: 'Alice',
  showName() {
    console.log(this.name); // `this` = user
  }
};

user.showName(); // Output: 'Alice' ✅
```

#### Ví dụ 2: Mất `this` trong hàm lồng nhau
```javascript
const user = {
  name: 'Bob',
  greet() {
    setTimeout(function() {
      console.log(this.name); // `this` = global/window (mất context)
    }, 100);
  }
};

user.greet(); // Output: '' (trong browser) hoặc undefined (strict mode) ❌
```

---

### **Hàm mũi tên (Arrow Function)**
**Lý thuyết:**  
Hàm mũi tên không có `this` riêng, nó kế thừa `this` từ phạm vi bao ngoài (lexical scope).

#### Ví dụ 3: Sửa lỗi `this` với arrow function
```javascript
const user = {
  name: 'Charlie',
  greet() {
    setTimeout(() => {
      console.log(this.name); // `this` = user (kế thừa từ greet)
    }, 100);
  }
};

user.greet(); // Output: 'Charlie' ✅
```

#### Ví dụ 4: Arrow function làm phương thức đối tượng
```javascript
const user = {
  name: 'David',
  greet: () => {
    console.log(this.name); // `this` = global/window (không phải user)
  }
};

user.greet(); // Output: '' hoặc undefined ❌
```

---

### **Giải pháp truyền thống (trước arrow function)**
**Lý thuyết:**  
Lưu `this` vào biến trung gian (thường đặt tên `that`, `self`) để truy cập trong hàm con.

#### Ví dụ 5: Dùng `that` thay thế
```javascript
const user = {
  name: 'Eva',
  greet() {
    const that = this; // Lưu `this` vào biến
    setTimeout(function() {
      console.log(that.name); // Truy cập qua biến that
    }, 100);
  }
};

user.greet(); // Output: 'Eva' ✅
```

---

### **Tổng kết**
- **Dùng arrow function** khi cần giữ nguyên `this` từ phạm vi ngoài (callbacks, event listeners).
- **Không dùng arrow function** làm phương thức đối tượng nếu cần truy cập `this` của đối tượng đó.
- **Quy tắc vàng:** `this` trong arrow function là giá trị `this` tại thời điểm khai báo, không phải thời điểm gọi hàm.

#### Ví dụ 6: So sánh trực tiếp
```javascript
// Hàm thường
function regularFunc() {
  console.log(this); // `this` phụ thuộc ngữ cảnh gọi
}

// Arrow function
const arrowFunc = () => {
  console.log(this); // `this` kế thừa từ nơi khai báo
};

const obj = { method: regularFunc };
obj.method(); // `this` = obj ✅
arrowFunc(); // `this` = global/window (hoặc module exports trong Node.js)
```