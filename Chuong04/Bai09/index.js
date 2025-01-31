// Sử dụng .map() nếu bạn cần sử dụng mảng mới mà nó trả về.

// Sử dụng .forEach() nếu bạn không cần tạo mảng mới.
import { playlistArr } from '/playlist.js'
// playlistArr.forEach(function(track){
//     playlistHtml.push( `
//     <section class="card">
//         <div class="card-start">
//             <img src="/images/${track.albumArt}">
//         </div>
//             <div class="card-mid">
//                 <h4 class="card-title">${track.title}</h4>
//                 <p class="card-artist">${track.artist}</p>
//             </div>
//         <div class="card-end">
//             <p class="card-menu">...</p>
//         </div>
//     </section>
//     `)
// }).join('')

const playlistHtml = playlistArr.map(function(track){
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
}).join('')

document.getElementById('container').innerHTML = playlistHtml
