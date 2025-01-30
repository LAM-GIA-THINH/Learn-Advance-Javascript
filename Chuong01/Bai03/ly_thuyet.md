### **Vấn đề với biến toàn cục và biến cục bộ:**
**Lý thuyết:**  
Biến toàn cục dễ gây xung đột dữ liệu, trong khi biến cục bộ bị xóa sau khi hàm thực thi xong.

**Ví dụ:**  
```javascript
// Biến toàn cục - nguy hiểm
let count = 0;
function increaseCount() {
  count++;
  console.log(count);
}
increaseCount(); // 1 (ai cũng có thể thay đổi 'count')
count = 100; // Dữ liệu bị can thiệp trực tiếp

// Biến cục bộ - mất giá trị sau mỗi lần gọi
function createCounter() {
  let num = 0;
  num++;
  return num;
}
console.log(createCounter()); // 1
console.log(createCounter()); // 1 (num luôn khởi tạo lại)
```

---

### **Closure là gì?**
**Lý thuyết:**  
Hàm bên trong có thể truy cập và giữ biến từ hàm bên ngoài, ngay cả khi hàm ngoài đã kết thúc.

**Ví dụ:**  
```javascript
function outer() {
  const message = "Hello, Closure!";
  function inner() {
    console.log(message); // Truy cập biến từ hàm ngoài
  }
  return inner;
}

const showMessage = outer();
showMessage(); // "Hello, Closure!" (inner vẫn nhớ 'message')
```

---

### **Cách closure hoạt động:**
**Lý thuyết:**  
Hàm inner được tạo ra và giữ tham chiếu đến biến của outer scope.

**Ví dụ:**  
```javascript
function createGame() {
  let score = 0;
  function addPoint() {
    score++;
    console.log("Score:", score);
  }
  return addPoint;
}

const game = createGame();
game(); // Score: 1
game(); // Score: 2 (giữ lại giá trị score qua các lần gọi)
```

---

### **Đặc điểm của closure:**
#### **Chỉ có ở hàm:**
**Ví dụ:**  
```javascript
function createCounter() {
  let count = 0;
  const counter = {
    increment: function() { count++; }, // Hàm -> tạo closure
    value: count // Giá trị nguyên thủy, không phải closure
  };
  return counter;
}

const c = createCounter();
c.increment();
console.log(c.value); // 0 (value không phải closure, chỉ lấy giá trị ban đầu)
```

#### **Thực thi ở phạm vi khác:**
**Ví dụ:**  
```javascript
function initClock() {
  const time = "12:00";
  setTimeout(function showTime() {
    console.log("Current time:", time); // Closure giữ 'time' dù initClock đã chạy xong
  }, 1000);
}
initClock(); // Sau 1 giây: "Current time: 12:00"
```

---

### **Tại sao closure quan trọng?**
**Ví dụ 1 - Lưu trữ giá trị:**  
```javascript
function createTimer() {
  let start = Date.now();
  return function() {
    console.log("Elapsed:", Date.now() - start);
  };
}

const getElapsed = createTimer();
// ... Sau một khoảng thời gian ...
getElapsed(); // Hiển thị thời gian đã trôi qua
```

**Ví dụ 2 - Quản lý dữ liệu riêng tư:**  
```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function(amount) { balance += amount; },
    withdraw: function(amount) { balance -= amount; },
    getBalance: function() { return balance; }
  };
}

const account = createBankAccount(1000);
account.withdraw(500);
console.log(account.getBalance()); // 500 (balance được bảo vệ)
```

---

### **Ví dụ về closure với tham số:**
**Lý thuyết:**  
Closure có thể thay đổi giá trị dựa trên tham số từ hàm ngoài.

**Ví dụ:**  
```javascript
function createMultiplier(factor) {
  return function(number) {
    return number * factor; // 'factor' được giữ lại từ tham số
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15
```

---

### **Tổng kết:**
Closure là công cụ mạnh để quản lý trạng thái và dữ liệu trong JavaScript. Các ví dụ trên minh họa cách closure giải quyết các vấn đề thực tế như đếm số lần, quản lý dữ liệu riêng tư, và tạo hàm động dựa trên tham số.