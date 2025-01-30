### **1. Các kiểu dữ liệu primitive**
**Lý thuyết:**  
Primitive bao gồm `undefined`, `null`, `boolean`, `number`, `string`, `symbol`.  
**Ví dụ:**
```javascript
const a = undefined;
const b = null;
const c = true; // boolean
const d = 42; // number
const e = "Hello"; // string
const f = Symbol("id"); // symbol (không trùng lặp)
```

---

### **2. Sao chép giá trị khi gán hoặc truyền hàm (Primitive)**
**Lý thuyết:**  
Primitive được sao chép giá trị khi gán hoặc truyền vào hàm.  
**Ví dụ:**
```javascript
let x = 10;
let y = x; // y nhận bản sao của giá trị 10
x = 20;

console.log(x); // 20
console.log(y); // 10 (không bị ảnh hưởng bởi x)
```

---

### **3. Tính immutable của primitive**
**Lý thuyết:**  
Primitive không thể thay đổi giá trị gốc.  
**Ví dụ:**
```javascript
let str = "hello";
str[0] = "H"; // Cố gắng thay đổi ký tự đầu
console.log(str); // "hello" (không thay đổi)

str = "Hello"; // Gán lại giá trị mới (tạo primitive mới)
console.log(str); // "Hello"
```

---

### **4. Object được gán bằng tham chiếu**
**Lý thuyết:**  
Object không sao chép giá trị mà chỉ sao chép tham chiếu.  
**Ví dụ:**
```javascript
const obj1 = { name: "Alice" };
const obj2 = obj1; // obj2 trỏ đến cùng object với obj1

obj1.name = "Bob";
console.log(obj2.name); // "Bob" (cùng tham chiếu)
```

---

### **5. So sánh object**
**Lý thuyết:**  
Hai object giống nhau về nội dung nhưng khác tham chiếu được coi là khác nhau.  
**Ví dụ:**
```javascript
const a = { value: 10 };
const b = { value: 10 };

console.log(a === b); // false (khác tham chiếu)
console.log({} === {}); // false
```

---

### **6. Thêm thuộc tính linh hoạt**
**Lý thuyết:**  
Object cho phép thêm/xóa thuộc tính, primitive thì không.  
**Ví dụ:**
```javascript
// Thêm thuộc tính vào object
const user = { name: "Alice" };
user.age = 30;
console.log(user); // { name: "Alice", age: 30 }

// Thêm thuộc tính vào primitive (không hợp lệ)
const num = 42;
num.prop = "test";
console.log(num.prop); // undefined
```

---

### **7. Truyền tham chiếu trong hàm**
**Lý thuyết:**  
Khi object được truyền vào hàm, thay đổi qua tham chiếu ảnh hưởng đến object gốc.  
**Ví dụ:**
```javascript
function updatePrimitive(val) {
  val = 100; // Không ảnh hưởng đến bên ngoài
}

function updateObject(obj) {
  obj.value = 100; // Thay đổi object gốc
}

let num = 50;
updatePrimitive(num);
console.log(num); // 50 (không đổi)

const data = { value: 50 };
updateObject(data);
console.log(data.value); // 100 (đã thay đổi)
```

---

### **8. Symbol và tính duy nhất**
**Lý thuyết:**  
Mỗi symbol là duy nhất, dù có cùng mô tả.  
**Ví dụ:**
```javascript
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false
console.log(Symbol() === Symbol()); // false
```

---

### **Tổng kết ví dụ phức hợp**
```javascript
// Primitive: Sao chép giá trị
let a = 5;
let b = a;
a = 10;
console.log(a, b); // 10, 5

// Object: Sao chép tham chiếu
const objA = { x: 1 };
const objB = objA;
objA.x = 2;
console.log(objB.x); // 2

// So sánh tham chiếu
console.log({} === {}); // false
console.log(objA === objB); // true

// Thêm thuộc tính vào object
objA.y = 20;
console.log(objA); // { x: 2, y: 20 }

// Symbol uniqueness
console.log(Symbol("key") === Symbol("key")); // false
```

**Giải thích:**  
- Primitive sao chép giá trị, object sao chép tham chiếu.  
- Object có thể mở rộng thuộc tính, primitive thì không.  
- Symbol luôn tạo giá trị duy nhất, kể cả khi mô tả giống nhau.