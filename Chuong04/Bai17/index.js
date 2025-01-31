//ÁP DỤNG REGEX

// Thay i bằng I
// const sentence = "i went to Australia and i saw a shark"

// console.log(sentence.replaceAll(/\b(i)\b/g, 'I'))

// Thay love bằng emoji
const sentence = "I love you with all my heart!"

console.log(sentence.replaceAll(/\b(love|heart)\b/g, function(match){
    return `${match} 💜`
}))

const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"

/*
Thử thách:
1. Sử dụng replaceAll và regex để đảm bảo ký tự đầu tiên của mỗi câu là chữ hoa.
Bạn sẽ cần sử dụng phương thức chuỗi để chuyển đổi các ký tự thành chữ hoa.
*/

console.log(paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function(match){
return match.toUpperCase()
}))
