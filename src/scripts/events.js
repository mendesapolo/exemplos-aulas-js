window.onload = (e) => {
    // const lang = document.querySelector('#txtLang')
    // const tech = document.querySelector('#selTech')
    // const btn = document.querySelector('#btnSend')
    // const boxs = document.querySelectorAll('.box')
    
    // btn.addEventListener('click', (kami) => {
    //     kami.preventDefault()
    //     console.log(tech);
    //     alert(lang.value+' -- '+tech.value)
    // })

    // lang.addEventListener('keypress', () => {
    //     console.log(lang.value);
    // })

    // Propagação de eventos

    const content = document.querySelector('#content')
    // const box =
    document.querySelector('#box').addEventListener('click', e => {
        alert('Box clicada...')
    }, false)

    // content.addEventListener('click', (e) => {
    //     alert('Div clickado...')
    // }, false)

    console.log(content.id);
    content.setAttribute('idade', 23)
    console.log(content.getAttribute('width'));
    const box2 = document.createElement('div')

    box2.classList.add('box')
    box2.id = 'box-2'
    box2.innerText = 'box 2'
    content.appendChild(box2)
    
}
















function showBox(text = 'Box 1 clicada') {
    alert(text)
}