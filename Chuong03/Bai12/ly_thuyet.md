### **Destructuring Mảng trong JavaScript**

---

#### **1. Gán giá trị từ mảng vào biến**
- **Mô tả:** Destructuring cho phép bạn trích xuất các giá trị từ mảng và gán chúng vào các biến riêng biệt mà không cần sử dụng chỉ số index.

**Ví dụ:**
```javascript
const finalMenuItems = ['Pizza', 'Burger', 'Pasta'];

// Trích xuất các giá trị
const [first, second, third] = finalMenuItems;

console.log(first); // 'Pizza'
console.log(second); // 'Burger'
console.log(third); // 'Pasta'
```

---

#### **2. Cú pháp Destructuring**
- **Mô tả:** Sử dụng dấu ngoặc vuông `[]` để chỉ định các biến. Thứ tự các biến tương ứng với thứ tự phần tử trong mảng.

**Ví dụ:**
```javascript
const menu = ['Soup', 'Salad', 'Steak'];
const [starter, main, dessert] = menu;

console.log(starter); // 'Soup'
console.log(main); // 'Salad'
console.log(dessert); // 'Steak'
```

---

#### **3. Không làm thay đổi mảng gốc**
- **Mô tả:** Destructuring chỉ tạo các biến mới từ giá trị của mảng gốc mà không thay đổi nó.

**Ví dụ:**
```javascript
const drinks = ['Tea', 'Coffee', 'Juice'];
const [hotDrink, coldDrink] = drinks;

console.log(drinks); // ['Tea', 'Coffee', 'Juice'] (mảng gốc không bị thay đổi)
console.log(hotDrink); // 'Tea'
console.log(coldDrink); // 'Coffee'
```

---

#### **4. Chỉ destructure các giá trị cần thiết**
- **Mô tả:** Bạn có thể chỉ trích xuất những giá trị cần dùng mà không cần toàn bộ mảng.

**Ví dụ:**
```javascript
const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
const [favorite, secondFavorite] = fruits;

console.log(favorite); // 'Apple'
console.log(secondFavorite); // 'Banana'
```

---

#### **5. Hoán đổi giá trị biến**
- **Mô tả:** Destructuring có thể được dùng để hoán đổi giá trị giữa hai biến.

**Ví dụ:**
```javascript
let a = 1;
let b = 2;

// Hoán đổi giá trị
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
```

---

#### **6. Toán tử rest**
- **Mô tả:** Toán tử rest (`...`) được sử dụng để thu thập các phần tử còn lại của mảng vào một mảng mới.

**Ví dụ:**
```javascript
const finalMenuItems = ['Pizza', 'Burger', 'Pasta', 'Salad'];
const [winner, ...losers] = finalMenuItems;

console.log(winner); // 'Pizza'
console.log(losers); // ['Burger', 'Pasta', 'Salad']
```

---

#### **7. Object shorthand syntax**
- **Mô tả:** Khi dùng `console.log`, sử dụng object shorthand để hiển thị cả tên biến và giá trị của nó.

**Ví dụ:**
```javascript
const finalMenuItems = ['Pizza', 'Burger', 'Pasta'];
const [first, second] = finalMenuItems;

// Sử dụng object shorthand
console.log({ first, second }); // { first: 'Pizza', second: 'Burger' }
```

---

#### **Tóm lại:**
- Destructuring mảng giúp cải thiện tính gọn gàng, dễ đọc khi làm việc với mảng.
- Không thay đổi mảng gốc, giúp tránh lỗi không mong muốn.
- Sử dụng kết hợp với các tính năng như **rest operator** và **object shorthand** để nâng cao hiệu quả làm việc.