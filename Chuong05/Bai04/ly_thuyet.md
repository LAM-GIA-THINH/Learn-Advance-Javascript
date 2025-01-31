### **Lớp (Class) trong JavaScript**

---

#### **1. Lớp là một cách viết "sạch" hơn cho hàm tạo và prototype**
- **Mô tả:** Lớp giúp tổ chức mã dễ đọc hơn khi làm việc với hàm tạo và `prototype`. Chúng thực chất chỉ là một cú pháp mới (syntactic sugar) cho cách làm việc cũ.

---

#### **2. Lớp thực chất là hàm**
- **Mô tả:** Khi kiểm tra kiểu dữ liệu của một lớp, ta thấy nó có kiểu `function`.

**Ví dụ:**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

console.log(typeof Person); // 'function'
```

---

#### **3. Cách khai báo lớp**
- **Mô tả:** Sử dụng từ khóa `class`, tên lớp viết hoa chữ cái đầu, và khai báo các phương thức trực tiếp trong thân lớp.

**Ví dụ:**
```javascript
class Animal {
  // Phương thức khởi tạo
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  // Phương thức
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

// Khởi tạo đối tượng
const dog = new Animal('Dog', 'Woof');
dog.makeSound(); // Output: "Dog says Woof"
```

---

#### **4. `constructor` là phương thức đặc biệt**
- **Mô tả:** `constructor` được dùng để khởi tạo các thuộc tính của đối tượng và nhận tham số từ quá trình khởi tạo.

**Ví dụ:**
```javascript
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}

const user = new User('john_doe', 'john@example.com');
console.log(user.username); // 'john_doe'
console.log(user.email);    // 'john@example.com'
```

---

#### **5. Phương thức lưu trên prototype**
- **Mô tả:** Các phương thức trong lớp không phải thuộc tính trực tiếp của đối tượng mà được lưu trên `prototype` của lớp.

**Ví dụ:**
```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getInfo() {
    return `${this.brand} ${this.model}`;
  }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getInfo()); // 'Toyota Corolla'

// Kiểm tra phương thức trên prototype
console.log(Car.prototype.getInfo === myCar.getInfo); // true
```

---

#### **6. Truy cập thuộc tính và phương thức**
- **Mô tả:** Dùng cú pháp dấu chấm `.` để truy cập các thuộc tính và phương thức của đối tượng.

**Ví dụ:**
```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    return `${this.title} by ${this.author}`;
  }
}

const book = new Book('1984', 'George Orwell');
console.log(book.title);          // '1984'
console.log(book.describe());     // '1984 by George Orwell'
```

---

#### **7. `this` context trong phương thức**
- **Mô tả:** Trong phương thức của lớp, `this` tham chiếu đến đối tượng đang gọi phương thức.

**Ví dụ:**
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter();
counter.increment(); // 1
counter.increment(); // 2
```

---

#### **8. Mọi thứ trong lớp đều là public**
- **Mô tả:** Hiện tại, JavaScript không hỗ trợ các thuộc tính private cho lớp. Tất cả các thuộc tính và phương thức đều có thể truy cập từ bên ngoài.

**Ví dụ:**
```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const product = new Product('Laptop', 1000);
console.log(product.name);  // 'Laptop'
console.log(product.price); // 1000
```

---

#### **So sánh với hàm tạo (constructor function)**
- Cách làm tương tự nhưng cú pháp lớp gọn gàng hơn.

**Ví dụ sử dụng hàm tạo:**
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person = new Person('Alice', 25);
person.greet(); // 'Hello, my name is Alice'
```

**Ví dụ tương tự dùng lớp:**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person('Alice', 25);
person.greet(); // 'Hello, my name is Alice'
```

---

### **Tóm lại:**
- **Lớp (class)** giúp mã nguồn dễ đọc, gọn gàng hơn khi làm việc với `constructor` và `prototype`.
- Cung cấp cú pháp trực quan, rõ ràng để định nghĩa các thuộc tính và phương thức.
- Vẫn duy trì cơ chế hoạt động dựa trên `prototype` của JavaScript.