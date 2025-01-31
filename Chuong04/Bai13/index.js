const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

/*
Thử thách
1. Sử dụng phương thức .reduce() để tìm tổng điểm của tất cả học sinh.
2. Thực hiện một số phép toán đơn giản để ghi ra điểm trung bình của lớp.
*/

const totalGrades = grades.reduce(function(total, currentGrade){
return total + currentGrade
})

console.log(`Điểm trung bình của lớp là ${totalGrades/grades.length}`)