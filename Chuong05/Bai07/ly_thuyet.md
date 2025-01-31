### **Getters và Setters trong JavaScript**

---

#### **1. Vấn đề với thuộc tính public**
Trong JavaScript, các thuộc tính của đối tượng mặc định là `public`. Điều này có thể gây ra rủi ro khi dữ liệu bị thay đổi không hợp lệ, làm hỏng chương trình.

**Ví dụ:**
```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price; // Có thể bị gán giá trị không hợp lệ
  }
}

const product = new Product("Laptop", 1000);
product.price = "not a number"; // Sai, giá trị phải là số
console.log(product.price); // 'not a number' (gây lỗi trong chương trình)
```

---

#### **2. Getters và Setters là gì?**

- **Getter:** Một phương thức dùng để **lấy giá trị** của thuộc tính, nhưng được truy cập như một thuộc tính thông thường.
- **Setter:** Một phương thức dùng để **thiết lập giá trị** của thuộc tính, với khả năng kiểm tra tính hợp lệ trước khi gán.

**Ví dụ:**
```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price; // Thuộc tính "cầu nối" được bảo vệ
  }

  // Getter cho thuộc tính price
  get price() {
    return `$${this._price.toFixed(2)}`;
  }

  // Setter cho thuộc tính price
  set price(value) {
    if (typeof value === "number" && value >= 0) {
      this._price = value;
    } else {
      console.error("Invalid price value!");
    }
  }
}

const product = new Product("Smartphone", 899);
console.log(product.price); // $899.00 (getter được gọi)

product.price = 950; // Gán giá trị mới bằng setter
console.log(product.price); // $950.00

product.price = -100; // Giá trị không hợp lệ
// Output: "Invalid price value!"
```

---

#### **3. Vai trò của Getters và Setters**

- **Kiểm soát truy cập:** Cho phép kiểm tra và giới hạn cách một thuộc tính được thay đổi.
- **Bảo vệ dữ liệu:** Ngăn chặn việc gán giá trị không hợp lệ.
- **Tạo thuộc tính "ảo":** Giá trị của getter có thể được tính toán dựa trên các thuộc tính khác.

**Ví dụ:**
```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter tính diện tích
  get area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area); // 200 (tính toán bởi getter)
```

---

#### **4. Lưu ý khi sử dụng Getters và Setters**

- **Cặp getter/setter:** Thường dùng cả hai để đọc và ghi dữ liệu đầy đủ.
- **Tránh xung đột tên:** Không thể có một thuộc tính và getter/setter cùng tên.
- **Thuộc tính "cầu nối":** Dùng một thuộc tính (ví dụ: `_price`) để lưu trữ dữ liệu thực tế.
- **Quy ước đặt tên:** Dùng tiền tố `_` cho các thuộc tính "cầu nối".

**Ví dụ:**
```javascript
class User {
  constructor(username, age) {
    this.username = username;
    this._age = age;
  }

  // Getter cho tuổi
  get age() {
    return this._age;
  }

  // Setter cho tuổi, kiểm tra tính hợp lệ
  set age(value) {
    if (value >= 0) {
      this._age = value;
    } else {
      console.error("Age must be a positive number!");
    }
  }
}

const user = new User("john_doe", 30);
console.log(user.age); // 30 (getter được gọi)

user.age = -5; // Sai, không hợp lệ
// Output: "Age must be a positive number!"
```

---

#### **5. Tính bảo mật**
Getter và setter không thể bảo mật tuyệt đối dữ liệu trong JavaScript phía client. Tuy nhiên, chúng cung cấp cơ chế kiểm soát và tín hiệu cho các nhà phát triển khác.

**Ví dụ:**
```javascript
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;
  }

  // Getter chỉ đọc số dư
  get balance() {
    return `$${this._balance.toFixed(2)}`;
  }

  // Setter không được sử dụng để bảo vệ số dư
  set balance(value) {
    console.error("Direct modification of balance is not allowed!");
  }

  // Phương thức để thêm tiền vào tài khoản
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    } else {
      console.error("Invalid deposit amount!");
    }
  }

  // Phương thức để rút tiền
  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    } else {
      console.error("Invalid withdrawal amount!");
    }
  }
}

const account = new BankAccount("Alice", 500);
console.log(account.balance); // $500.00

account.deposit(100);
console.log(account.balance); // $600.00

account.withdraw(200);
console.log(account.balance); // $400.00

account.balance = 1000; // Cố gắng gán trực tiếp
// Output: "Direct modification of balance is not allowed!"
```

---

### **Tóm lại**
- **Getters và setters** giúp kiểm soát truy cập và bảo vệ dữ liệu.
- **Thuộc tính "cầu nối"** và quy ước đặt tên với `_` giúp tránh xung đột tên.
- Cách sử dụng getters và setters trong JavaScript giúp viết mã an toàn, dễ bảo trì hơn.