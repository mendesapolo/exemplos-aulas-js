window.onload = (e) => {
    const lang = document.querySelector('#txtLang')
    const tech = document.querySelector('#selTech')
    const btn = document.querySelector('#btnSend')
    // const boxs = document.querySelectorAll('.box')
    
    btn.addEventListener('click', (kami) => {
        kami.preventDefault()
        console.log(tech);
        alert(lang.value+' -- '+tech.value)
    })

    lang.addEventListener('keypress', () => {
        console.log(lang.value);
    })
    
}
















function showBox(text = 'Box 1 clicada') {
    alert(text)
}