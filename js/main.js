
/*  BURGER MENU TOGGLE
========================================== */

$('.burger, .overlay').click(function () {
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});

/*  SCROLL FOR VIDEO SLIDER - impetus.js
========================================== */

const slider = document.querySelector('.slider');

slider.style.cursor = '-webkit-grab';
slider.addEventListener('mousedown', () => slider.style.cursor = '-webkit-grabbing', true);
window.addEventListener('mouseup', () => slider.style.cursor = '-webkit-grab', true);

const sliderImpetus = new Impetus({
  source: slider,
  boundX: [0, slider.scrollWidth - slider.clientWidth],
  multiplier: -1,
  update(x) {
    this.scrollLeft = x;
  }
});

/*  VIDEO PLAY ON HOVER
========================================== */

const videos = document.querySelectorAll('.video');
// plays video on mouseover and resets video on mouseout.
for (const video of videos) {
  video.addEventListener('mouseover', function () { video.play() }, false);
  video.addEventListener('mouseout', function () { video.pause() }, false);
  video.addEventListener('mouseout', function () { video.currentTime = 0 });
}
