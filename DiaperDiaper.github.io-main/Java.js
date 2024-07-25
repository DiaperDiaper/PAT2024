var currentSlide = 0;
var sliderInner = document.querySelector('.slider-inner');

function changeSlide(n) {
  currentSlide += n;
  if (currentSlide > 2) currentSlide = 0;
  if (currentSlide < 0) currentSlide = 2;
  sliderInner.style.transform = `translateX(-${currentSlide * 300}px)`;
}


// Function to scroll the page to the top
function scrollToTop() {
  if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Show the "Return to Top" button when scrolling
window.onscroll = function() {
  var button = document.querySelector('.return-to-top');
  if (window.scrollY > 100) {
      button.style.display = 'block';
  } else {
      button.style.display = 'none';
  }
};

