**Sự khác biệt giữa đối tượng (object) và mảng (array):**

---

### **Đối tượng (Object):**
- **Sử dụng cặp key-value** để lưu trữ dữ liệu.  
  ```javascript
  const student = {
    name: "Nam",
    age: 20,
    class: "12A1"
  };
  console.log(student.name); // "Nam"
  ```

- **Thích hợp** để quản lý, truy xuất và cập nhật dữ liệu khi bạn biết key:  
  ```javascript
  student.age = 21; // Cập nhật giá trị age
  console.log(student.age); // 21
  ```

- **Không duy trì thứ tự** các phần tử:  
  ```javascript
  const info = { a: 1, b: 2, c: 3 };
  info.d = 4; // Thứ tự thêm không ảnh hưởng đến cách lưu trữ
  console.log(info); // { a: 1, b: 2, c: 3, d: 4 }
  ```

- **Khó khăn trong việc xóa phần tử cuối cùng**:  
  Nếu không biết key của phần tử, bạn phải duyệt toàn bộ object.  
  ```javascript
  delete student["class"]; // Xóa key cụ thể
  ```

---

### **Mảng (Array):**
- **Là một loại đối tượng đặc biệt**, **duy trì thứ tự** các phần tử:  
  ```javascript
  const fruits = ["Táo", "Cam", "Chuối"];
  console.log(fruits[0]); // "Táo"
  ```

- Có **index** đánh số từ 0:  
  ```javascript
  fruits[2] = "Xoài"; // Thay đổi giá trị ở index 2
  console.log(fruits); // ["Táo", "Cam", "Xoài"]
  ```

- **Phương thức hỗ trợ quản lý dễ dàng**:  
  - **Thêm phần tử** vào cuối mảng:  
    ```javascript
    fruits.push("Nho");
    console.log(fruits); // ["Táo", "Cam", "Xoài", "Nho"]
    ```
  - **Xóa phần tử cuối cùng**:  
    ```javascript
    fruits.pop();
    console.log(fruits); // ["Táo", "Cam", "Xoài"]
    ```

- **Tự động quản lý index**, không cần tự đặt key:  
  ```javascript
  fruits.push("Dưa hấu");
  console.log(fruits.length); // 4
  ```

- **Thích hợp** khi thứ tự quan trọng:  
  ```javascript
  const scores = [100, 90, 80];
  scores.sort(); // Sắp xếp
  console.log(scores); // [80, 90, 100]
  ```

---

### **Tóm lại:**
- **Object**: Thích hợp khi dữ liệu cần được truy cập thông qua **key cụ thể**.  
- **Array**: Thích hợp khi **thứ tự dữ liệu** quan trọng và cần các thao tác linh hoạt.