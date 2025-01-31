### **Phong cách code: Imperative vs Declarative**

---

#### **1. Tổng quan**
- Có **hai phong cách chính** trong lập trình:
  1. **Imperative (mệnh lệnh):** Tập trung vào việc mô tả từng bước cụ thể mà chương trình cần thực hiện để đạt được kết quả.
  2. **Declarative (khai báo):** Tập trung vào việc mô tả kết quả mong muốn, để chương trình tự xác định cách thực hiện.

---

#### **2. Đặc điểm của Imperative Code**
- **Phù hợp cho máy tính:** Người lập trình phải chỉ định từng bước rõ ràng để đạt được kết quả.
- **Khó đọc hơn:** Người đọc cần theo dõi logic từng bước, dễ gây nhầm lẫn hoặc khó hiểu với các đoạn code phức tạp.

**Ví dụ:**
Sử dụng vòng lặp `for` để tạo lời mời:
```javascript
const people = ["Alice", "Bob", "Charlie"];
const invitations = [];

// Imperative code: duyệt qua từng người và tạo lời mời
for (let i = 0; i < people.length; i++) {
  invitations.push(`Dear ${people[i]}, you are invited to the party!`);
}

console.log(invitations);
// Output: [
//   "Dear Alice, you are invited to the party!",
//   "Dear Bob, you are invited to the party!",
//   "Dear Charlie, you are invited to the party!"
// ]
```

---

#### **3. Đặc điểm của Declarative Code**
- **Phù hợp cho con người:** Người lập trình chỉ cần mô tả kết quả mong muốn, chương trình sẽ tự xử lý các bước cần thiết.
- **Dễ đọc và dễ hiểu hơn:** Code ngắn gọn, tập trung vào kết quả, tránh các biến và logic trung gian.

**Ví dụ:**
Sử dụng `map` để tạo lời mời:
```javascript
const people = ["Alice", "Bob", "Charlie"];

// Declarative code: tạo lời mời bằng cách áp dụng hàm `map`
const invitations = people.map(person => `Dear ${person}, you are invited to the party!`);

console.log(invitations);
// Output: [
//   "Dear Alice, you are invited to the party!",
//   "Dear Bob, you are invited to the party!",
//   "Dear Charlie, you are invited to the party!"
// ]
```

---

#### **4. So sánh Imperative và Declarative**
| **Tiêu chí**            | **Imperative**                               | **Declarative**                             |
|--------------------------|----------------------------------------------|---------------------------------------------|
| **Tập trung**            | Các bước thực hiện cụ thể                    | Kết quả mong muốn                           |
| **Độ dài code**          | Dài hơn, thường có nhiều biến trung gian     | Ngắn gọn, rõ ràng hơn                       |
| **Độ khó đọc**           | Khó đọc hơn, cần theo dõi từng bước logic     | Dễ đọc hơn, tập trung vào mục đích cuối cùng|
| **Ưu tiên**              | Máy tính                                     | Con người                                   |

---

#### **5. Lợi ích của Declarative Code**
- **Dễ đọc, dễ bảo trì:** Code rõ ràng, dễ hiểu hơn khi làm việc nhóm hoặc xem lại sau một thời gian dài.
- **Ngắn gọn, tập trung:** Tránh các biến trung gian hoặc logic phức tạp không cần thiết.
- **Khả năng mở rộng:** Thích hợp hơn cho các ứng dụng lớn nhờ vào tính cô đọng và dễ bảo trì.

---

#### **6. Mục tiêu viết code**
- **Code cho con người:** Hãy viết code dễ đọc và dễ hiểu cho chính bạn và các nhà phát triển khác.
- **Tái sử dụng code:** Đừng chỉ viết để code chạy đúng, mà hãy viết sao cho code dễ dàng tái sử dụng và mở rộng.
- **Ưu tiên phong cách declarative:** Nên chuyển đổi các đoạn code phức tạp sang phong cách declarative để cải thiện tính dễ đọc và bảo trì.

---

#### **7. Ví dụ minh họa**

##### **Ví dụ 1: Tính tổng các số chẵn trong mảng**
**Imperative Code:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

// Imperative: Tính tổng bằng cách duyệt qua từng phần tử
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

console.log(sum); // Output: 12
```

**Declarative Code:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Declarative: Sử dụng filter và reduce
const sum = numbers
  .filter(num => num % 2 === 0) // Lọc các số chẵn
  .reduce((acc, num) => acc + num, 0); // Tính tổng

console.log(sum); // Output: 12
```

---

##### **Ví dụ 2: Đếm số từ trong một chuỗi**
**Imperative Code:**
```javascript
const text = "This is an example sentence.";
let wordCount = 0;

// Imperative: Đếm số từ bằng cách duyệt qua các ký tự
for (let i = 0; i < text.length; i++) {
  if (text[i] === " " || i === text.length - 1) {
    wordCount++;
  }
}

console.log(wordCount); // Output: 5
```

**Declarative Code:**
```javascript
const text = "This is an example sentence.";

// Declarative: Sử dụng split
const wordCount = text.split(" ").length;

console.log(wordCount); // Output: 5
```

---

### **Tóm tắt**
- **Imperative code:** Chi tiết từng bước, phù hợp với máy tính, nhưng khó đọc.
- **Declarative code:** Tập trung vào kết quả, dễ đọc hơn, phù hợp cho con người.
- **Nên ưu tiên declarative code:** Giúp code ngắn gọn, dễ bảo trì, và thân thiện với người đọc.