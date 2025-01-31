### 1. **`for...in`**  
Dùng để lặp qua **key (khóa)** của object.  
**Ví dụ:**  
```javascript
const character = {
  name: "Alice",
  age: 25,
  power: "Teleportation"
};

// Lặp qua các key của object
for (const key in character) {
  console.log(key); // Output: "name", "age", "power"
  console.log(character[key]); // Output: "Alice", 25, "Teleportation"
}
```

**Lưu ý:**  
- Không dùng `for...in` cho mảng (vì nó lặp qua cả **index** và **prototype chain**).  
```javascript
const arr = [10, 20, 30];
for (const index in arr) {
  console.log(index); // Output: "0", "1", "2" (kiểu string)
  console.log(arr[index]); // Output: 10, 20, 30
}
```

---

### 2. **`for...of`**  
Dùng để lặp qua **giá trị** của iterable object (mảng, chuỗi, Map, Set).  
**Ví dụ:**  
```javascript
// Với mảng
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num); // Output: 1, 2, 3
}

// Với chuỗi
const text = "Hello";
for (const char of text) {
  console.log(char); // Output: "H", "e", "l", "l", "o"
}

// Với Set
const uniqueNumbers = new Set([1, 2, 2, 3]);
for (const num of uniqueNumbers) {
  console.log(num); // Output: 1, 2, 3
}
```

**Lỗi phổ biến:**  
```javascript
const obj = { a: 1, b: 2 };
for (const value of obj) { // ❌ Lỗi: obj không phải iterable
  console.log(value);
}
```

---

### 3. **So sánh `for...in` và `for...of`**  
**Ví dụ minh họa:**  
```javascript
const arr = ["🍎", "🍌", "🍊"];

// for...in: Lặp qua index (key)
for (const index in arr) {
  console.log(index); // Output: "0", "1", "2"
}

// for...of: Lặp qua giá trị
for (const fruit of arr) {
  console.log(fruit); // Output: "🍎", "🍌", "🍊"
}
```

---

### 4. **`let` vs `const` trong vòng lặp**  
**Ví dụ:**  
```javascript
// Dùng const (không thể gán lại)
const obj = { a: 1, b: 2 };
for (const key in obj) {
  // key = "newKey"; ❌ Lỗi: Không thể gán lại giá trị cho const
  console.log(key);
}

// Dùng let (có thể gán lại)
const arr = [10, 20];
for (let num of arr) {
  num += 5; // Thay đổi giá trị của biến lặp
  console.log(num); // Output: 15, 25
}
console.log(arr); // Output: [10, 20] (mảng gốc không đổi)
```

---

### Tóm lại  
- **`for...in`**:  
  - Dùng cho **object** để lặp qua **key**.  
  - Tránh dùng cho mảng (ưu tiên `for...of` hoặc `forEach`).  

- **`for...of`**:  
  - Dùng cho **iterable** (mảng, chuỗi, Set, Map) để lặp qua **giá trị**.  
  - Không dùng được cho object thường.  

- **`const` vs `let`**:  
  - Ưu tiên `const` nếu không cần thay đổi biến lặp.  
  - Dùng `let` khi cần gán lại giá trị.