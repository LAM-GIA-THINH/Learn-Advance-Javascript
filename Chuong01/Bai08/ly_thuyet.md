**Partial application** là một kỹ thuật sử dụng higher-order function (hàm bậc cao) để lưu trữ dữ liệu thông qua closures.

```javascript
// Ví dụ basic về partial application
function multiply(a, b) {
    return a * b;
}

function multiplyBy(a) {
    return function(b) {
        return multiply(a, b);
    }
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(4)); // 8
console.log(multiplyByTwo(5)); // 10
```

**Partial application cho phép bạn áp dụng một số, nhưng không phải tất cả các tham số của một hàm**, và chờ đợi các tham số còn lại.

```javascript
// Ví dụ về partial application với nhiều tham số
const greet = (greeting, name, title) => `${greeting} ${title} ${name}!`;

const greetWithHello = (name, title) => greet('Hello', name, title);
console.log(greetWithHello('John', 'Mr.')); // "Hello Mr. John!"
```

**Khi một hàm được partially applied, nó trả về một hàm khác** mà đã "khóa" các giá trị đã được cung cấp trước đó thông qua closure.

```javascript
// Ví dụ về lưu trữ giá trị thông qua closure
const createUrlFetcher = (baseUrl) => {
    return (endpoint) => {
        return `${baseUrl}/${endpoint}`;
    }
}

const fetchFromAPI = createUrlFetcher('https://api.example.com');
console.log(fetchFromAPI('users')); // "https://api.example.com/users"
console.log(fetchFromAPI('posts')); // "https://api.example.com/posts"
```

**Partial application giúp giảm tổng số tham số** mà một hàm cần và giúp các hàm có **trách nhiệm đơn lẻ rõ ràng hơn**.

```javascript
// Ví dụ về giảm số tham số và tăng tính tái sử dụng
const calculateTax = (taxRate) => {
    return (amount) => {
        return amount * (1 + taxRate);
    }
}

const calculateVAT = calculateTax(0.1); // 10% VAT
const calculateLuxuryTax = calculateTax(0.2); // 20% Luxury Tax

console.log(calculateVAT(100)); // 110
console.log(calculateLuxuryTax(100)); // 120
```

**Ví dụ thực tế về partial application với xử lý dữ liệu:**

```javascript
// Ví dụ về partial application trong xử lý API
const createApiClient = (baseUrl) => {
    return {
        get: (endpoint) => {
            return fetch(`${baseUrl}/${endpoint}`)
                .then(response => response.json());
        },
        post: (endpoint, data) => {
            return fetch(`${baseUrl}/${endpoint}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json());
        }
    };
};

const socialMediaApi = createApiClient('https://api.socialmedia.com');
const userApi = createApiClient('https://api.users.com');

// Sử dụng
socialMediaApi.get('posts');  // Lấy posts từ social media API
userApi.get('profile');      // Lấy profile từ user API
```

Trong các ví dụ trên, chúng ta có thể thấy partial application giúp code trở nên:
- Dễ tái sử dụng hơn
- Có trách nhiệm rõ ràng hơn
- Giảm thiểu sự lặp lại
- Dễ dàng mở rộng và bảo trì