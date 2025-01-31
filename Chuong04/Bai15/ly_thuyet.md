*   **Vòng lặp `for`** vẫn hữu ích và được sử dụng trong nhiều tình huống. Mặc dù có các phương thức mảng như `map` và `forEach`, vòng lặp `for` cung cấp các tính năng đặc biệt không có trong các phương thức này.

*   **`break`**:
    *   Từ khóa *`break`* được dùng để **thoát khỏi vòng lặp sớm**.
    *   Khi gặp *`break`*, vòng lặp sẽ **dừng lại ngay lập tức** và không thực hiện các vòng lặp tiếp theo.
    *   Ví dụ, trong đoạn code được cung cấp, `break` được sử dụng để dừng vòng lặp khi gặp một năm lớn hơn hoặc bằng năm cắt (cutoff year), tức là năm 2024.
    *   Cần chú ý đến thứ tự của dữ liệu khi sử dụng *`break`*. Nếu dữ liệu không theo thứ tự thời gian, có thể **bỏ sót** các dữ liệu cần xử lý.

*   **`continue`**:
    *   Từ khóa *`continue`* dùng để **bỏ qua một phần tử** hiện tại trong vòng lặp và chuyển sang **phần tử tiếp theo**.
    *   Khi gặp *`continue`*, vòng lặp sẽ **không thực hiện các câu lệnh còn lại** trong lần lặp hiện tại và tiếp tục với lần lặp tiếp theo.
    *   Ví dụ, `continue` được sử dụng để bỏ qua các khoản hoàn tiền (refunds) khi tính tổng chi tiêu.

*   **So sánh với các phương thức mảng**:
    *   Các phương thức mảng như `map` và `forEach` thường được dùng để duyệt qua toàn bộ mảng.
    *   Nếu cần **bỏ qua** hoặc **dừng** vòng lặp sớm, cần có các giải pháp phức tạp hơn hoặc dùng đến `filter`, nhưng vòng lặp `for` có sẵn tính năng này qua `break` và `continue`.

**Ví dụ 1: Sử dụng break để tìm số chẵn đầu tiên trong mảng**
```javascript
const numbers = [1, 3, 5, 6, 7, 8, 9];
let firstEven = null;

for (let num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break; // Dừng ngay khi tìm thấy số chẵn đầu tiên
    }
}
console.log("Số chẵn đầu tiên:", firstEven); // Output: 6
```

**Ví dụ 2: Sử dụng continue để tính tổng số dương**
```javascript
const values = [1, -2, 3, -4, 5, -6];
let sum = 0;

for (let value of values) {
    if (value < 0) {
        continue; // Bỏ qua các số âm
    }
    sum += value;
}
console.log("Tổng các số dương:", sum); // Output: 9
```

**Ví dụ 3: Kết hợp break và continue trong xử lý đơn hàng**
```javascript
const orders = [
    { id: 1, status: "pending", total: 100 },
    { id: 2, status: "cancelled", total: 150 },
    { id: 3, status: "completed", total: 200 },
    { id: 4, status: "completed", total: 300 },
    { id: 5, status: "error", total: 250 }
];

let completedOrdersTotal = 0;

for (let order of orders) {
    // Dừng xử lý khi gặp lỗi
    if (order.status === "error") {
        console.log("Phát hiện đơn hàng lỗi!");
        break;
    }
    
    // Bỏ qua đơn hàng đã hủy
    if (order.status === "cancelled") {
        continue;
    }
    
    // Chỉ tính tổng cho đơn hàng đã hoàn thành
    if (order.status === "completed") {
        completedOrdersTotal += order.total;
    }
}

console.log("Tổng giá trị đơn hàng hoàn thành:", completedOrdersTotal); // Output: 500
```

