### **Từ khóa `this` trong JavaScript**

---

#### **1. Định nghĩa cơ bản**
- `this` là một tham chiếu đến **một đối tượng**.
- Giá trị của `this` không phải cố định, mà được xác định **động** dựa trên cách hàm được gọi.

---

#### **2. Các ngữ cảnh chính của `this`**

##### **a. Ngữ cảnh toàn cục**
- Trong một script thông thường:
  - `this` tham chiếu đến đối tượng toàn cục (`window` trong trình duyệt, hoặc `global` trong Node.js).
  - Trong **strict mode**: `this` là `undefined`.

**Ví dụ:**
```javascript
// Không dùng strict mode
console.log(this); // window (trình duyệt)

// Sử dụng strict mode
"use strict";
console.log(this); // undefined
```

---

##### **b. Phương thức của đối tượng**
- Khi gọi một hàm như một **phương thức** của đối tượng, `this` tham chiếu đến **đối tượng đó**.
- Nó là đối tượng nằm **bên trái dấu chấm** khi gọi phương thức.

**Ví dụ:**
```javascript
const obj = {
  name: "Alice",
  greet() {
    console.log(this.name); // `this` là obj
  }
};

obj.greet(); // Alice
```

**Lưu ý:** Nếu gán một phương thức của đối tượng cho một biến, giá trị của `this` sẽ không còn là đối tượng ban đầu nữa:
```javascript
const greetFn = obj.greet;
greetFn(); // undefined (trong strict mode)
```

---

##### **c. Hàm khởi tạo (Constructor) hoặc class**
- Khi một class hoặc hàm constructor được gọi với từ khóa `new`, `this` tham chiếu đến **instance mới được tạo**.

**Ví dụ:**
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Bob");
person1.greet(); // Hello, my name is Bob
```

---

##### **d. Trình xử lý sự kiện DOM**
- Trong trình xử lý sự kiện DOM, `this` tham chiếu đến **phần tử DOM mà sự kiện xảy ra** (`event.target`).

**Ví dụ:**
```javascript
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this); // `this` là button
});
```

**Lưu ý:** Nếu dùng **arrow function** trong trình xử lý sự kiện, `this` sẽ không tham chiếu đến phần tử DOM mà kế thừa từ ngữ cảnh cha.
```javascript
button.addEventListener("click", () => {
  console.log(this); // `this` là `window` (hoặc `undefined` trong strict mode)
});
```

---

#### **3. Thay đổi giá trị của `this`**

##### **a. `call` và `apply`**
- Cho phép gọi hàm với một giá trị `this` cụ thể.
- **`call`:** Truyền các tham số riêng lẻ.
- **`apply`:** Truyền các tham số dưới dạng mảng.

**Ví dụ:**
```javascript
function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello"); // Hello, my name is Alice
greet.apply(person, ["Hi"]); // Hi, my name is Alice
```

---

##### **b. `bind`**
- Tạo ra một hàm mới với `this` được cố định (bind) vào một đối tượng cụ thể.

**Ví dụ:**
```javascript
const obj = {
  name: "Alice"
};

function greet() {
  console.log(`Hello, ${this.name}`);
}

const boundGreet = greet.bind(obj);
boundGreet(); // Hello, Alice
```

---

#### **4. Arrow functions**
- Arrow functions không có binding `this` riêng. Thay vào đó, chúng kế thừa `this` từ ngữ cảnh bao quanh.

**Ví dụ:**
```javascript
const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // `this` kế thừa từ global
  }
};

obj.greet(); // undefined (strict mode)
```

---

#### **5. Tóm tắt quy tắc của `this`**

| **Ngữ cảnh**                  | **Giá trị của `this`**                                      |
|-------------------------------|-------------------------------------------------------------|
| **Global (non-strict)**       | Đối tượng toàn cục (`window`, `global`)                     |
| **Global (strict)**           | `undefined`                                                 |
| **Object method**             | Đối tượng bên trái dấu chấm (`obj.method()`)                |
| **Constructor function/class**| Instance mới được tạo ra (`new ClassName()`)                |
| **DOM event handler**         | Phần tử DOM mà sự kiện xảy ra                               |

---

#### **6. Ví dụ tổng hợp**
```javascript
"use strict";

function globalContext() {
  console.log(this); // undefined (strict mode)
}

const obj = {
  name: "Alice",
  greet() {
    console.log(this.name); // Alice
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name); // Bob
  }
}

const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this); // button
});

button.addEventListener("click", () => {
  console.log(this); // undefined (strict mode)
});

// Changing `this` using `call`, `apply`, and `bind`
function introduce(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const user = { name: "John" };
introduce.call(user, "Hi"); // Hi, my name is John
introduce.apply(user, ["Hello"]); // Hello, my name is John
const boundIntroduce = introduce.bind(user);
boundIntroduce("Hey"); // Hey, my name is John
```