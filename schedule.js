window.addEventListener('resize', function() {
  // Perform responsive actions here
});

// Get the element you want to make responsive
const myElement = document.getElementById('myElement');

// Add a CSS class to make it responsive
function makeElementResponsive() {
  myElement.classList.add('responsive');
}

// Remove the CSS class when not needed
function removeResponsiveClass() {
  myElement.classList.remove('responsive');
}

// Add event listeners to trigger the responsive behavior
window.addEventListener('resize', function() {
  if (window.innerWidth < 600) {
    makeElementResponsive();
  } else {
    removeResponsiveClass();
  }
});
