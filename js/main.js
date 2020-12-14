var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "fade",
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  
});
// function parallax(event) {
//   this.querySelectorAll('.parallax').forEach(parallax => {
//     parallax.style.transform = `translateY(${event.clientY/50}px)`
//   });
// }
// document.addEventListener('mousemove',parallax);


