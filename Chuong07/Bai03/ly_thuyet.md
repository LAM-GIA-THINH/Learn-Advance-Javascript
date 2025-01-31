### 1. **Đệ quy là gì?**
Đệ quy là kỹ thuật một **hàm gọi lại chính nó** để giải quyết vấn đề bằng cách chia thành các bài toán con nhỏ hơn. Đệ quy gồm hai phần quan trọng:
- **Base Case (Điều kiện dừng)**: Quyết định khi nào dừng đệ quy, tránh lặp vô hạn.
- **Recursive Case (Bước đệ quy)**: Gọi lại hàm với bài toán nhỏ hơn, tiến dần về base case.

---

### 2. Ví dụ 1: Tính giai thừa (Factorial)
**Giai thừa** của số `n` (ký hiệu `n!`) là tích các số từ `1` đến `n`.  
Ví dụ: `3! = 3 × 2 × 1 = 6`.

#### Cách triển khai đệ quy:
```javascript
function factorial(n) {
  // Base case: Dừng khi n = 0 hoặc 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n! = n × (n-1)!
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3)); // Kết quả: 6
```

#### Giải thích từng bước:
1. **Gọi `factorial(3)`**:
   - `3 !== 0` và `3 !== 1` → chạy recursive case.
   - Trả về `3 * factorial(2)` → cần tính `factorial(2)`.
2. **Gọi `factorial(2)`**:
   - Trả về `2 * factorial(1)` → cần tính `factorial(1)`.
3. **Gọi `factorial(1)`**:
   - Đạt base case → trả về `1`.
4. **Unwind (Mở ngược) call stack**:
   - `factorial(1) = 1` → `factorial(2) = 2 * 1 = 2`.
   - `factorial(2) = 2` → `factorial(3) = 3 * 2 = 6`.

---

### 3. Ví dụ 2: Dãy Fibonacci
Số Fibonacci thứ `n` là tổng hai số trước đó:  
`fib(n) = fib(n-1) + fib(n-2)` với `fib(0) = 0`, `fib(1) = 1`.

#### Triển khai đệ quy:
```javascript
function fibonacci(n) {
  // Base case
  if (n === 0) return 0;
  if (n === 1) return 1;
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Kết quả: 8 (vì dãy: 0,1,1,2,3,5,8)
```

#### Lưu ý:
- Đệ quy Fibonacci **không hiệu quả** với `n` lớn do tính toán trùng lặp (ví dụ: `fib(5)` gọi `fib(4)` và `fib(3)`, nhưng `fib(3)` đã được tính ở `fib(4)`).
- Giải pháp: Dùng vòng lặp hoặc **memoization** (ghi nhớ kết quả đã tính).

---

### 4. Ví dụ 3: Duyệt cấu trúc lồng (Nested Object)
Giả sử cần tính tổng tất cả số trong một object có nhiều cấp:

```javascript
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: 4,
};

function sumNumbers(obj) {
  let sum = 0;
  for (const key in obj) {
    // Nếu giá trị là số, cộng vào tổng
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
    // Nếu giá trị là object, đệ quy để tính tổng bên trong
    else if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += sumNumbers(obj[key]);
    }
  }
  return sum;
}

console.log(sumNumbers(nestedObject)); // Kết quả: 1 + 2 + 3 + 4 = 10
```

---

### 5. Lỗi thường gặp và lưu ý
1. **Quên base case**: Dẫn đến đệ quy vô hạn, gây **stack overflow**.
   ```javascript
   // Ví dụ lỗi:
   function infiniteRecursion() {
     infiniteRecursion(); // Gọi lại chính nó không có điều kiện dừng
   }
   ```

2. **Không tiến về base case**: Tham số không thay đổi sau mỗi lần đệ quy.
   ```javascript
   // Ví dụ lỗi:
   function faultyRecursion(n) {
     if (n === 0) return 1;
     return n * faultyRecursion(n); // Tham số không giảm, gọi mãi với n
   }
   ```

3. **Stack size limit**: JavaScript giới hạn độ sâu call stack (khoảng 10,000-100,000 tùy trình duyệt). Với bài toán lớn, nên dùng vòng lặp.

---

### 6. Khi nào dùng đệ quy?
- **Bài toán có cấu trúc đệ quy**: Fibonacci, giai thừa, duyệt cây/thư mục.
- **Code sạch và dễ đọc** hơn vòng lặp (nếu bài toán phù hợp).
- **Lưu ý**: Đánh đổi giữa readability và hiệu năng. Đệ quy có thể chậm và tốn bộ nhớ hơn vòng lặp.

---

### Tóm tắt:
- **Đệ quy** là hàm gọi lại chính nó, cần **base case** và **recursive case**.
- Ví dụ: Giai thừa, Fibonacci, xử lý object lồng.
- Cẩn thận với lỗi vô hạn và giới hạn call stack.
- Sử dụng khi bài toán tự nhiên phù hợp với đệ quy, ưu tiên readability.