var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
    splashScreen.style.opacity = 0;
    setTimeout(()=>{
        splashScreen.classList.add('hidden')
    },610)
    })

    var header = document.querySelector('header');
var nav = document.querySelector('nav');

if (window.innerWidth < 768) {
  header.classList.add('small-screen');
  nav.classList.add('small-screen');
} else {
  header.classList.remove('small-screen');
  nav.classList.remove('small-screen');
}
