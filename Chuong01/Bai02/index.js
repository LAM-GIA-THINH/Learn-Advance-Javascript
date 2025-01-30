// Thử thách: Viết một hàm splitBill() cho phép bạn biết bạn cần trả bao nhiêu để chia một hóa đơn giữa bạn và bạn bè.  
// Nó nên trả về một thông báo kèm một con số. 

// Viết mã của bạn bên dưới:
function splitBill(amount, numPeople) {
    return `Each person needs to pay ${amount / numPeople}`;
} 

// Kiểm tra giải pháp của bạn
console.log(splitBill(10, 2));
console.log(splitBill(16, 4));
console.log(splitBill(350, 9));
