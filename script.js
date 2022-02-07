const setupBtn = document.querySelector('.install-btn')
const docBtn = document.querySelectorAll('.doc-btn')
const logoBtn = document.querySelector('.logo') 
const docBtnNav = document.querySelector('.doc-btn-nav')
const setupDiv =  document.querySelector('.setup-div')
const docDiv =  document.querySelector('.doc-div')

const topScrollBtn =  document.querySelector('.float-btn') 

const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')

const hideMenuBtn = document.querySelector('#hide-drawer')
const showMenuBtn = document.querySelector('#show-drawer')
const Menu = document.querySelector('#drawer')

const starIcons = document.querySelectorAll('#star-icon')

const openDialogBtn = document.querySelector('.open-modal')
const modalDiv = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const dialogActionBtn = document.querySelectorAll('.dialog-action-btn')

showMenuBtn.style.display = 'none'

openDialogBtn.addEventListener('click', () => {
    modalContainer.classList.remove('no-display')
    modalContainer.classList.add('pos-fixed')
    modalContainer.classList.add('top-left-0')
    modalContainer.classList.add('z-1')
})

dialogActionBtn.forEach(actionBtn => {
    actionBtn.addEventListener('click', () => {
        modalContainer.classList.add('no-display')
        modalContainer.classList.remove('pos-fixed')
        modalContainer.classList.remove('top-left-0')
        modalContainer.classList.remove('z-1')
    })
})

starIcons.forEach(starIcon => {
    starIcon.addEventListener('click', (e) => {
        const maxRating = e.target.dataset.value
        starIcons.forEach(star => {
            if(star.dataset.value <= maxRating) {
                star.style.color = 'var(--c-yellow)' 
            } else {
                star.style.color = 'var(--c-gray)' 
            }
        })
    })
})

showMenuBtn.addEventListener('click', () => {
    Menu.style.display = 'block'
    showMenuBtn.style.display = 'none'
})

hideMenuBtn.addEventListener('click', () => {
    Menu.style.display = 'none'
    showMenuBtn.style.display = 'block'
})

topScrollBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})

setupBtn.addEventListener('click', () => {
    setupDiv.style.display = 'flex'
    docDiv.style.display = 'none'
    setupBtn.style.display = 'none'
    docBtnNav.style.display = 'block'
})

logoBtn.addEventListener('click', () => {
    setupDiv.style.display = 'flex'
    docDiv.style.display = 'none'
    setupBtn.style.display = 'none'
    docBtnNav.style.display = 'block'
})

docBtn.forEach((btn => {
    btn.addEventListener('click', () => {
        setupDiv.style.display = 'none'
        docDiv.style.display = 'flex'
        docBtnNav.style.display = 'none'
        setupBtn.style.display = 'block'
    })
}))

formSubmit.addEventListener('click', () => {
    formInput.value= ''
    formInput.classList.add('input-error')
    setTimeout(() => {
        formInput.classList.remove('input-error')
    },2000)
})

