const Judul = document.getElementsByClassName('input-box')

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay:200, origin: 'top'})
sr.reveal('.form-container form',{delay:1000, origin: 'left'})
sr.reveal('.heading',{delay:1000, origin: 'top'})
sr.reveal('.info-container .box',{delay:600, origin: 'top'})
sr.reveal('.service-container .box',{delay:600, origin: 'top'})
sr.reveal('.about-container .box',{delay:600, origin: 'top'})
sr.reveal('.reviews-container',{delay:600, origin: 'top'})
sr.reveal('.newsletter .box',{delay:400, origin: 'bottom'})

const ABC = document.querySelector('.newsletter');
ABC.innerHTML = "Subscribe To Newsletter";