### 1. **Cơ bản về `map()`**  
`map()` tạo mảng mới bằng cách gọi hàm callback trên từng phần tử của mảng gốc.  
**Ví dụ:**  
```javascript
// Mảng gốc (dặm)
const distanceWalkedMilesArray = [2, 3.5, 1.8];

// Chuyển đổi sang kilomet (1 dặm = 1.6 km)
const distanceWalkedKilometersArray = distanceWalkedMilesArray.map(distanceMiles => {
  return distanceMiles * 1.6;
});

console.log(distanceWalkedKilometersArray); // [3.2, 5.6, 2.88]
console.log(distanceWalkedMilesArray); // [2, 3.5, 1.8] (mảng gốc không thay đổi)
```

---

### 2. **Sử dụng tham số `index`**  
Hàm callback có thể nhận tham số thứ 2 là chỉ số của phần tử.  
**Ví dụ:**  
```javascript
const fruits = ["🍎", "🍌", "🍊"];

// Thêm chỉ số vào từng phần tử
const indexedFruits = fruits.map((fruit, index) => {
  return `${index + 1}. ${fruit}`;
});

console.log(indexedFruits); // ["1. 🍎", "2. 🍌", "3. 🍊"]
```

---

### 3. **Trả về trực tiếp từ hàm**  
`map()` có thể kết hợp với hàm khác để xử lý dữ liệu.  
**Ví dụ:**  
```javascript
// Hàm chuyển đổi tiền tệ
const convertToUSD = (amount) => amount * 23000;

const pricesVND = [100000, 150000, 200000];
const pricesUSD = pricesVND.map(convertToUSD); // Gọi hàm qua map()

console.log(pricesUSD); // [4.3478, 6.5217, 8.6956] (xấp xỉ)
```

---

### 4. **Khi KHÔNG nên dùng `map()`**  
Nếu không cần mảng mới, dùng `forEach()` thay thế.  
**Ví dụ:**  
```javascript
const numbers = [1, 2, 3];

// ❌ Không nên dùng map() nếu không dùng kết quả
numbers.map(num => console.log(num)); // Tạo mảng rỗng không cần thiết

// ✅ Ưu tiên dùng forEach()
numbers.forEach(num => console.log(num)); // Không tạo mảng mới
```

---

### 5. **Xử lý dữ liệu phức tạp**  
Kết hợp `map()` với các phương thức khác như `filter`.  
**Ví dụ:**  
```javascript
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

// Tăng giá 10% cho sản phẩm có giá > 400
const updatedPrices = products
  .filter(product => product.price > 400)
  .map(product => ({
    ...product,
    price: product.price * 1.1
  }));

console.log(updatedPrices);
// Output:
// [
//   { name: "Laptop", price: 1100 },
//   { name: "Phone", price: 550 }
// ]
```

---

### Tóm lại  
- **Luôn tạo mảng mới**: `map()` không thay đổi mảng gốc.  
- **Tham số hàm callback**: Nhận `(phần_tử, chỉ_số, mảng_gốc)`.  
- **Dùng `const` cho mảng mới**: Đảm bảo tính bất biến.  
- **Kết hợp linh hoạt**: Sử dụng với `filter`, `reduce`, toán tử spread (`...`).  
- **Tránh lạm dụng**: Chỉ dùng khi cần mảng kết quả.