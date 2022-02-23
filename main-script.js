const asideMenu = document.querySelector('.aside-menu')
const menuToggleBtn = document.querySelector('#btn-menu')
const mainDoc = document.querySelector('#main-doc')
const pageSubLinks = document.querySelectorAll('#pg-sublink')

menuToggleBtn.addEventListener('click', () => {
    asideMenu.classList.remove('dis-hidden')
})

mainDoc.addEventListener('click', () => {
    asideMenu.classList.add('dis-hidden')
})

pageSubLinks.forEach(link => {
    link.addEventListener('click', () => {
        pageSubLinks.forEach(link2 => {
            link2.style.borderLeftStyle = 'none'
            link2.classList.remove('b-primary')
            link2.classList.remove('pd-left-xs')
        })
        link.style.borderLeftStyle = 'solid'
        link.classList.add('b-primary')
        link.classList.add('pd-left-xs')
    })
})
