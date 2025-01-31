// Thử thách:
// 1. Tạo một mảng - favouriteSongs[] - và thêm 3 bài hát yêu thích của bạn bằng cách sử dụng push()
// 2. In bài hát cuối cùng trong mảng và làm sao cho giải pháp của bạn sẽ In bài hát cuối cùng bất kể có bao nhiêu mục trong mảng
// 3. Gọi phương thức pop trên mảng bạn đã tạo. Bạn còn lại những giá trị nào trong mảng?

const favouriteSongs = [];

favouriteSongs.push("Like a rolling stone");
favouriteSongs.push("Blowing in the wind");
favouriteSongs.push("Mr Tambourine man");
favouriteSongs.push("It aint me");

console.log(favouriteSongs);

console.log(favouriteSongs[favouriteSongs.length - 1])

favouriteSongs.pop();

console.log(favouriteSongs[favouriteSongs.length - 1])
