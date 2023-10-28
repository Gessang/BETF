AOS.init();

document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
  });

      // Get all slide elements
      const slides = document.querySelectorAll('.slide');
      // Set initial slide index to 0
      let currentSlideIndex = 0;

      // Function to show current slide and hide all other slides
      function showSlide() {
        for (let i = 0; i < slides.length; i++) {
          if (i === currentSlideIndex) {
            slides[i].style.display = 'inline-block';
          } else {
            slides[i].style.display = 'none';
          }
        }
      }

      // Function to advance to next slide after 5 seconds
      function advanceSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
          currentSlideIndex = 0;
        }
        showSlide();
        setTimeout(advanceSlide, 6000);
      }

      // Start advancing slides
      advanceSlide();



/*COUNTER SECTION
function visible(partial) {
  var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function(){

if(visible($('.count-digit')))
  {
    if($('.count-digit').hasClass('counter-loaded')) return;
    $('.count-digit').addClass('counter-loaded');

$('.count-digit').each(function () {
var $this = $(this);
jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
  duration: 5000,
  easing: 'swing',
  step: function () {
    $this.text(Math.ceil(this.Counter));
  }
});
});
  }
})
*/

//TESTIMONY SECTION
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



