const listItems = document.querySelectorAll('.list-itm')

listItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.cursor = 'pointer'
    })
    item.addEventListener('click', () => {
        listItems.forEach(item2 => {
            item2.classList.remove('txt-600')
            item2.classList.remove('bg-off-primary')    
        })
        item.classList.add('txt-600')
        item.classList.add('bg-off-primary')
    })  
})
