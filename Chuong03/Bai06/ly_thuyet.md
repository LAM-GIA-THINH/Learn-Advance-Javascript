### **Phương thức `filter` và `find` trong JavaScript**

---

#### **Phương thức `filter`**:
- **Mục đích**: Lọc một mảng và trả về một mảng mới chứa các phần tử thỏa mãn một điều kiện cụ thể.
- **Đặc điểm**:
  - Trả về một **mảng mới**.
  - Không thay đổi mảng gốc.
  - Nếu không có phần tử nào thỏa mãn điều kiện, sẽ trả về một **mảng rỗng**.
  - Hỗ trợ các điều kiện phức tạp với các toán tử logic (`&&`, `||`).

---

##### **Ví dụ với `filter`:**
1. **Lọc các số lớn hơn 5**:  
   ```javascript
   const numbers = [1, 2, 3, 6, 8, 9];
   const greaterThanFive = numbers.filter(num => num > 5);

   console.log(greaterThanFive); // [6, 8, 9]
   console.log(numbers); // [1, 2, 3, 6, 8, 9] (mảng gốc không thay đổi)
   ```

2. **Lọc các ngày có nhiệt độ cao hơn 70 và có nhiệt độ kỷ lục**:  
   ```javascript
   const temperatures = [
     { day: "Monday", temp: 68, isRecordTemp: false },
     { day: "Tuesday", temp: 72, isRecordTemp: true },
     { day: "Wednesday", temp: 75, isRecordTemp: false }
   ];

   const highRecordTemps = temperatures.filter(temp => temp.temp > 70 && temp.isRecordTemp);

   console.log(highRecordTemps);
   // [{ day: "Tuesday", temp: 72, isRecordTemp: true }]
   ```

---

#### **Phương thức `find`**:
- **Mục đích**: Tìm một phần tử duy nhất trong mảng thỏa mãn một điều kiện cụ thể.
- **Đặc điểm**:
  - Trả về phần tử **đầu tiên** thỏa mãn điều kiện.
  - Dừng tìm kiếm ngay khi tìm thấy phần tử thỏa mãn.
  - Nếu không tìm thấy phần tử nào, trả về **`undefined`**.
  - Chỉ trả về **một phần tử duy nhất**.

---

##### **Ví dụ với `find`:**
1. **Tìm số đầu tiên lớn hơn 5**:  
   ```javascript
   const numbers = [1, 2, 3, 6, 8, 9];
   const firstGreaterThanFive = numbers.find(num => num > 5);

   console.log(firstGreaterThanFive); // 6
   ```

2. **Tìm ngày đầu tiên có nhiệt độ kỷ lục**:  
   ```javascript
   const temperatures = [
     { day: "Monday", temp: 68, isRecordTemp: false },
     { day: "Tuesday", temp: 72, isRecordTemp: true },
     { day: "Wednesday", temp: 75, isRecordTemp: false }
   ];

   const firstRecordTemp = temperatures.find(temp => temp.isRecordTemp);

   console.log(firstRecordTemp);
   // { day: "Tuesday", temp: 72, isRecordTemp: true }
   ```

---

### **So sánh `filter` và `find`:**
| **Đặc điểm**                   | **`filter`**                                         | **`find`**                                       |
|--------------------------------|----------------------------------------------------|------------------------------------------------|
| **Kết quả trả về**              | Một mảng chứa tất cả các phần tử thỏa mãn điều kiện. | Một phần tử đầu tiên thỏa mãn điều kiện hoặc `undefined`. |
| **Số lượng phần tử trả về**     | Nhiều phần tử (hoặc rỗng nếu không tìm thấy).        | Một phần tử (hoặc `undefined` nếu không tìm thấy). |
| **Điều kiện kiểm tra**          | Tất cả các phần tử trong mảng.                      | Dừng ngay khi tìm thấy phần tử đầu tiên thỏa mãn. |
| **Ứng dụng**                   | Khi cần tập hợp nhiều phần tử thỏa mãn điều kiện.    | Khi cần tìm **một phần tử cụ thể** thỏa mãn điều kiện. |

---

#### **Ví dụ kết hợp `filter` và `find`:**
1. **Lọc các phần tử và sau đó tìm phần tử đầu tiên**:
   ```javascript
   const temperatures = [
     { day: "Monday", temp: 68, isRecordTemp: false },
     { day: "Tuesday", temp: 72, isRecordTemp: true },
     { day: "Wednesday", temp: 75, isRecordTemp: true }
   ];

   // Lọc các ngày có nhiệt độ trên 70
   const tempsAbove70 = temperatures.filter(temp => temp.temp > 70);
   console.log(tempsAbove70);
   // [
   //   { day: "Tuesday", temp: 72, isRecordTemp: true },
   //   { day: "Wednesday", temp: 75, isRecordTemp: true }
   // ]

   // Tìm ngày đầu tiên trong số các ngày có nhiệt độ trên 70
   const firstAbove70 = tempsAbove70.find(temp => temp.isRecordTemp);
   console.log(firstAbove70);
   // { day: "Tuesday", temp: 72, isRecordTemp: true }
   ```

---

### **Tóm lại:**
- Sử dụng **`filter`** khi bạn muốn **một tập hợp các phần tử** thỏa mãn điều kiện.
- Sử dụng **`find`** khi bạn chỉ muốn **một phần tử duy nhất** thỏa mãn điều kiện.