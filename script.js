const setupBtn = document.querySelector('.install-btn')
const docBtn = document.querySelectorAll('.doc-btn')
const docBtnNav = document.querySelector('.doc-btn-nav')
const setupDiv =  document.querySelector('.setup-div')
const docDiv =  document.querySelector('.doc-div')
const driftLogo = document.querySelector('#drift-logo') 

const topScrollBtn =  document.querySelector('.float-btn') 

const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')

topScrollBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})

setupBtn.addEventListener('click', () => {
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

window.addEventListener('resize', () => {
    if(window.innerWidth <= 900) {
        setupDiv.classList.remove('flex-row')
        setupDiv.classList.add('flex-column')
    } else {
        setupDiv.classList.remove('flex-column')
        setupDiv.classList.add('flex-row')
    }
})

docBtn.addEventListener('click', () => {
    setupDiv.style.display = 'none'
    docDiv.style.display = 'flex'
})

formSubmit.addEventListener('click', () => {
    formInput.value= ''
    formInput.classList.add('input-error')
    setTimeout(() => {
        formInput.classList.remove('input-error')
    },2000)
})

