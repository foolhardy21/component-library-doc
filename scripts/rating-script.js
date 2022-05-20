const starIcons = document.querySelectorAll('#star-icon')

// update rating on click 
starIcons.forEach(starIcon => {
    starIcon.addEventListener('click', (e) => {
        const maxRating = e.target.dataset.value
        starIcons.forEach(star => {
            if(star.dataset.value <= maxRating) {
                star.classList.add('txt-warn')  
            } else {
                star.classList.remove('txt-warn')
                star.classList.add('txt-off-secondary')  
            }
        })
    })
})