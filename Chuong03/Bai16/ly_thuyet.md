### 1. **Mục đích của bài học**  
Sử dụng **công cụ phù hợp** giúp code JavaScript dễ đọc, dễ bảo trì và hiệu quả hơn.  
**Ví dụ:**  
```javascript
// Mục tiêu: Tăng mỗi phần tử trong mảng lên 1
const numbers = [1, 2, 3];

// Cách dùng vòng lặp for (khó đọc, dài dòng)
const resultFor = [];
for (let i = 0; i < numbers.length; i++) {
  resultFor.push(numbers[i] + 1);
}

// Cách dùng phương thức map (ngắn gọn, rõ ràng)
const resultMap = numbers.map(num => num + 1);

console.log(resultFor); // [2, 3, 4]
console.log(resultMap); // [2, 3, 4]
```

---

### 2. **Vòng lặp `for` truyền thống**  
Vòng lặp `for` vẫn hữu ích nhưng có thể gây rối trong các tác vụ đơn giản.  
**Ví dụ:**  
```javascript
// Tìm phần tử lớn hơn 2
const arr = [1, 2, 3, 4];
const filteredArr = [];

// Dùng for
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 2) filteredArr.push(arr[i]);
}

// Dùng filter
const filteredArrModern = arr.filter(num => num > 2);

console.log(filteredArr); // [3, 4]
console.log(filteredArrModern); // [3, 4]
```

---

### 3. **Các phương thức mảng mới**  
#### a. **`forEach`**  
Thay thế vòng lặp `for` để duyệt mảng đơn giản hơn:  
```javascript
const fruits = ["🍎", "🍌", "🍊"];

// Dùng for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Dùng forEach
fruits.forEach(fruit => console.log(fruit));
```

#### b. **Tính bất biến (Immutability)**  
Phương thức như `map` tạo mảng mới thay vì thay đổi mảng gốc:  
```javascript
const original = [1, 2, 3];

// Tạo mảng mới với giá trị gấp đôi
const doubled = original.map(num => num * 2);

console.log(original); // [1, 2, 3] (không đổi)
console.log(doubled);  // [2, 4, 6]
```

---

### 4. **Toán tử spread**  
Giúp sao chép hoặc hợp nhất mảng một cách bất biến:  
```javascript
// Sao chép mảng
const arr1 = [1, 2, 3];
const arrCopy = [...arr1];

// Hợp nhất mảng
const arr2 = [4, 5];
const mergedArr = [...arr1, ...arr2];

console.log(arrCopy);    // [1, 2, 3]
console.log(mergedArr);  // [1, 2, 3, 4, 5]
```

---

### 5. **Tập trung vào tính năng hữu ích**  
Không cần biết hết mọi phương thức, chỉ cần nắm vững những công cụ giúp code sạch hơn:  
**Ví dụ tổng hợp:**  
```javascript
// Bài toán: Lọc số chẵn, tăng gấp đôi và loại bỏ trùng lặp
const numbers = [1, 2, 2, 3, 4, 4];

// Cách viết "truyền thống" (phức tạp)
let temp = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) temp.push(numbers[i]);
}
let doubled = [];
for (let num of temp) {
  doubled.push(num * 2);
}
const unique = [...new Set(doubled)];

// Cách viết hiện đại (ngắn gọn, dễ đọc)
const result = [...new Set(numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
)];

console.log(unique);  // [4, 8]
console.log(result);  // [4, 8]
```

---

### Tóm lại  
- **Ưu tiên phương thức mảng** như `map`, `filter`, `forEach` thay vì `for`.  
- **Toán tử spread** giúp thao tác mảng linh hoạt và an toàn.  
- **Tính bất biến** giữ nguyên dữ liệu gốc, tránh lỗi tiềm ẩn.  
- **Học có chọn lọc** để tập trung vào công cụ phù hợp nhất!