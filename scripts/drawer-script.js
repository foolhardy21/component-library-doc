const hamBtn = document.querySelector('#btn-ham')
const navSmall = document.querySelector('#nav-small')
const smallNavCloseBtn = document.querySelector('#btn-close-small')


hamBtn.addEventListener('click', () => {
    navSmall.style.display = 'flex'
})

smallNavCloseBtn.addEventListener('click', () => {
    navSmall.style.display = 'none'
})
