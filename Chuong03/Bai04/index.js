// Thử thách:
// Dưới đây là danh sách 5 bài hát phổ biến nhất trên Spotify.
// 1) Kiểm tra xem có bài hát nào giành giải Grammy không
// 2) Kiểm tra xem tất cả các bài hát có được phát trực tuyến ít nhất 1,5 triệu lần không
// Lưu ý: giá trị timesStreamed đã tính bằng triệu

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const hasWonGrammy = songs.some(song => song.wonGrammy);
console.log(hasWonGrammy);

const allMegaHits = songs.every(song => song.timesStreamed > 1.5);
console.log(allMegaHits);
