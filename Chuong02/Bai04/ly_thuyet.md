### **1. Truy cập và sửa đổi giá trị bằng ký hiệu dấu chấm (dot notation):**

- **Lý thuyết:**
  - Truy cập giá trị của một thuộc tính bằng cách sử dụng dấu chấm sau tên đối tượng.
  - Có thể thay đổi hoặc cập nhật giá trị của thuộc tính bằng dấu bằng.
  - Dấu chấm chỉ dùng khi tên thuộc tính không chứa khoảng trắng hoặc ký tự đặc biệt.
  - Có thể thêm thuộc tính mới vào đối tượng bằng ký hiệu này.

- **Ví dụ:**
  ```javascript
  let colors = {
      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF"
  };

  // Truy cập thuộc tính
  console.log(colors.red); // "#FF0000"

  // Sửa đổi thuộc tính
  colors.red = "#F00";
  console.log(colors.red); // "#F00"

  // Thêm thuộc tính mới
  colors.white = "#FFFFFF";
  console.log(colors.white); // "#FFFFFF"
  ```

---

### **2. Thuộc tính động và ký hiệu dấu ngoặc vuông (square bracket notation):**

- **Lý thuyết:**
  - Thuộc tính của đối tượng thực chất là các chuỗi, có thể chứa khoảng trắng hoặc ký tự đặc biệt.
  - Truy cập hoặc thêm thuộc tính chứa khoảng trắng hoặc ký tự đặc biệt bằng dấu ngoặc vuông.
  - Sử dụng biến để truy cập hoặc thêm thuộc tính động.

- **Ví dụ:**
  ```javascript
  let colors = {
      "yellow color": "#FFFF00",
      purple: "#800080"
  };

  // Truy cập thuộc tính có khoảng trắng
  console.log(colors["yellow color"]); // "#FFFF00"

  // Thêm thuộc tính mới bằng biến
  let newColor = "orange";
  let hexCode = "#FFA500";
  colors[newColor] = hexCode;
  console.log(colors.orange); // "#FFA500"

  // Truy cập thuộc tính bằng biến
  let key = "purple";
  console.log(colors[key]); // "#800080"
  ```

---

### **3. Xóa thuộc tính:**

- **Lý thuyết:**
  - Dùng toán tử `delete` để xóa thuộc tính khỏi đối tượng.
  - Có thể sử dụng cả dấu chấm và dấu ngoặc vuông.

- **Ví dụ:**
  ```javascript
  let colors = {
      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF"
  };

  // Xóa thuộc tính bằng dấu chấm
  delete colors.green;
  console.log(colors.green); // undefined

  // Xóa thuộc tính bằng dấu ngoặc vuông
  delete colors["blue"];
  console.log(colors.blue); // undefined
  ```

---

### **4. Ví dụ về hàm `getColor`:**

- **Lý thuyết:**
  - Hàm sử dụng ký hiệu dấu chấm để truy cập thuộc tính động sẽ không hoạt động.
  - Phải dùng ký hiệu dấu ngoặc vuông để đảm bảo truy cập đúng giá trị thuộc tính dựa trên biến.

- **Ví dụ:**
  ```javascript
  let colors = {
      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF"
  };

  function getColor(key) {
      return colors[key]; // Dùng dấu ngoặc vuông thay vì dấu chấm
  }

  console.log(getColor("red")); // "#FF0000"
  console.log(getColor("blue")); // "#0000FF"
  ```

---

### **5. Tính chất động của đối tượng:**

- **Lý thuyết:**
  - Thuộc tính có thể thay đổi hoặc thêm mới sau khi đối tượng được tạo.
  - Thêm thuộc tính một cách động dựa trên dữ liệu thay đổi.

- **Ví dụ:**
  ```javascript
  let colors = {};

  // Thêm thuộc tính động
  let dynamicKey = "black";
  colors[dynamicKey] = "#000000";
  console.log(colors.black); // "#000000"

  // Thay đổi giá trị động
  colors[dynamicKey] = "#111111";
  console.log(colors.black); // "#111111"
  ```

---

### **6. Lưu ý:**

- Nên dùng **ký hiệu dấu chấm** khi làm việc với các thuộc tính tĩnh (cố định).
- Dùng **ký hiệu dấu ngoặc vuông** khi làm việc với các thuộc tính động hoặc chứa ký tự đặc biệt.
- Các **key của object chỉ là string**, nên có thể dùng dấu ngoặc vuông để thêm key chứa khoảng trắng:
  ```javascript
  let obj = {};
  obj["key with space"] = "value";
  console.log(obj["key with space"]); // "value"
  ```
- Cẩn thận khi sử dụng **dấu chấm** vì không thể sử dụng biến làm tên thuộc tính.