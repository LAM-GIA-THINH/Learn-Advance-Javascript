import { playlistArr } from '/playlist.js'

/*
Thử thách
1. Cấu trúc lại mã bên dưới để sử dụng .map()
thay vì vòng lặp for.
⚠️ Đừng lo lắng về dấu phẩy ngay bây giờ.
*/
const playlistHtml = playlistArr.map(function (track) {
    return `
<section class="card">
    <div class="card-start">
        <img src="/images/${track.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${track.title}</h4>
            <p class="card-artist">${track.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
`
})

document.getElementById('container').innerHTML = playlistHtml
