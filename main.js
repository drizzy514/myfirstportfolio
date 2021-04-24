var link = document.querySelector('.link')
var text = document.querySelector('.text')


link.addEventListener('click', function(){
    link.classList.toggle('about-active')
    text.classList.toggle('about-active')
})

var burger = document.querySelector('.hamburger')
var nav = document.querySelector('.nav-list')


burger.addEventListener('click', function(){
    burger.classList.toggle('hamburger--active')
    nav.classList.toggle('nav--active')
})





