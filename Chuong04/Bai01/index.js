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

for (let character of characters){
    for (let power of character.powers){
        console.log(power)
    }
/*
Thử thách:
1. Lồng một for of bên trong for of này để lặp lại
mảng lũy ​​thừa cho mỗi ký tự. In mỗi lũy thừa.
*/
}


