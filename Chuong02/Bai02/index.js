// Thử thách:
// 1. Tạo ba biến - bar, cafe, restaurant - và gán giá trị của chúng thành một quán bar, một quán cafe và một nhà hàng ở thành phố của bạn
// 2. Tạo một đối tượng - favouritePlaces - và điền vào nó các biến từ bài tập 1
// 3. Nếu bạn chưa sử dụng cú pháp viết tắt thuộc tính của đối tượng, hãy thay đổi mã của bạn để sử dụng cú pháp đó
// 4. Tạo một phương thức trong đối tượng - greeting() - để ghi ra một thông điệp trong console
// 5. Gọi phương thức greeting() và cũng ghi ra nhà hàng yêu thích của bạn trong console

const bar = "Bar Boca";
const cafe = "Aku Aku";
const restaurant = "Colonel Mustard";

const favouritePlaces = {
    bar,
    cafe,
    restaurant,
    greeting() {
        console.log("Hello there!");
    }
}

console.log(favouritePlaces);

favouritePlaces.greeting();

console.log(favouritePlaces.restaurant)
