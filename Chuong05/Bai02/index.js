// 1. tạo một hàm dựng mới, Book, dùng để ghi lại các cuốn sách trong thư viện trường học (id, title, author, themes[]),
// 2. Thêm id, title và tác giả cho hai cuốn sách yêu thích của bạn.
// 3. Sử dụng từ khóa prototype để thêm thuộc tính theme vào các cuốn sách.
// 4. Thêm ít nhất một theme vào mỗi cuốn sách của bạn.

// Bắt đầu:

function Book(id, title, author, themes = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
    }
    
    Book.prototype.addTheme = function(newTheme) {
    this.themes = [...this.themes, newTheme];
    }
    
    const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
    const book2 = new Book(2, "The Trial", "Franz Kafka");
    book1.addTheme("Fantasy");
    book2.addTheme("Tham nhũng");
    console.log(book1.themes);
    console.log(book2.themes);