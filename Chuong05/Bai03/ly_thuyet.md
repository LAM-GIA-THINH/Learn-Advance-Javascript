### **Prototypical inheritance (Kế thừa nguyên mẫu):**
```javascript
// Hàm tạo Animal
function Animal(name) {
  this.name = name;
}

// Thêm phương thức vào prototype
Animal.prototype.speak = function() {
  console.log(`${this.name} tạo ra tiếng kêu`);
};

// Tạo đối tượng từ hàm tạo
const cat = new Animal("Mèo");
cat.speak(); // "Mèo tạo ra tiếng kêu"

// Kiểm tra kế thừa
console.log(cat instanceof Animal); // true
console.log(Object.getPrototypeOf(cat) === Animal.prototype); // true
```

---

### **Prototype của đối tượng:**
```javascript
const student = new Object(); // Tạo object bằng constructor
student.name = "Alice";

// Lấy prototype của student
const studentPrototype = Object.getPrototypeOf(student);
console.log(studentPrototype === Object.prototype); // true
console.log(studentPrototype.constructor === Object); // true
```

---

### **Constructor Function:**
```javascript
// Hàm tạo viết hoa chữ cái đầu
function Car(brand) {
  this.brand = brand;
}

// Tạo đối tượng hợp lệ
const myCar = new Car("Toyota");
console.log(myCar.brand); // "Toyota"

// Tạo đối tượng không hợp lệ (thiếu new)
const faultyCar = Car("Honda");
console.log(faultyCar); // undefined (this trỏ đến global object)
```

---

### **Prototype chain (Chuỗi nguyên mẫu):**
```javascript
// Tạo chuỗi prototype
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Xin chào, tôi là ${this.name}`);
};

function Student(name, id) {
  Person.call(this, name);
  this.id = id;
}

// Kế thừa prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Sử dụng
const student = new Student("Bob", 123);
student.greet(); // "Xin chào, tôi là Bob" (kế thừa từ Person)

// Kiểm tra chuỗi prototype
console.log(student.__proto__ === Student.prototype); // true
console.log(student.__proto__.__proto__ === Person.prototype); // true
console.log(student.__proto__.__proto__.__proto__ === Object.prototype); // true
console.log(student.__proto__.__proto__.__proto__.__proto__); // null
```

---

### **Các prototype khác:**
```javascript
// Array prototype
const numbers = [1, 2, 3];
console.log(numbers.__proto__ === Array.prototype); // true
numbers.push(4); // Phương thức từ Array.prototype

// Function prototype
function test() {}
console.log(test.__proto__ === Function.prototype); // true
```

---

### **Lưu ý quan trọng:**
```javascript
// ❌ Không sửa Object.prototype trực tiếp
Object.prototype.print = function() {
  console.log(this);
}; // Ảnh hưởng đến TẤT CẢ đối tượng

const obj = { a: 1 };
obj.print(); // {a: 1} (gây side effect)

// ✅ Cách an toàn: Thêm qua constructor function
function SafeObject() {}
SafeObject.prototype.print = function() {
  console.log(this);
};
const safeObj = new SafeObject();
safeObj.print(); // Chỉ ảnh hưởng đối tượng SafeObject
```

---

### **Ví dụ tổng hợp phức tạp:**
```javascript
// Xây dựng hệ thống kế thừa
function Shape(color) {
  this.color = color;
}
Shape.prototype.getColor = function() {
  return this.color;
};

function Circle(color, radius) {
  Shape.call(this, color);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function() {
  return Math.PI * this.radius ** 2;
};

// Sử dụng
const redCircle = new Circle("red", 5);
console.log(redCircle.getColor()); // "red" (kế thừa từ Shape)
console.log(redCircle.getArea()); // ~78.54 (phương thức riêng)

// Kiểm tra prototype chain
console.log(redCircle instanceof Circle); // true
console.log(redCircle instanceof Shape); // true
console.log(redCircle instanceof Object); // true
```

Các ví dụ trên minh họa rõ cách prototype chain hoạt động, cách kế thừa được triển khai trong JavaScript, và những điều cần tránh khi làm việc với prototype.