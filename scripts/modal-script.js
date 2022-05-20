const openDialogBtn = document.querySelector('.open-modal')
const modalDiv = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const dialogActionBtn = document.querySelectorAll('.dialog-action-btn')
               
// show modal
openDialogBtn.addEventListener('click', () => {
    modalContainer.classList.remove('dis-hidden')
    modalContainer.classList.add('pos-fixed')
    modalContainer.classList.add('tl-0')
    modalContainer.classList.add('z-5')
})

// hide modal
dialogActionBtn.forEach(actionBtn => {
    actionBtn.addEventListener('click', () => {
        modalContainer.classList.add('dis-hidden')
        modalContainer.classList.remove('pos-fixed')
        modalContainer.classList.remove('tl-0')
        modalContainer.classList.remove('z-5')
    })
})