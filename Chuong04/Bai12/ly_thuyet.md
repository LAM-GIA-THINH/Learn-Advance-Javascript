### 1. **Cách thức hoạt động**  
`.reduce()` "gộp" mảng thành một giá trị duy nhất thông qua hàm callback.  
**Cú pháp:**  
```javascript
array.reduce((total, currentElement) => { /* logic */ }, initialValue);
```

---

### 2. **Ví dụ cơ bản - Tính tổng**  
```javascript
const weeklyRainfall = [10, 20, 0, 122];
const totalRainfall = weeklyRainfall.reduce((total, current) => {
  return total + current;
}, 0); // 0 là giá trị khởi tạo

console.log(totalRainfall); // 152
```

**Giải thích từng bước:**  
- Lần 1: `total = 0` + `current = 10` → **10**  
- Lần 2: `total = 10` + `current = 20` → **30**  
- Lần 3: `total = 30` + `current = 0` → **30**  
- Lần 4: `total = 30` + `current = 122` → **152**

---

### 3. **Tìm giá trị lớn nhất**  
```javascript
const temperatures = [25, 18, 30, 22, 28];
const maxTemp = temperatures.reduce((max, current) => {
  return current > max ? current : max;
}, -Infinity);

console.log(maxTemp); // 30
```

---

### 4. **Loại bỏ phần tử trùng lặp**  
```javascript
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = duplicates.reduce((acc, current) => {
  if (!acc.includes(current)) acc.push(current);
  return acc;
}, []); // Khởi tạo với mảng rỗng

console.log(uniqueArray); // [1, 2, 3, 4, 5]
```

---

### 5. **Nhóm đối tượng theo thuộc tính**  
```javascript
const products = [
  { category: "Fruit", name: "Apple" },
  { category: "Vegetable", name: "Carrot" },
  { category: "Fruit", name: "Banana" }
];

const grouped = products.reduce((groups, item) => {
  const key = item.category;
  if (!groups[key]) groups[key] = [];
  groups[key].push(item);
  return groups;
}, {}); // Khởi tạo với object rỗng

console.log(grouped);
/* Output:
{
  Fruit: [{...}, {...}],
  Vegetable: [{...}]
}
*/
```

---

### 6. **Xử lý mảng rỗng**  
```javascript
const emptyArray = [];
// Không có initial value → LỖI
// const sum = emptyArray.reduce((a, b) => a + b); 

// Cách an toàn:
const safeSum = emptyArray.reduce((a, b) => a + b, 0);
console.log(safeSum); // 0
```

---

### 7. **Tính giá trị trung bình**  
```javascript
const scores = [85, 90, 78, 92, 88];
const average = scores.reduce((total, current, index, array) => {
  total += current;
  if (index === array.length - 1) return total / array.length;
  return total;
}, 0);

console.log(average.toFixed(1)); // "86.6"
```

---

### Tóm lại  
- **Linh hoạt**: Xử lý tổng, nhóm dữ liệu, thống kê, biến đổi cấu trúc.  
- **Luôn khởi tạo giá trị ban đầu** phù hợp (0, [], {}, v.v.) để tránh lỗi.  
- **Hàm callback** có thể nhận 4 tham số: `(total, currentElement, index, array)`.  
- **Ưu tiên đặt tên biến mô tả** (ví dụ: `acc` cho accumulator, `current` thay vì `item`).