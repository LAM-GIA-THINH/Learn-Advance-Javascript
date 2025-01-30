// Thử thách: Viết lại hàm đầu tiên từ thử thách trước đó thành một arrow function.
// Mục tiêu nâng cao: Viết lại closure đếm ngược dưới dạng arrow function.

// Bắt đầu thử thách
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10, 2));
console.log(splitBill(10, 4)); 
console.log(splitBill(10, 5));


// Bắt đầu mục tiêu nâng cao 
const countdown = (startingNumber, step) => {
 let countFromNum = startingNumber + step;
 return () => countFromNum -= step;
}

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());