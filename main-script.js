const asideMenu = document.querySelector('.aside-menu')
const menuToggleBtn = document.querySelector('#btn-menu')
const mainDoc = document.querySelector('#main-doc')

menuToggleBtn.addEventListener('click', () => {
    asideMenu.classList.remove('dis-hidden')
    menuToggleBtn.classList.add('dis-hidden')
    mainDoc.style.background = 'rgb(0,0,0,0.4)'
})

mainDoc.addEventListener('click', () => {
    menuToggleBtn.classList.remove('dis-hidden')
    asideMenu.classList.add('dis-hidden')
    mainDoc.style.background = 'var(--clr-primary)'
})
