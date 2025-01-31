const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    { 
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },  
    { 
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

// for (let character of characters){
//     console.log(character)
// }
/*
Thử thách:
1. Lồng forEach để ghi ra từng
sức mạnh riêng lẻ trong mỗi mảng sức mạnh của ký tự.
*/
characters.forEach(function(character, index){
    console.log(index, character.title)
})

