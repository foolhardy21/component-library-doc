const asideMenu = document.querySelector('.aside-menu')
const menuToggleBtn = document.querySelector('#btn-menu')
const mainDoc = document.querySelector('#main-doc')

menuToggleBtn.addEventListener('click', () => {
    asideMenu.classList.remove('dis-hidden')
})

mainDoc.addEventListener('click', () => {
    asideMenu.classList.add('dis-hidden')
})
