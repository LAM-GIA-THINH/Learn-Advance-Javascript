// Thử thách:
// Thường thì trong quá trình phát triển, bạn có thể sử dụng lại mã của người khác.
// Trong thử thách này, chúng ta có một hàm giả mô phỏng việc lấy dữ liệu của người dùng
// từ API và trả về cho bạn một số thông tin chi tiết.
// Sử dụng các mô-đun để nhập hàm getUser và hiển thị dữ liệu trên màn hình.

// Đừng quên gọi new App() ở cuối.

// Mã stub thử thách:
import getUser from './utils/getUser.js';

class App {
constructor() {
this.render();
}

render() {
const user = getUser();
console.log(user);
document.getElementById('root').innerHTML = `
<div>${user.name} hoạt động với ${user.company}</div>
`
}
}

new App();