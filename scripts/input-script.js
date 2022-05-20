// to show validation error 
const formSubmit = document.querySelector('#submit-btn')
const formInput = document.querySelector('#input')

formSubmit.addEventListener('click', () => {
    formInput.value= ''
    formInput.classList.add('input-err')
    setTimeout(() => {
        formInput.classList.remove('input-err')
    },3000)
})
