### **Sử dụng Lớp (Class) và Kế Thừa (Inheritance) trong JavaScript**

---

#### **1. Tạo lớp `Product` cơ bản**
- **Mô tả:** Lớp `Product` quản lý dữ liệu cơ bản của sản phẩm như `name`, `price`, và `discountable`.

**Ví dụ:**
```javascript
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  // Phương thức kiểm tra sản phẩm có thể giảm giá
  isDiscountable() {
    return this.discountable;
  }
}

// Khởi tạo đối tượng sản phẩm
const coffeeMaker = new Product("Coffee Maker", 99, true);
console.log(coffeeMaker.name); // 'Coffee Maker'
console.log(coffeeMaker.isDiscountable()); // true
```

---

#### **2. Vấn đề khi thêm thuộc tính mới**
- **Mô tả:** Nếu cửa hàng muốn thêm thuộc tính mới (ví dụ: phần trăm giảm giá), việc sửa đổi trực tiếp lớp `Product` sẽ gây bất tiện và ảnh hưởng đến tất cả các đối tượng hiện có.

---

#### **3. Tạo lớp `SaleProduct` kế thừa từ `Product`**
- **Mô tả:** Tạo lớp `SaleProduct` kế thừa từ `Product`, thêm thuộc tính `percentOff` để quản lý giảm giá.

**Ví dụ:**
```javascript
class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
    // Gọi constructor của lớp cha để khởi tạo các thuộc tính cơ bản
    super(name, price, discountable);
    this.percentOff = percentOff;
  }

  // Phương thức tính giá sau khi giảm giá
  getSalePrice() {
    if (this.isDiscountable()) {
      return this.price - (this.price * this.percentOff) / 100;
    } else {
      return `${this.name} is not eligible for a discount.`;
    }
  }
}

// Khởi tạo sản phẩm giảm giá
const blender = new SaleProduct("Blender", 150, true, 20);
console.log(blender.name); // 'Blender'
console.log(blender.getSalePrice()); // 120
```

---

#### **4. Sử dụng từ khóa `extends`**
- **Mô tả:** Từ khóa `extends` được sử dụng để thiết lập quan hệ kế thừa giữa lớp con (`SaleProduct`) và lớp cha (`Product`).

---

#### **5. Hàm tạo và từ khóa `super`**
- **Mô tả:** Lớp con phải gọi `super` để khởi tạo các thuộc tính của lớp cha. Nếu không gọi `super`, JavaScript sẽ báo lỗi.

**Ví dụ:**
```javascript
class Appliance extends Product {
  constructor(name, price, discountable, brand) {
    super(name, price, discountable); // Gọi constructor của lớp cha
    this.brand = brand;
  }

  // Phương thức hiển thị thông tin
  getInfo() {
    return `${this.brand} ${this.name} costs $${this.price}.`;
  }
}

const fridge = new Appliance("Refrigerator", 800, false, "LG");
console.log(fridge.getInfo()); // 'LG Refrigerator costs $800.'
```

---

#### **6. Chia sẻ phương thức giữa lớp cha và lớp con**
- **Mô tả:** Lớp con có thể sử dụng lại phương thức của lớp cha thông qua `super`.

**Ví dụ:**
```javascript
class LuxuryProduct extends Product {
  constructor(name, price, discountable, luxuryTax) {
    super(name, price, discountable);
    this.luxuryTax = luxuryTax;
  }

  // Ghi đè phương thức tính giá để thêm thuế
  getTotalPrice() {
    const basePrice = this.isDiscountable()
      ? this.price - (this.price * this.percentOff) / 100
      : this.price;

    return basePrice + this.luxuryTax;
  }
}

const watch = new LuxuryProduct("Luxury Watch", 2000, true, 300);
console.log(watch.getTotalPrice()); // 2300
```

---

#### **7. Phương thức `getSalePrice`**
- **Mô tả:** Lớp con `SaleProduct` có thể thêm các phương thức đặc biệt mà lớp cha không có, như tính giá sau khi giảm giá.

**Ví dụ:**
```javascript
const saleItem = new SaleProduct("Vacuum Cleaner", 500, true, 15);
console.log(saleItem.getSalePrice()); // 425
```

---

#### **8. Lưu ý khi sử dụng kế thừa**
- **Mô tả:** Tránh việc thay đổi lớn ở lớp cha, vì nó có thể ảnh hưởng đến tất cả các lớp con kế thừa.

---

#### **9. Ví dụ về React**
- **Mô tả:** Thư viện React sử dụng mô hình kế thừa trong JavaScript để xây dựng các tính năng như `Component`. Hầu hết các class component đều kế thừa từ lớp `React.Component`.

**Ví dụ (React):**
```javascript
class MyComponent extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}
```

---

### **Tóm lại:**
- Lớp `Product` quản lý các thuộc tính cơ bản.
- Lớp `SaleProduct` kế thừa từ `Product` để thêm tính năng mới như giảm giá.
- `super` và `extends` giúp tái sử dụng mã hiệu quả.
- Khi sử dụng kế thừa, cần giữ các lớp nhỏ gọn và dễ bảo trì.