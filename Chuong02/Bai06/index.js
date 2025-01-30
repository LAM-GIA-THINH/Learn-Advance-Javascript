// Thách thức: Đối tượng recommendations chứa một tập hợp các địa điểm đẹp để ghé thăm ở Brighton, Vương quốc Anh,
// được sắp xếp theo những gì bạn muốn làm (ăn bánh kếp, uống cà phê, v.v.).

// 1. Destructure các địa điểm để uống (cà phê và bia) từ recommendations
// 2. Destructure các địa điểm nghe nhạc
// 3. Viết một hàm lấy đối tượng recommendations làm đối số và
// a) Ghi nhật ký các địa điểm âm nhạc trong recommendations khi được gọi
// b) Sử dụng object descructuring để lấy các khóa "traditional" và "jazz" từ đối số

const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}

const { beer, coffe } = recommendations;

const { music: { traditional, jazz } } = recommendations;

console.log(jazz)

function displayMusicPlaces({ music: { traditional, jazz } }) {
    console.log(`Head to ${traditional} or ${jazz} to listen to great music!`)
}

displayMusicPlaces(recommendations);