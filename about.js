const navbar = document.querySelector('.about-navbar');
const navLinks = document.querySelectorAll('.about-navbar li a');

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navbar.style.display = 'flex';
    navLinks.forEach(link => link.style.display = 'block');
  } else {
    navbar.style.display = 'none';
    navLinks.forEach(link => link.style.display = 'none');
  }
});