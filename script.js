const button = document.getElementById('togglebtn');
const menu = document.querySelector('.menu');
const close = document.getElementById('close');


togglebtn.addEventListener('click', (e) => {
    menu.classList.toggle('open');
    
})

// Fermer le sidebar
close.addEventListener('click', (e) => {
    menu.classList.remove('open');
});

