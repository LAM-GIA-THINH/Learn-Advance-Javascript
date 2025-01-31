### **Làm việc với Đối tượng (Objects) trong JavaScript**

---

#### **1. Duyệt các đối tượng**
- **Mô tả:** Sử dụng vòng lặp `for...in` để duyệt qua các cặp key-value trong một đối tượng.

**Ví dụ:**
```javascript
const user = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

// Duyệt qua các cặp key-value
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output:
// name: John
// age: 30
// occupation: Developer
```

---

#### **2. Chuyển đổi đối tượng thành mảng**
- **Mô tả:** Dùng các phương thức như `Object.keys()`, `Object.values()`, và `Object.entries()` để chuyển đổi đối tượng thành mảng, tận dụng các array methods.

---

#### **3. `Object.keys()`**
- **Mô tả:** Trả về một mảng chứa các keys của đối tượng.

**Ví dụ:**
```javascript
const user = { name: 'John', age: 30, occupation: 'Developer' };

// Lấy các keys
const keys = Object.keys(user);
console.log(keys); // ['name', 'age', 'occupation']

// Kiểm tra key tồn tại
console.log(keys.includes('name')); // true

// Map keys để lấy values
const values = keys.map(key => user[key]);
console.log(values); // ['John', 30, 'Developer']
```

---

#### **4. `Object.values()`**
- **Mô tả:** Trả về một mảng chứa các values của đối tượng.

**Ví dụ:**
```javascript
const scores = { math: 90, english: 85, science: 88 };

// Lấy các values
const values = Object.values(scores);
console.log(values); // [90, 85, 88]

// Tính tổng điểm
const total = values.reduce((sum, score) => sum + score, 0);
console.log(total); // 263
```

---

#### **5. `Object.entries()`**
- **Mô tả:** Trả về một mảng các mảng con, mỗi mảng con chứa một cặp key-value của đối tượng.

**Ví dụ:**
```javascript
const user = { name: 'John', age: 30, occupation: 'Developer' };

// Lấy cặp key-value
const entries = Object.entries(user);
console.log(entries);
// [['name', 'John'], ['age', 30], ['occupation', 'Developer']]

// Duyệt qua key và value
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30
// occupation: Developer
```

---

#### **6. Sử dụng `reduce()` với `Object.entries()`**
- **Mô tả:** Dùng `reduce()` để lọc và chuyển đổi dữ liệu từ đối tượng.

**Ví dụ:**
```javascript
const products = {
  laptop: 1000,
  phone: 500,
  tablet: 600
};

// Lọc các sản phẩm giá trên 600 và tăng giá 10%
const updatedProducts = Object.entries(products).reduce((acc, [product, price]) => {
  if (price > 600) {
    acc[product] = price * 1.1; // Tăng giá 10%
  }
  return acc;
}, {});

console.log(updatedProducts);
// { laptop: 1100 }
```

---

#### **7. Ứng dụng thực tế**
- **Mô tả:** Khi làm việc với dữ liệu từ API có dạng nested object.

**Ví dụ:**
```javascript
const apiData = {
  users: {
    1: { name: 'Alice', age: 25 },
    2: { name: 'Bob', age: 30 },
    3: { name: 'Charlie', age: 35 }
  }
};

// Chuyển đổi object users thành mảng
const usersArray = Object.entries(apiData.users).map(([id, user]) => ({
  id: Number(id),
  ...user
}));

console.log(usersArray);
// [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 }
// ]
```

---

#### **Tóm lại:**
- **`Object.keys()`, `Object.values()`, `Object.entries()`** là các công cụ mạnh mẽ để chuyển đổi đối tượng thành mảng.
- **`reduce()`** kết hợp với `Object.entries()` giúp xử lý dữ liệu một cách linh hoạt.
- Các phương pháp này đặc biệt hữu ích khi làm việc với dữ liệu phức tạp hoặc nested từ API.