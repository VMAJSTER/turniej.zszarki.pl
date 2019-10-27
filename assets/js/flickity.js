var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {

  cellAlign: 'left',
  contain: true,
  autoPlay: 2000,
  imagesLoaded: false,
  wrapAround: true,
  pageDots: true,
  prevNextButtons: false,
});
