// const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []
    
addItemBtn.addEventListener('click', function(){
/*
Thử thách:
1. Thêm if else vào hàm của trình lắng nghe sự kiện.
2. Chỉ thêm một mục vào mảng shoppingList nếu mục đó
chưa có trong mảng shoppingList.
3. Nếu một mục trùng lặp, hãy xóa trường nhập
và xuất "no duplicates".
*/
        if(shoppingList.includes(itemInput.value)){
            console.log('no duplicates')
        }
        else{
            shoppingList.push(itemInput.value)
            render()        
        }
        itemInput.value = '' 
})

function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()

