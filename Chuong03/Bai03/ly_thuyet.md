### **Phương thức mảng trong JavaScript:**

---

#### **`indexOf()`**
- **Mô tả**: Tìm vị trí (index) của một phần tử trong mảng. Nếu không tìm thấy, trả về `-1`.
- **Ví dụ**:  
  ```javascript
  const fruits = ["Táo", "Cam", "Chuối"];
  console.log(fruits.indexOf("Cam")); // 1
  console.log(fruits.indexOf("Xoài")); // -1
  ```

---

#### **`includes()`**
- **Mô tả**: Kiểm tra xem một phần tử có tồn tại trong mảng hay không, trả về `true` hoặc `false`.
- **Ví dụ**:  
  ```javascript
  const numbers = [10, 20, 30, 40];
  console.log(numbers.includes(20)); // true
  console.log(numbers.includes(50)); // false
  ```

---

#### **`some()`**
- **Mô tả**: Kiểm tra xem có ít nhất **một phần tử** trong mảng thỏa mãn điều kiện nhất định.
- **Ví dụ**:  
  ```javascript
  const temperatures = [
    { day: "Monday", isRecordTemp: false },
    { day: "Tuesday", isRecordTemp: true },
    { day: "Wednesday", isRecordTemp: false }
  ];

  const hasRecordTemp = temperatures.some(temp => temp.isRecordTemp);
  console.log(hasRecordTemp); // true
  ```

---

#### **`every()`**
- **Mô tả**: Kiểm tra xem **tất cả phần tử** trong mảng có thỏa mãn điều kiện nhất định hay không.
- **Ví dụ**:  
  ```javascript
  const temperatures = [
    { day: "Monday", isRecordTemp: false },
    { day: "Tuesday", isRecordTemp: false },
    { day: "Wednesday", isRecordTemp: false }
  ];

  const allNonRecord = temperatures.every(temp => !temp.isRecordTemp);
  console.log(allNonRecord); // true
  ```

---

### **Sự khác biệt giữa `includes()`, `some()`, và `every()`:**
| **Phương thức** | **Mục đích chính**                                                                 | **Ví dụ sử dụng**                                                                                 |
|------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `includes()`     | Kiểm tra sự tồn tại của một giá trị nguyên thủy trong mảng.                        | `numbers.includes(20)` => `true`                                                                 |
| `some()`         | Kiểm tra xem **ít nhất một** phần tử thỏa mãn điều kiện trong hàm callback.        | `temperatures.some(temp => temp.isRecordTemp)` => `true`                                         |
| `every()`        | Kiểm tra xem **tất cả** các phần tử thỏa mãn điều kiện trong hàm callback.         | `temperatures.every(temp => !temp.isRecordTemp)` => `true`                                       |

---

### **Hàm Callback:**
- **Mô tả**:  
  Các phương thức `some()` và `every()` sử dụng hàm callback để kiểm tra điều kiện. Hàm này được gọi cho từng phần tử của mảng và nhận tham số là phần tử đó.

- **Ví dụ với arrow function**:  
  ```javascript
  const temperatures = [
    { day: "Monday", isRecordTemp: false },
    { day: "Tuesday", isRecordTemp: true }
  ];

  // Viết callback đầy đủ
  const hasRecordTemp = temperatures.some(temp => {
    return temp.isRecordTemp;
  });

  // Viết gọn callback
  const hasRecordTempShort = temperatures.some(temp => temp.isRecordTemp);

  console.log(hasRecordTemp); // true
  console.log(hasRecordTempShort); // true
  ```

---

### **Ví dụ thực tế:**
1. **Kiểm tra mảng số nguyên thủy**:  
   ```javascript
   const numbers = [5, 10, 15, 20];
   console.log(numbers.indexOf(15)); // 2
   console.log(numbers.includes(25)); // false
   ```

2. **Kiểm tra mảng đối tượng phức tạp**:  
   ```javascript
   const temperatures = [
     { day: "Monday", isRecordTemp: false },
     { day: "Tuesday", isRecordTemp: true },
     { day: "Wednesday", isRecordTemp: false }
   ];

   // Ít nhất một ngày có nhiệt độ kỷ lục
   console.log(temperatures.some(temp => temp.isRecordTemp)); // true

   // Tất cả các ngày đều không có nhiệt độ kỷ lục
   console.log(temperatures.every(temp => !temp.isRecordTemp)); // false
   ```