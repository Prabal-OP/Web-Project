burger = document.querySelector('.burger')
nav = document.querySelector('#nav')
logo = document.querySelector('.logo')
navbar = document.querySelector('.navbar')

burger.addEventListener('click',()=>{
    nav.classList.toggle('opty');
    logo.classList.toggle('opty');
    navbar.classList.toggle('h-nav');
})

window.addEventListener('load', function() {
    document.body.classList.remove('no-transition');
  });