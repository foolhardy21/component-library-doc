const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')

const homeBtn = document.querySelector('.install-btn')
const docBtn = document.querySelector('.doc-btn')
const homeDiv =  document.querySelector('.installation-div')
const docDiv =  document.querySelector('.documentation-div')

const topScrollBtn =  document.querySelector('.float-btn')

topScrollBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})

homeBtn.addEventListener('click', () => {
    homeDiv.style.display = 'flex'
    docDiv.style.display = 'none'
})

docBtn.addEventListener('click', () => {
    homeDiv.style.display = 'none'
    docDiv.style.display = 'flex'
})

formSubmit.addEventListener('click', () => {
    formInput.value= ''
    formInput.classList.add('input-error')
    setTimeout(() => {
        formInput.classList.remove('input-error')
    },2000)
})

