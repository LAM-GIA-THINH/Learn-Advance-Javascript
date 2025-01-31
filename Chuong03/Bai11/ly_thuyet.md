### **Sử dụng Spread Operator và các phương pháp thao tác với mảng trong JavaScript**

---

#### **Thêm phần tử vào mảng**

1. **`unshift()`**
   - Thêm phần tử vào đầu mảng nhưng làm thay đổi mảng gốc.  

   **Ví dụ:**
   ```javascript
   const breakfastMenu = ['Toast', 'Eggs'];
   breakfastMenu.unshift('Pancakes'); // Thay đổi mảng gốc
   console.log(breakfastMenu); // ['Pancakes', 'Toast', 'Eggs']
   ```

2. **Spread operator (`...`)**
   - Dùng để thêm phần tử vào đầu hoặc cuối mảng mà không thay đổi mảng gốc.

   **Ví dụ:**
   ```javascript
   const breakfastMenu = ['Toast', 'Eggs'];
   const updatedMenu = ['Pancakes', ...breakfastMenu]; // Tạo mảng mới
   console.log(breakfastMenu); // ['Toast', 'Eggs'] (không bị thay đổi)
   console.log(updatedMenu); // ['Pancakes', 'Toast', 'Eggs']
   ```

   **Kết hợp nhiều mảng:**
   ```javascript
   const breakfastMenu = ['Toast', 'Eggs'];
   const dinnerMenu = ['Steak', 'Salad'];
   const fullMenu = [...breakfastMenu, ...dinnerMenu];
   console.log(fullMenu); // ['Toast', 'Eggs', 'Steak', 'Salad']
   ```

---

#### **Spread operator**

1. **Chức năng:**
   - Trải rộng các phần tử của một mảng vào một danh sách.

2. **Tạo bản sao nông:**
   - Spread operator tạo ra bản sao nông của mảng, nghĩa là các phần tử không phải đối tượng thì độc lập, nhưng nếu là đối tượng, chúng vẫn tham chiếu đến cùng một vị trí trong bộ nhớ.

   **Ví dụ:**
   ```javascript
   const originalArray = [1, 2, 3];
   const shallowCopy = [...originalArray];
   shallowCopy.push(4);
   console.log(originalArray); // [1, 2, 3] (không bị thay đổi)
   console.log(shallowCopy); // [1, 2, 3, 4]
   ```

---

#### **Sử dụng `slice()` để lấy một phần của mảng**

1. **Tạo subarray:**
   - `slice()` trả về một mảng mới với các phần tử trong khoảng chỉ định.

   **Ví dụ:**
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const subArray = numbers.slice(1, 4); // Từ index 1 đến index 4 (không bao gồm 4)
   console.log(subArray); // [2, 3, 4]
   ```

2. **Kết hợp với spread operator:**
   - Dùng để tạo mảng mới với các phần tử đã chọn.

   **Ví dụ:**
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const updatedArray = [...numbers.slice(0, 2), 10, ...numbers.slice(2)];
   console.log(updatedArray); // [1, 2, 10, 3, 4, 5]
   ```

---

#### **Sử dụng `findIndex()` để tìm index của một phần tử**

1. **Chức năng:**
   - Tìm vị trí của phần tử đầu tiên thỏa mãn điều kiện.

   **Ví dụ:**
   ```javascript
   const numbers = [10, 20, 30, 40];
   const index = numbers.findIndex(num => num === 30);
   console.log(index); // 2
   ```

2. **Kết hợp với `slice()` và spread operator:**

   - **Cập nhật phần tử:**
     ```javascript
     const numbers = [10, 20, 30, 40];
     const index = numbers.findIndex(num => num === 30);

     const updatedNumbers = [
       ...numbers.slice(0, index),
       35, // Phần tử mới
       ...numbers.slice(index + 1)
     ];

     console.log(updatedNumbers); // [10, 20, 35, 40]
     ```

   - **Xóa phần tử:**
     ```javascript
     const numbers = [10, 20, 30, 40];
     const index = numbers.findIndex(num => num === 30);

     const newNumbers = [
       ...numbers.slice(0, index),
       ...numbers.slice(index + 1)
     ];

     console.log(newNumbers); // [10, 20, 40]
     ```

---

#### **Tổng kết**
1. **Spread operator (`...`):**
   - Thêm phần tử một cách bất biến.
   - Kết hợp mảng, tạo bản sao nông.

2. **`slice()`:**
   - Tạo subarray, kết hợp với spread để cập nhật hoặc xóa phần tử.

3. **`findIndex()`:**
   - Tìm vị trí phần tử để thao tác.

4. **Ưu điểm của cách tiếp cận bất biến:**
   - Tránh lỗi logic khó phát hiện.
   - Giữ dữ liệu gốc không thay đổi, giúp ứng dụng dễ kiểm soát hơn.

Việc kết hợp linh hoạt các phương pháp trên sẽ giúp bạn làm việc với mảng trong JavaScript hiệu quả và tránh lỗi mutation không mong muốn.