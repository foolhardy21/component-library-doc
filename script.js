const homeBtn = document.querySelector('.install-btn')
const docBtn = document.querySelectorAll('.doc-btn')
const docBtnNav = document.querySelector('.doc-btn-nav')
const homeDiv =  document.querySelector('.setup-div')
const docDiv =  document.querySelector('.doc-div')
const topScrollBtn =  document.querySelector('.float-btn') 
const driftLogo = document.querySelector('#drift-logo') 

topScrollBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})

homeBtn.addEventListener('click', () => {
    homeDiv.style.display = 'flex'
    docDiv.style.display = 'none'
    homeBtn.style.display = 'none'
    docBtnNav.style.display = 'block'
})

docBtn.forEach((btn => {
    btn.addEventListener('click', () => {
        homeDiv.style.display = 'none'
        docDiv.style.display = 'flex'
        docBtnNav.style.display = 'none'
        homeBtn.style.display = 'block'
    })
}))

window.addEventListener('resize', () => {
    if(window.innerWidth <= 900) {
        homeDiv.classList.remove('flex-row')
        homeDiv.classList.add('flex-column')
    } else {
        homeDiv.classList.remove('flex-column')
        homeDiv.classList.add('flex-row')
    }
})