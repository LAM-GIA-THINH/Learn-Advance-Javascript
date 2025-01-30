// Thử thách: Viết một hàm đếm ngược với số bắt đầu được hard-code bên trong closure
// Mục tiêu nâng cao: Viết một hàm đếm ngược có thể đếm từ một số được cung cấp,
// với một bước nhảy được cung cấp

function countdown(startingNumber, step) {   
    let countFromNum = startingNumber + step;   
    return function decrease() {     
        countFromNum -= step;     
        return countFromNum;   
    } 
}  

const countingDown = countdown(20, 5);  

console.log(countingDown()); 
console.log(countingDown()); 
console.log(countingDown());