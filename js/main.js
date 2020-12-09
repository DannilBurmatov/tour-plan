var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  effect: "coverflow",
});
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [7.838314, 98.298864],
    zoom: 17
  });
}



