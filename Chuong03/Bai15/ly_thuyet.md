Set trong JavaScript

---

### 1. **Set là gì?**
Set là một kiểu đối tượng đặc biệt trong JavaScript (ES6) giúp lưu trữ các giá trị **duy nhất**, không trùng lặp.  
**Ví dụ:**
```javascript
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Giá trị này bị bỏ qua vì đã tồn tại
console.log(mySet); // Output: Set(2) {1, 2}
```

---

### 2. **Cách tạo Set**
Khởi tạo Set với giá trị ban đầu (tương tự mảng):  
**Ví dụ:**
```javascript
// Tạo Set từ mảng
const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers); // Output: Set(4) {1, 2, 3, 4}
```

---

### 3. **Tính duy nhất của phần tử**
- **Giá trị nguyên thủy:** Tự động loại bỏ trùng lặp.  
**Ví dụ:**
```javascript
const textSet = new Set(["hello", "hello", "world"]);
console.log(textSet); // Output: Set(2) {"hello", "world"}
```

- **Đối tượng (Object):** Set coi các object là khác nhau ngay cả khi chúng giống nhau về giá trị.  
**Ví dụ:**
```javascript
const obj1 = { name: "Alice" };
const obj2 = { name: "Alice" };
const objectSet = new Set();
objectSet.add(obj1);
objectSet.add(obj2);
console.log(objectSet.size); // Output: 2 (vì obj1 và obj2 là 2 tham chiếu khác nhau)
```

---

### 4. **Truy cập giá trị trong Set**
Set không hỗ trợ truy cập trực tiếp bằng chỉ số. Cần dùng vòng lặp:  
**Ví dụ:**
```javascript
const fruitSet = new Set(["🍎", "🍌", "🍊"]);
// Dùng for...of để lặp
for (const fruit of fruitSet) {
  console.log(fruit); // Output: 🍎, 🍌, 🍊
}
```

---

### 5. **Chuyển Set thành mảng**
Sử dụng toán tử spread (`...`) để chuyển Set thành mảng:  
**Ví dụ:**
```javascript
const set = new Set([10, 20, 30]);
const arrayFromSet = [...set];
console.log(arrayFromSet); // Output: [10, 20, 30]
```

---

### 6. **Ứng dụng của Set**
Loại bỏ giá trị trùng lặp từ mảng một cách hiệu quả:  
**Ví dụ:**
```javascript
const duplicateValues = [1, 2, 2, 3, 3, 3, 4];
const uniqueValues = [...new Set(duplicateValues)];
console.log(uniqueValues); // Output: [1, 2, 3, 4]
```

---

### Tóm lại
- **Set** giúp quản lý dữ liệu duy nhất dễ dàng.
- **Chuyển đổi Set ↔ Mảng** linh hoạt với spread operator.
- **Lưu ý:** Set không so sánh được giá trị của object, chỉ so sánh tham chiếu.