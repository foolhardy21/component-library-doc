const toastToggleBtn = document.querySelector('.btn-toast')
const toastContainer = document.querySelector('.toast-container')

toastToggleBtn.addEventListener('click', () => {
    if(!toastContainer.style.display || toastContainer.style.display ==='none') {
        toastContainer.style.display = 'flex'
    } else {
        toastContainer.style.display = 'none'
    }
})