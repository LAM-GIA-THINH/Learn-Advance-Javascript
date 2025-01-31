### **Ví dụ 1: Tính điểm trung bình (có lỗi khi thiếu initial value)**
```javascript
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 78 }
];

// ❌ Cách viết sai (không có initial value)
const totalGradeError = students.reduce((total, currentStudent) => {
  return total.grade + currentStudent.grade; // Lỗi vì total ban đầu là object
});

console.log(totalGradeError); // NaN (Not a Number)
```

---

### **Ví dụ 2: Tính điểm trung bình đúng cách (với initial value)**
```javascript
// ✅ Cách viết đúng (initial value = 0)
const totalGrade = students.reduce((total, currentStudent) => {
  return total + currentStudent.grade;
}, 0); // Khởi tạo total = 0

const averageGrade = totalGrade / students.length;
console.log(`Điểm trung bình: ${averageGrade}`); // 84.333...
```

**Giải thích từng bước:**
1. **Lần lặp 1:**  
   `total = 0` + `currentStudent.grade = 85` → **85**  
2. **Lần lặp 2:**  
   `total = 85` + `currentStudent.grade = 90` → **175**  
3. **Lần lặp 3:**  
   `total = 175` + `currentStudent.grade = 78` → **253**  
4. **Kết quả:**  
   `253 / 3 = 84.333...`

---

### **Ví dụ 3: Xử lý mảng rỗng an toàn**
```javascript
const emptyClass = [];
const safeAverage = emptyClass.reduce((total, student) => {
  return total + student.grade;
}, 0) / (emptyClass.length || 1); // Tránh chia 0

console.log(safeAverage); // 0
```

---

### **Ví dụ 4: Dùng reduce để thống kê nâng cao**
```javascript
// Tính điểm cao nhất và thấp nhất
const gradeStats = students.reduce((stats, student) => {
  stats.max = Math.max(stats.max, student.grade);
  stats.min = Math.min(stats.min, student.grade);
  return stats;
}, { max: -Infinity, min: Infinity }); // Initial value là object

console.log(gradeStats); // { max: 90, min: 78 }
```

---

### **Ví dụ 5: Kết hợp map và reduce**
```javascript
// Tính điểm trung bình của học sinh có điểm >= 80
const filteredAverage = students
  .map(student => student.grade) // Chuyển thành mảng điểm [85, 90, 78]
  .filter(grade => grade >= 80) // Lọc điểm >= 80 [85, 90]
  .reduce((total, grade, _, arr) => {
    return total + grade / arr.length; // Tính trung bình trực tiếp
  }, 0);

console.log(filteredAverage); // (85 + 90)/2 = 87.5
```

---

### **Tóm tắt nguyên tắc quan trọng**
1. **Luôn khởi tạo giá trị ban đầu** (`initialValue`) phù hợp với kiểu dữ liệu mong muốn:
   ```javascript
   .reduce(callback, 0) // Số
   .reduce(callback, []) // Mảng
   .reduce(callback, {}) // Object
   ```

2. **Tên biến mô tả rõ ràng**:
   ```javascript
   // Thay vì:
   .reduce((acc, cur) => ...)
   // Nên viết:
   .reduce((total, currentStudent) => ...)
   ```

3. **Xử lý trường hợp mảng rỗng** để tránh lỗi runtime:
   ```javascript
   const safeResult = array.length ? array.reduce(...) : 0;
   ```