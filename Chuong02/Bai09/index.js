// Thử thách:
// 1. Lấy đối tượng (chứa địa điểm yêu thích ở Brighton, Vương quốc Anh) và biến nó thành Map
// 2. Thêm thuộc tính boolean 'visited' để chỉ ra những địa điểm bạn đã đến
// 3. Thêm thuộc tính số nguyên 'averageBill' với số tiền bạn chi tiêu trung bình ở đó
// 4. Lấy một trong các thuộc tính bằng phương thức get()
const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};

const favouritePlaceMap = new Map([
    ['music', 'jazz'],
    ['name', 'Paris House'],
    ['visited', true],
    ['averageBill', 17.4]
]);

console.log(favouritePlaceMap.get('averageBill'));