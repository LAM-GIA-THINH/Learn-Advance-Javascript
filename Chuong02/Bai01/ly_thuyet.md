### **1. Vấn đề khi sử dụng biến đơn lẻ**
**Lý thuyết:**  
Khi lưu trữ nhiều màu bằng biến riêng lẻ, code trở nên rườm rà và thiếu liên kết.  
**Ví dụ:**
```javascript
const blueColor = "#00f";
const orangeColor = "#F60";
const yellowColor = "#FF0";

// Khi cần ghép các mã màu:
console.log(blueColor + ", " + orangeColor); // "#00f, #F60" 
// Khó quản lý và không thể truy cập theo tên màu
```

---

### **2. Đối tượng (Objects) như một giải pháp**
**Lý thuyết:**  
Đối tượng giúp tổ chức dữ liệu liên quan như một "tủ hồ sơ" với key-value.  
**Ví dụ:**
```javascript
const colors = {
  yellow: "#FF0",
  blue: "#00f",
  orange: "#F60"
};

console.log(colors); // { yellow: "#FF0", blue: "#00f", orange: "#F60" }
```

---

### **3. Cấu trúc Key-Value**
**Lý thuyết:**  
Key là chuỗi định danh, value có thể là bất kỳ kiểu dữ liệu nào.  
**Ví dụ:**
```javascript
const theme = {
  primaryColor: "#FF0", // String
  isDarkMode: false,    // Boolean
  colorCount: 3,        // Number
  metadata: {           // Object lồng nhau
    author: "John"
  }
};
```

---

### **4. Cú pháp Object Literal**
**Lý thuyết:**  
Tạo đối tượng bằng `{}`, phân tách key-value bằng dấu phẩy.  
**Ví dụ:**
```javascript
// Đối tượng rỗng
const emptyObject = {};

// Đối tượng với dữ liệu
const user = {
  name: "Alice",
  age: 30
};
```

---

### **5. Đối tượng lồng nhau (Nested Objects)**
**Lý thuyết:**  
Đối tượng có thể chứa đối tượng khác, tạo cấu trúc phân cấp.  
**Ví dụ:**
```javascript
const colorPalette = {
  primary: {
    red: "#ff0000",
    blue: "#0000ff"
  },
  secondary: {
    orange: "#ff6600",
    purple: "#660099"
  }
};

// Truy cập màu đỏ trong nhóm primary
console.log(colorPalette.primary.red); // "#ff0000"
```

---

### **6. Phương thức (Methods) trên đối tượng**
**Lý thuyết:**  
Phương thức là hàm được định nghĩa trong đối tượng.  
**Ví dụ:**
```javascript
const colorUtils = {
  getHex: function(colorName) {
    return this[colorName];
  },
  // Cú pháp rút gọn
  logAll() {
    console.log(this);
  }
};

console.log(colorUtils.getHex("blue")); // "#00f"
colorUtils.logAll(); // Log toàn bộ đối tượng
```

---

### **7. Truy cập giá trị**
**Lý thuyết:**  
Sử dụng dấu chấm `.` hoặc dấu ngoặc vuông `[]` để truy cập giá trị.  
**Ví dụ:**
```javascript
const colors = { yellow: "#FF0" };

// Dùng dấu chấm
console.log(colors.yellow); // "#FF0"

// Dùng dấu ngoặc vuông (hữu ích khi key có khoảng trắng)
console.log(colors["yellow"]); // "#FF0"
```

---

### **8. Cú pháp rút gọn cho thuộc tính**
**Lý thuyết:**  
Nếu tên biến trùng với key, có thể viết tắt.  
**Ví dụ:**
```javascript
const blue = "#00f";
const orange = "#F60";

// Thay vì { blue: blue, orange: orange }
const colors = { blue, orange };
console.log(colors); // { blue: "#00f", orange: "#F60" }
```

---

### **9. Ứng dụng và hạn chế**
**Lý thuyết:**  
Đối tượng phù hợp cho dữ liệu tĩnh, ít thay đổi. Không phù hợp cho dữ liệu động.  
**Ví dụ:**
```javascript
// Thêm màu mới (không khuyến khích nếu thay đổi thường xuyên)
colors.green = "#0f0";

// Xóa màu
delete colors.blue;

// Dùng Map cho dữ liệu động
const dynamicColors = new Map();
dynamicColors.set("green", "#0f0");
```

---

### **Tổng kết ví dụ phức hợp**
```javascript
const colorManager = {
  palette: {
    warm: { red: "#ff0000", orange: "#ff6600" },
    cool: { blue: "#0000ff", green: "#00ff00" }
  },
  getColor(type, name) {
    return this.palette[type]?.[name] || "Màu không tồn tại";
  },
  addColor(type, name, hex) {
    if (!this.palette[type]) this.palette[type] = {};
    this.palette[type][name] = hex;
  }
};

colorManager.addColor("warm", "yellow", "#ffff00");
console.log(colorManager.getColor("warm", "yellow")); // "#ffff00"
console.log(colorManager.getColor("cool", "blue"));   // "#0000ff"
```

**Giải thích:**  
- Đối tượng `colorManager` quản lý các nhóm màu (warm/cool).  
- Phương thức `getColor` truy xuất màu theo nhóm và tên.  
- Phương thức `addColor` thêm màu mới vào nhóm chỉ định.