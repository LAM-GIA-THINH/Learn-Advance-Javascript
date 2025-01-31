# 🌟 Linked List là gì?
**Linked List** (danh sách liên kết) là một cấu trúc dữ liệu gồm các phần tử (gọi là **node**) được kết nối với nhau theo thứ tự. Mỗi node chứa:
- **Data**: Dữ liệu của node
- **Next**: Con trỏ trỏ đến node kế tiếp (hoặc `null` nếu là node cuối)

![Linked List Visualization](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

# 🆚 So sánh với Array
| Đặc điểm         | Array              | Linked List         |
|------------------|--------------------|---------------------|
| Kích thước       | Cố định            | Linh hoạt           |
| Truy cập phần tử | O(1)               | O(n)                |
| Chèn/Xóa đầu     | O(n)               | O(1)                |
| Bộ nhớ           | Liền kề            | Phân tán            |

# 💻 Triển khai Linked List trong JavaScript

## 1. Tạo Lớp Node
```javascript
class Node {
  constructor(data) {
    this.data = data; // Dữ liệu
    this.next = null; // Con trỏ next
  }
}
```

## 2. Tạo Lớp LinkedList
```javascript
class LinkedList {
  constructor() {
    this.head = null; // Node đầu tiên
  }
}
```

## 3. Các Phương Thức Cơ Bản

### ➕ Thêm vào đầu (Prepend)
```javascript
prepend(data) {
  const newNode = new Node(data);
  newNode.next = this.head; // Node mới trỏ đến head cũ
  this.head = newNode; // Cập nhật head mới
}
```

### ➕ Thêm vào cuối (Append)
```javascript
append(data) {
  const newNode = new Node(data);
  
  if (!this.head) {
    this.head = newNode;
    return;
  }
  
  let current = this.head;
  while (current.next) { // Duyệt đến node cuối
    current = current.next;
  }
  current.next = newNode; // Node cuối trỏ đến node mới
}
```

### 🗑️ Xóa Node
```javascript
delete(data) {
  if (!this.head) return;

  // Xóa node đầu
  if (this.head.data === data) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  while (current.next) {
    if (current.next.data === data) {
      current.next = current.next.next; // Bỏ qua node cần xóa
      return;
    }
    current = current.next;
  }
}
```

### 🔍 Duyệt Linked List
```javascript
print() {
  let current = this.head;
  let result = [];
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  console.log(result.join(' -> '));
}
```

# 📝 Ví dụ Sử Dụng
```javascript
const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);
list.print(); // "5 -> 10 -> 20"

list.delete(10);
list.print(); // "5 -> 20"
```

# ✔️ Ưu Điểm
- Chèn/xóa phần tử **nhanh** ở đầu và cuối (O(1))
- Kích thước **linh hoạt**, không cần khai báo trước
- Tận dụng bộ nhớ hiệu quả

# ❌ Nhược Điểm
- Truy cập phần tử chậm (phải duyệt từ đầu)
- Tốn thêm bộ nhớ lưu trữ con trỏ
- Không thể truy cập ngẫu nhiên

# 💡 Lời Khuyên
- Dùng khi cần thao tác chèn/xóa thường xuyên
- Tránh dùng khi cần truy cập ngẫu nhiên nhiều
- Kết hợp với các cấu trúc khác như hash tables để tối ưu

Bạn có thể thử nghiệm thêm các phương thức như `insertAt(position)`, `reverse()` hoặc triển khai **doubly linked list** để hiểu sâu hơn!