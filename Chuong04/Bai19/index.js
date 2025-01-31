import { contactsArr } from '/contactsData.js'
/*
Thử thách:
1. Kết nối ứng dụng mẫu tìm kiếm này để nhập
tên đầy đủ hoặc một phần sẽ hiển thị liên hệ
phù hợp hoặc các liên hệ.
*/

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')


patternSearchSubmit.addEventListener('click', function() {
    findMatchingContacts(contactsArr, patternSearchInput.value)
})

function findMatchingContacts(contactsArr, pattern) {
    contactDisplay.innerHTML = ''
    const regex = new RegExp(pattern, 'i')
    contactsArr.filter(function(contact) {
        return regex.test(contact.name)
    })
    .forEach(function(contact) {
        renderContact(contact)
    })
}


function renderContact(contactObj) {
    const { name, email, phone } = contactObj
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    const nameElem = document.createElement('p')
    const emailElem = document.createElement('p')
    const phoneElem = document.createElement('p')
    nameElem.innerText = name
    emailElem.innerText = email
    phoneElem.innerText = phone
    contactCard.appendChild(nameElem)
    contactCard.appendChild(emailElem)
    contactCard.appendChild(phoneElem)
    contactDisplay.appendChild(contactCard)
/*
CSS cho contact-card đã được thực hiện cho bạn.
Tên, email và thông tin chi tiết về số điện thoại có thể được đặt trong
các phần tử 'p' và đặt bên trong contact-card.
*/
}