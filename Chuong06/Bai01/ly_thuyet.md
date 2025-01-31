### **Modules trong JavaScript**

---

#### **1. Modules là gì**
Modules là các file JavaScript riêng biệt, giúp chia nhỏ ứng dụng thành các phần nhỏ, độc lập, có thể tái sử dụng, đồng thời chia sẻ code giữa chúng. Mỗi file script được coi là một module. 

Để sử dụng module, khai báo kiểu của script là `module` trong HTML:
```html
<script type="module" src="index.js"></script>
```

---

#### **2. Mục đích của module**
- **Phân chia trách nhiệm (Separation of concerns):** Mỗi module đảm nhận một công việc cụ thể, giúp code dễ quản lý và bảo trì.
- **Cô lập code:** Các biến và hàm trong module có phạm vi riêng, không ảnh hưởng đến các module khác. Modules luôn chạy ở **strict mode**.
- **Tái sử dụng code:** Chia sẻ logic giữa các module khác, giảm lặp code.

---

#### **3. Cách chia sẻ code giữa các module**

##### **a. Sử dụng `export`**
Từ khóa `export` dùng để đánh dấu các giá trị muốn chia sẻ ra ngoài module.

- **Named export:** 
  Xuất nhiều giá trị từ một module, phải import theo đúng tên.

**Ví dụ:**
```javascript
// utils.js
export const PI = 3.14;
export function calculateArea(radius) {
  return PI * radius * radius;
}
export function calculateCircumference(radius) {
  return 2 * PI * radius;
}
```

```javascript
// main.js
import { PI, calculateArea, calculateCircumference } from './utils.js';

console.log(PI); // 3.14
console.log(calculateArea(5)); // 78.5
console.log(calculateCircumference(5)); // 31.4
```

- **Default export:** 
  Mỗi module chỉ được phép có một default export. Khi import, không cần dùng dấu ngoặc nhọn và có thể đặt tên khác.

**Ví dụ:**
```javascript
// math.js
export default function add(a, b) {
  return a + b;
}
```

```javascript
// main.js
import sum from './math.js';

console.log(sum(2, 3)); // 5
```

- **Sử dụng cả `named` và `default export` trong cùng một module:**
Mặc dù có thể sử dụng cả hai trong một file, nhưng không khuyến nghị vì dễ gây nhầm lẫn.

**Ví dụ:**
```javascript
// shapes.js
export const square = (x) => x * x;
export default function circle(radius) {
  return Math.PI * radius * radius;
}
```

```javascript
// main.js
import circle, { square } from './shapes.js';

console.log(circle(5)); // 78.5398...
console.log(square(5)); // 25
```

---

##### **b. Sử dụng `import`**
Từ khóa `import` dùng để nhập các giá trị từ module khác. 

- **Import tất cả các giá trị (Import namespace):**
  Nhập toàn bộ các export vào một object và truy cập qua tên object.

**Ví dụ:**
```javascript
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```javascript
// main.js
import * as Utils from './utils.js';

console.log(Utils.add(5, 3)); // 8
console.log(Utils.subtract(5, 3)); // 2
```

- **Đổi tên khi import (`as`):**
  Sử dụng từ khóa `as` để đổi tên giá trị import.

**Ví dụ:**
```javascript
// math.js
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
```

```javascript
// main.js
import { multiply as mul, divide as div } from './math.js';

console.log(mul(6, 3)); // 18
console.log(div(6, 3)); // 2
```

---

#### **4. Đường dẫn trong import**
- Khi import một module, cần cung cấp **đường dẫn tương đối** (hoặc tuyệt đối) đến file đó, bao gồm cả đuôi `.js`.
- **Ví dụ:** 
```javascript
import { getDate } from './utils/date.js';
```

---

#### **5. Lưu ý khi sử dụng modules**
- **Tính toán một lần:** Mỗi module chỉ được tính toán (**evaluated**) một lần khi import. Các lần import sau sẽ sử dụng kết quả đã được lưu trữ.
- **Cô lập code:** Biến và hàm trong module không rò rỉ ra ngoài trừ khi được `export`.
- **Chỉ dùng một kiểu export:** Nên chọn giữa `named` hoặc `default export` trong một module để tránh nhầm lẫn.
- **Import luôn ở đầu file:** Các lệnh `import` nên được đặt ở đầu file để dễ đọc.

---

### **Tóm lại**
Modules giúp tổ chức code một cách khoa học, tái sử dụng và tránh xung đột. Khi viết ứng dụng lớn, việc sử dụng modules sẽ giúp code dễ bảo trì và gọn gàng hơn.