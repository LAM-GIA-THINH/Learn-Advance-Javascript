// Thử thách:
// Trong nhà hàng của chúng ta, đầu bếp có một số món ăn ưa thích trong hai danh mục khác nhau.
// Đầu bếp thích tất cả các món ăn bắt đầu bằng "S", trong khi phần còn lại là các món ăn thông thường
// Sử dụng hàm hủy mảng để tạo các mảng các món ăn ưa thích của đầu bếp là thịt và
// cá, và để tạo các mảng các món thịt và cá thông thường

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Chỉnh sửa các biến này
// let chefsFishDishes;
// let regularFishDishes;

// let chefsMeatDishes;
// let regularMeatDishes;
let [chefsFishDishes, ...regularFishDishes] = fishDishes;

let [regularMeatDishes ,...chefsMeatDishes] = meatDishes;

// console.log(chefsFishDishes);
// console.log(regularFishDishes);
// console.log(regularMeatDishes);
// console.log(chefsMeatDishes);

// Dùng spread để tạo 2 mảng
let chefsDishes = [...chefsMeatDishes, chefsFishDishes]
let regularDishes = [...regularFishDishes, regularMeatDishes];
console.log(chefsDishes);
console.log(regularDishes);