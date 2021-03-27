ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards',{ delay: 600});
ScrollReveal().reveal('.footer',{ delay: 600});
ScrollReveal().reveal('.gods-cards',{ delay: 600});
ScrollReveal().reveal('.recomend',{ delay: 600});
ScrollReveal().reveal('.footer-footer',{ delay: 500});

document.querySelector('.menu-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
})
