Sử dụng hàm tốt hơn bằng giá trị mặc định
### 1. Chuyển đổi nhiệt độ cơ bản
**Lý thuyết:**  
Hàm chuyển đổi Celsius sang Fahrenheit sử dụng công thức `độ F = độ C * 1.8 + 32`.

**Ví dụ:**
```javascript
function convertTemperature(celsius) {
  return celsius * 1.8 + 32;
}

console.log(convertTemperature(25)); // Kết quả: 77
```

---

### 2. Xử lý số thập phân với `toFixed()`
**Lý thuyết:**  
Sử dụng `toFixed()` để kiểm soát số chữ số thập phân. Lưu ý kết quả trả về là chuỗi, cần chuyển lại thành số.

**Ví dụ:**
```javascript
// Không dùng toFixed()
console.log(25.555.toFixed(2)); // "25.55" (kiểu string)

// Chuyển đổi thành số
function convertTemperature(celsius, dec) {
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(dec)); // Chuyển string thành number
}

console.log(convertTemperature(25, 2)); // 77 (kiểu number)
```

---

### 3. Giá trị mặc định với toán tử `||` (Cách cũ)
**Lý thuyết:**  
Toán tử `||` gây lỗi khi `dec = 0` vì `0` là giá trị falsy.

**Ví dụ:**
```javascript
function convertTemperature(celsius, dec) {
  dec = dec || 1; // Nếu dec = 0 → dec sẽ thành 1
  return Number((celsius * 1.8 + 32).toFixed(dec));
}

console.log(convertTemperature(25, 0)); // Kết quả: 77.0 (mong muốn: 77)
```

---

### 4. Giá trị mặc định ES6 (Giải pháp tối ưu)
**Lý thuyết:**  
Sử dụng default parameters để xử lý giá trị `undefined` mà không ảnh hưởng đến giá trị falsy hợp lệ như `0`.

**Ví dụ:**
```javascript
function convertTemperature(celsius, dec = 1) {
  return Number((celsius * 1.8 + 32).toFixed(dec));
}

console.log(convertTemperature(25)); // 77.0 (dec mặc định = 1)
console.log(convertTemperature(25, 0)); // 77 (dec = 0)
console.log(convertTemperature(25, undefined)); // 77.0 (sử dụng default)
```

---

### 5. Tính linh hoạt khi yêu cầu thay đổi
**Lý thuyết:**  
Default parameters giúp hàm dễ mở rộng và ít bị phá vỡ logic khi thêm tham số mới.

**Ví dụ:**
```javascript
// Thêm tham số "useKelvin" không ảnh hưởng đến logic cũ
function convertTemperature(celsius, dec = 1, useKelvin = false) {
  if (useKelvin) {
    return Number((celsius + 273.15).toFixed(dec));
  }
  return Number((celsius * 1.8 + 32).toFixed(dec));
}

// Gọi hàm với các tham số khác nhau
console.log(convertTemperature(25)); // 77.0 (Fahrenheit)
console.log(convertTemperature(25, 2, true)); // 298.15 (Kelvin)
```

---

### Tóm tắt:
- **ES6 Default Parameters** > **Toán tử `||`** vì xử lý đúng các giá trị falsy hợp lệ như `0`.
- Luôn chuyển đổi kết quả từ `toFixed()` thành số nếu muốn làm việc với kiểu number.
- Ví dụ trên thể hiện rõ cách xử lý linh hoạt khi tham số không được cung cấp hoặc có giá trị falsy.