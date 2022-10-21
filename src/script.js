const array = [12, 11, 10, '23', '25', '26', { nome: 'Kami-sama', idade: 100 }, { nome: 'Mauricio', idade: 44 }]

// var html = ""
// const d = [], b = [], c = []
// array.forEach((a) => { 
//     switch (typeof a) {
//         case 'string':
//             b.push(a)
//             break
//         case 'number':
//             d.push(a)
//             break
//         case 'object':
//             c.push(a)
//             break
//     }
// })
// html += '[[' + d + '],[' + (b) + '],['

// for (let x in c) {
//     html += c[x].nome + ','
// }
// html += ']'
// print(html)




// function print(value) {
//     const board = document.querySelector('#content')
//     board.innerHTML += board.innerHTML+value
// }

const board = document.querySelector('#content')

board.style.marginTop = '50px'
board.style.backgroundColor = 'blue'
board.style.border = '5px solid green'