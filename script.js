const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')

const homeBtn = document.querySelector('.install-btn')
const docBtn = document.querySelector('.doc-btn')
const homeDiv =  document.querySelector('.installation-div')
const docDiv =  document.querySelector('.documentation-div')

homeBtn.addEventListener('click', () => {
    homeDiv.style.display = 'block'
    docDiv.style.display = 'none'
})

docBtn.addEventListener('click', () => {
    homeDiv.style.display = 'none'
    docDiv.style.display = 'block'
})

formSubmit.addEventListener('click', () => {
    formInput.value= ''
    formInput.classList.add('input-error')
    setTimeout(() => {
        formInput.classList.remove('input-error')
    },2000)
})

