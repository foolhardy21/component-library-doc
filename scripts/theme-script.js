// for theme toggling
const root = document.documentElement;
const themeToggleBtn = document.querySelector('#btn-theme')

// for theme toggling
themeToggleBtn.addEventListener('click', (e) => {
    if( checkTheme() === 'light' ) {
        setDarkTheme()
        e.target.innerText = 'light_mode'
    }
    else {
        setLightTheme()
        e.target.innerText = 'bedtime'
    }
})


const checkTheme = () => getComputedStyle(root).getPropertyValue('--theme').trim()[0] === 'l' ? 'light' : 'dark'

const setLightTheme = () => {
    root.style.setProperty('--clr-primary','#ffffff')
    root.style.setProperty('--clr-off-primary','#CCCAC9')
    root.style.setProperty('--clr-secondary','#000000')
    root.style.setProperty('--clr-off-secondary','#323232')
    root.style.setProperty('--theme', 'light')
}

const setDarkTheme = () => {
    root.style.setProperty('--clr-primary','#000000')
    root.style.setProperty('--clr-off-primary','#323232')
    root.style.setProperty('--clr-secondary','#ffffff')
    root.style.setProperty('--clr-off-secondary','#CCCAC9')
    root.style.setProperty('--theme', 'dark')
}
