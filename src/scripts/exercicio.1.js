window.onload = ()=> {
    // alert('nnnn')
    const player = document.createElement('div')
    
    player.classList.add('box')
    player.textContent = 'Player'
    
    const content = document.querySelector('#content')
    
    content.appendChild(player)
    const ww = window.innerWidth
    const wh = window.innerHeight
    content.style.margin = '0'

    content.style.width = ww+'px'
    content.style.height = wh+'px'
    
    let countX = 0
    let countY = 0
    window.addEventListener('keydown', e => {
        if (e.code === 'ArrowDown') {
            if (countY <= (wh - 20)) {
                countY += 20
                player.style.marginTop = countY+'px'
            }
        }
        
        if (e.code === 'ArrowUp') {
            if (countY >= 0) {
            countY -= 20
            player.style.marginTop = countY+'px'
        }
        }

        if ((e.code === 'ArrowLeft')) {
            if (countX >= 0) {   
                countX -= 20
                player.style.marginLeft = countX+'px'
            }
        }
        if (e.code === 'ArrowRight') {
            if (countX <= (ww-130)) {   
                countX += 20
                player.style.marginLeft = countX+'px'
            }
        }
    })
}