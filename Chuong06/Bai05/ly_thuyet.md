### **Khái niệm về Reducer trong JavaScript**

---

#### **1. Reducer là gì?**
- Reducer là một **hàm thuần khiết (pure function)** dùng để quản lý trạng thái (state) của ứng dụng.
- Reducer nhận vào **trạng thái hiện tại (current state)** và **một hành động (action)**, sau đó trả về **trạng thái mới (new state)**.
- Reducer là một công cụ quan trọng trong các thư viện và framework JavaScript như React, Angular, Vue, đặc biệt trong Redux hoặc Context API.

---

#### **2. Cấu trúc của Reducer**
```javascript
function reducer(state, action) {
  switch (action.type) {
    case "ACTION_TYPE_1":
      // Cập nhật và trả về trạng thái mới
      return { ...state, key: value };

    case "ACTION_TYPE_2":
      // Một cập nhật khác
      return { ...state, anotherKey: anotherValue };

    default:
      // Trả về trạng thái hiện tại nếu không có action khớp
      return state;
  }
}
```

---

#### **3. Tính chất của Reducer**
- **Hàm thuần túy (Pure Function):**
  - Reducer không thay đổi trực tiếp trạng thái cũ.
  - Với cùng một đầu vào (`state`, `action`), luôn trả về cùng một đầu ra (new state).
  - Không có tác dụng phụ (side effect) như gọi API hoặc thay đổi dữ liệu bên ngoài.

---

#### **4. Action trong Reducer**
- **Action** là một đối tượng mô tả **loại hành động** và **dữ liệu cần thiết** để cập nhật trạng thái.
- Cấu trúc của action:
```javascript
const action = {
  type: "ACTION_TYPE", // Mô tả loại hành động
  payload: { key: value } // (Tùy chọn) Dữ liệu cần thiết để cập nhật
};
```
- **`type`**: Chuỗi (string) mô tả loại hành động. Thường viết hoa, ví dụ: `"INCREMENT_COUNT"`.
- **`payload`**: Chứa thông tin cần thiết để cập nhật trạng thái.

---

#### **5. Quy tắc cập nhật State**
- **Tính bất biến (Immutable):** Trạng thái không được sửa đổi trực tiếp mà phải tạo một bản sao mới.
- Sử dụng **toán tử spread (`...`)** hoặc các công cụ hỗ trợ như `immer` để tạo bản sao của trạng thái.

---

#### **6. Ví dụ về Reducer**

##### **Ví dụ 1: Bộ đếm (Counter)**
```javascript
// State ban đầu
const initialState = { count: 0 };

// Reducer quản lý trạng thái
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }; // Tăng count
    case "DECREMENT":
      return { ...state, count: state.count - 1 }; // Giảm count
    case "RESET":
      return { ...state, count: 0 }; // Reset count
    default:
      return state;
  }
}

// Action
const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };

// Sử dụng reducer
let state = counterReducer(undefined, {}); // Trạng thái ban đầu
state = counterReducer(state, incrementAction); // count = 1
state = counterReducer(state, decrementAction); // count = 0
console.log(state); // Output: { count: 0 }
```

---

##### **Ví dụ 2: Quản lý thông tin người dùng (User)**
```javascript
// State ban đầu
const initialState = { name: "", email: "" };

// Reducer quản lý trạng thái
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload.name }; // Cập nhật tên
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload.email }; // Cập nhật email
    default:
      return state;
  }
}

// Action
const updateNameAction = { type: "UPDATE_NAME", payload: { name: "Alice" } };
const updateEmailAction = { type: "UPDATE_EMAIL", payload: { email: "alice@example.com" } };

// Sử dụng reducer
let userState = userReducer(undefined, {}); // Trạng thái ban đầu
userState = userReducer(userState, updateNameAction); // Cập nhật tên
userState = userReducer(userState, updateEmailAction); // Cập nhật email
console.log(userState); // Output: { name: "Alice", email: "alice@example.com" }
```

---

#### **7. Reducer nâng cao: Kết hợp nhiều Reducer**
- Khi ứng dụng lớn hơn, có thể chia nhỏ reducer thành nhiều reducer quản lý các phần khác nhau của state.

**Ví dụ:**
```javascript
import { combineReducers } from "redux";

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

function userReducer(state = { name: "", email: "" }, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

// Kết quả
const state = rootReducer(undefined, {});
console.log(state);
// Output: { counter: { count: 0 }, user: { name: "", email: "" } }
```

---

#### **8. Tổng kết**
- **Reducer** giúp quản lý trạng thái ứng dụng một cách tổ chức và dễ dự đoán.
- Mỗi action đại diện cho một thay đổi cụ thể, đảm bảo rằng mọi thay đổi trong state đều có kiểm soát.
- Reducer là công cụ mạnh mẽ cho ứng dụng hiện đại, đặc biệt trong các ứng dụng phức tạp sử dụng Redux hoặc Context API.