// 1. Câu lạc bộ phim của một trường muốn lưu trữ thông tin chi tiết về các bộ phim mà câu lạc bộ đã học trong năm nay. Tạo một lớp mới để thực hiện việc này. Chúng ta muốn lưu trữ dữ liệu sau về từng bộ phim: id, title, director, releaseYear và genres[].

// 2. Tạo hai phương thức trên lớp: một để thêm nhiều thể loại vào phim - addGenre(genre) - và một để lấy tiêu đề của phim - getFilmTitle().

// 3. Khởi tạo một instance mới của lớp bằng dữ liệu từ bộ phim yêu thích của bạn. Thêm ít nhất 1 thể loại vào phim của bạn bằng addGenre() và lấy tiêu đề bằng getFilmTitle()

// Phần mở đầu:
class Film {
	constructor(id, title,director, releaseYear, genres = []) {
		this.id = id;
		this.title = title;
		this.director = director;
		this.releaseYear = releaseYear;
		this.genres = genres;
	}
	
	addGenre(genre) {
		this.genres = [...this.genres, genre];
	}
	
	getFilmTitle() {
		return `Film: ${this.title}`
	}
}

const myFavouriteFilm = new Film(1, "Rear Window", "Afred Hitchcock", "1954");
console.log(myFavouriteFilm.director)
myFavouriteFilm.addGenre("Thriller");
console.log(myFavouriteFilm.genres)
console.log(myFavouriteFilm.getFilmTitle());
    
    // Phần còn lại của mã của bạn ở đây.