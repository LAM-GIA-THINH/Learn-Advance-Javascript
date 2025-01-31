### **Phương thức `every()`**
* **Chức năng**: Kiểm tra xem **tất cả** phần tử trong mảng có thỏa mãn điều kiện không.
* **Kết quả**: Trả về `true` nếu tất cả thỏa mãn, ngược lại `false`.
* **Ví dụ**:
  ```javascript
  const temperatures = [28, 30, 29, 27, 31];
  const allAbove25 = temperatures.every(temp => temp > 25);
  console.log(allAbove25); // true (vì tất cả > 25)

  const scores = [8, 9, 7, 6, 10];
  const allPass = scores.every(score => score >= 7);
  console.log(allPass); // false (vì có điểm 6)
  ```

---

### **Phương thức `some()`**
* **Chức năng**: Kiểm tra xem **ít nhất một** phần tử thỏa mãn điều kiện.
* **Kết quả**: Trả về `true` nếu có ít nhất một phần tử thỏa mãn, ngược lại `false`.
* **Ví dụ**:
  ```javascript
  const steps = [9500, 12000, 8000, 10500];
  const hasReachedGoal = steps.some(step => step >= 10000);
  console.log(hasReachedGoal); // true (vì 12000 và 10500)

  const prices = [199, 299, 159, 99];
  const hasFreeItem = prices.some(price => price === 0);
  console.log(hasFreeItem); // false (không có giá trị 0)
  ```

---

### **Phương thức `find()`**
* **Chức năng**: Trả về **giá trị** của phần tử **đầu tiên** thỏa mãn điều kiện.
* **Kết quả**: Trả về phần tử tìm thấy hoặc `undefined`.
* **Ví dụ**:
  ```javascript
  const invoices = [500, 1200, 800, 1500];
  const firstLargeInvoice = invoices.find(amount => amount > 1000);
  console.log(firstLargeInvoice); // 1200

  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  const user = users.find(u => u.id === 2);
  console.log(user); // { id: 2, name: "Bob" }
  ```

---

### **Phương thức `findIndex()`**
* **Chức năng**: Trả về **chỉ số** của phần tử **đầu tiên** thỏa mãn điều kiện.
* **Kết quả**: Trả về chỉ số (index) hoặc `-1` nếu không tìm thấy.
* **Ví dụ**:
  ```javascript
  const invoices = [500, 1200, 800, 1500];
  const index = invoices.findIndex(amount => amount > 1000);
  console.log(index); // 1 (vị trí của 1200)

  const tasks = [
    { task: "Write report", completed: false },
    { task: "Submit PR", completed: true }
  ];
  const doneTaskIndex = tasks.findIndex(task => task.completed);
  console.log(doneTaskIndex); // 1
  ```

---

### **Phương thức `indexOf()`**
* **Chức năng**: Tìm **vị trí** của phần tử **đầu tiên** có giá trị trùng khớp.
* **Kết quả**: Trả về chỉ số (index) hoặc `-1`.
* **Ví dụ**:
  ```javascript
  const numbers = [10, 20, 26, 30, 26];
  console.log(numbers.indexOf(26)); // 2
  console.log(numbers.indexOf(100)); // -1

  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.indexOf("banana")); // 1
  ```

---

### **Phương thức `at()`**
* **Chức năng**: Trả về phần tử tại vị trí chỉ định (index dương hoặc âm).
* **Kết quả**: Giá trị phần tử hoặc `undefined`.
* **Ví dụ**:
  ```javascript
  const letters = ["a", "b", "c", "d"];
  console.log(letters.at(0)); // "a"
  console.log(letters.at(-1)); // "d" (phần tử cuối)
  console.log(letters.at(3)); // "d"
  console.log(letters.at(5)); // undefined
  ```

---

### Tổng kết
Các phương thức này giúp xử lý mảng linh hoạt hơn:
- **`every()` / `some()`**: Kiểm tra điều kiện trên toàn mảng.
- **`find()` / `findIndex()`**: Tìm kiếm phần tử theo điều kiện.
- **`indexOf()`**: Tìm kiếm theo giá trị chính xác.
- **`at()`**: Truy cập phần tử bằng index linh hoạt (cả số âm).