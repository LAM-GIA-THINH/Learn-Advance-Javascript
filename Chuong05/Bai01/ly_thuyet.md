Hàm tạo (constructor func)
### **Vấn đề & Giải pháp:**
* **Vấn đề:** Tạo thủ công nhiều đối tượng giống nhau dẫn đến code trùng lặp.
  ```javascript
  // ❌ Cách không hiệu quả:
  const student1 = {
    id: 1,
    name: "Alice",
    subjects: [],
    addSubject() { /* ... */ }
  };
  const student2 = {
    id: 2,
    name: "Bob",
    subjects: [],
    addSubject() { /* ... */ }
  }; // Lặp lại code cho mỗi đối tượng
  ```

* **Giải pháp:** Dùng hàm tạo để tạo đối tượng hàng loạt.
  ```javascript
  // ✅ Hàm tạo Student (quy ước viết hoa chữ cái đầu)
  function Student(id, name, subjects) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }
  ```

---

### **Cách hoạt động:**
* **Từ khóa `this` và `new`:**
  ```javascript
  // Tạo đối tượng với new
  const student1 = new Student(1, "Alice", []);
  const student2 = new Student(2, "Bob", ["Math"]);

  console.log(student1.name); // "Alice"
  console.log(student2.subjects); // ["Math"]

  // ❌ Không dùng new: this trỏ đến global object/undefined
  const faultyStudent = Student(3, "Charlie", []);
  console.log(faultyStudent); // undefined (gây lỗi nếu truy cập thuộc tính)
  ```

---

### **Prototype & Chia sẻ phương thức:**
* **Thêm phương thức vào prototype:**
  ```javascript
  // Thêm phương thức addSubject
  Student.prototype.addSubject = function(subject) {
    this.subjects.push(subject);
    console.log(`${this.name} đã thêm môn ${subject}`);
  };

  // Sử dụng phương thức
  student1.addSubject("Physics"); // "Alice đã thêm môn Physics"
  console.log(student1.subjects); // ["Physics"]
  ```

* **Lỗi thường gặp với arrow function:**
  ```javascript
  // ❌ Arrow function làm this trỏ sai
  Student.prototype.printName = () => {
    console.log(this.name); // this không phải là đối tượng Student
  };
  student1.printName(); // undefined

  // ✅ Dùng function declaration
  Student.prototype.printName = function() {
    console.log(this.name); // "Alice"
  };
  ```

---

### **Ví dụ hoàn chỉnh:**
```javascript
function Student(id, name, subjects) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

// Thêm phương thức vào prototype
Student.prototype.addSubject = function(subject) {
  this.subjects.push(subject);
};

Student.prototype.removeSubject = function(subject) {
  this.subjects = this.subjects.filter(s => s !== subject);
};

// Tạo và sử dụng đối tượng
const student1 = new Student(1, "Alice", []);
const student2 = new Student(2, "Bob", ["Chemistry"]);

student1.addSubject("Math");
student1.addSubject("Biology");
student1.removeSubject("Math");

console.log(student1.subjects); // ["Biology"]
console.log(student2.subjects); // ["Chemistry"]
```

---

### **Kiểm tra prototype:**
```javascript
// Các đối tượng dùng chung phương thức từ prototype
console.log(student1.addSubject === student2.addSubject); // true

// Prototype chain
console.log(student1.__proto__ === Student.prototype); // true
console.log(Student.prototype.constructor === Student); // true
```

---

### **Tổng hợp ví dụ phức tạp:**
```javascript
// Quản lý lớp học
function Classroom(className) {
  this.className = className;
  this.students = [];
}

Classroom.prototype.enroll = function(student) {
  this.students.push(student);
  console.log(`${student.name} đã tham gia lớp ${this.className}`);
};

const mathClass = new Classroom("Toán nâng cao");
mathClass.enroll(student1); // "Alice đã tham gia lớp Toán nâng cao"
mathClass.enroll(student2); // "Bob đã tham gia lớp Toán nâng cao"

console.log(mathClass.students); // [student1, student2]
```

Các ví dụ trên minh họa cách xây dựng hệ thống đối tượng linh hoạt với constructor và prototype, giúp code dễ bảo trì và mở rộng.