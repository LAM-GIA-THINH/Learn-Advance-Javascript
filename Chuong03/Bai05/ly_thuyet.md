### **Phương thức `map` và `forEach` trong JavaScript**

---

#### **Phương thức `map`**:
- **Mô tả**:  
  Duyệt qua từng phần tử của một mảng, áp dụng một hàm callback lên mỗi phần tử và **trả về một mảng mới** chứa các phần tử đã được biến đổi.
- **Đặc điểm**:
  - Không làm thay đổi mảng gốc.
  - Thường dùng để **biến đổi dữ liệu**.

---

##### **Ví dụ với `map`:**
1. **Tăng giá trị của từng phần tử trong mảng số**:  
   ```javascript
   const numbers = [1, 2, 3, 4];
   const doubledNumbers = numbers.map(num => num * 2);

   console.log(doubledNumbers); // [2, 4, 6, 8]
   console.log(numbers); // [1, 2, 3, 4] (mảng gốc không bị thay đổi)
   ```

2. **Thay đổi hoặc thêm thuộc tính cho mảng đối tượng**:  
   ```javascript
   const temperatures = [
     { day: "Monday", temp: 68 },
     { day: "Tuesday", temp: 72 },
     { day: "Wednesday", temp: 75 }
   ];

   // Thêm thuộc tính isHigh khi nhiệt độ lớn hơn 70
   const updatedTemps = temperatures.map(temp => ({
     ...temp,
     isHigh: temp.temp > 70
   }));

   console.log(updatedTemps);
   // [
   //   { day: "Monday", temp: 68, isHigh: false },
   //   { day: "Tuesday", temp: 72, isHigh: true },
   //   { day: "Wednesday", temp: 75, isHigh: true }
   // ]
   ```

---

#### **Phương thức `forEach`**:
- **Mô tả**:  
  Duyệt qua từng phần tử của mảng và thực hiện một hành động nào đó mà **không trả về mảng mới**.
- **Đặc điểm**:
  - Không tạo mảng mới.
  - Thường dùng để **thực hiện hành động** (ví dụ: ghi log, thông báo) trên các phần tử của mảng.

---

##### **Ví dụ với `forEach`:**
1. **Hiển thị từng phần tử của mảng**:  
   ```javascript
   const fruits = ["Táo", "Cam", "Chuối"];

   fruits.forEach(fruit => {
     console.log(`Trái cây: ${fruit}`);
   });
   // Output:
   // Trái cây: Táo
   // Trái cây: Cam
   // Trái cây: Chuối
   ```

2. **Gửi thông báo về các ngày có nhiệt độ cao**:  
   ```javascript
   const updatedTemps = [
     { day: "Monday", temp: 68, isHigh: false },
     { day: "Tuesday", temp: 72, isHigh: true },
     { day: "Wednesday", temp: 75, isHigh: true }
   ];

   updatedTemps.forEach(temp => {
     if (temp.isHigh) {
       console.log(`Cảnh báo: Ngày ${temp.day} có nhiệt độ cao!`);
     }
   });
   // Output:
   // Cảnh báo: Ngày Tuesday có nhiệt độ cao!
   // Cảnh báo: Ngày Wednesday có nhiệt độ cao!
   ```

---

### **Chuỗi phương thức (Method Chaining)**:
- **Mô tả**:  
  Các phương thức như `map` có thể kết hợp trực tiếp với `forEach` để tối ưu hóa code. Tuy nhiên, cần đảm bảo rằng code vẫn dễ đọc.

---

##### **Ví dụ chuỗi phương thức:**
1. **Sử dụng chuỗi phương thức `map` và `forEach`**:  
   ```javascript
   const temperatures = [
     { day: "Monday", temp: 68 },
     { day: "Tuesday", temp: 72 },
     { day: "Wednesday", temp: 75 }
   ];

   // Thêm thuộc tính và thông báo trực tiếp
   temperatures
     .map(temp => ({ ...temp, isHigh: temp.temp > 70 }))
     .forEach(temp => {
       if (temp.isHigh) {
         console.log(`Ngày ${temp.day} có nhiệt độ cao: ${temp.temp}°F`);
       }
     });
   // Output:
   // Ngày Tuesday có nhiệt độ cao: 72°F
   // Ngày Wednesday có nhiệt độ cao: 75°F
   ```

---

### **So sánh `map` và `forEach`:**
| **Đặc điểm**                | **`map`**                                      | **`forEach`**                                  |
|-----------------------------|-----------------------------------------------|----------------------------------------------|
| **Kết quả trả về**           | Tạo ra một mảng mới chứa các phần tử đã biến đổi. | Không trả về gì (undefined).                  |
| **Thay đổi mảng gốc**        | Không.                                        | Không.                                       |
| **Mục đích sử dụng**         | Biến đổi dữ liệu.                              | Thực hiện hành động trên dữ liệu.            |
| **Khả năng kết hợp phương thức** | Có thể dùng trong chuỗi phương thức.            | Không thể dùng trong chuỗi phương thức.       |

---

### **Tóm lại:**
- Sử dụng **`map`** khi bạn cần **tạo ra một mảng mới** với các phần tử đã được biến đổi.
- Sử dụng **`forEach`** khi bạn chỉ muốn **thực hiện một hành động** trên từng phần tử trong mảng mà không cần mảng mới.