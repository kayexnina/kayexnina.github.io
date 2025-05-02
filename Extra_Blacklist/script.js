// automatic slideshow
$('#carousel').carousel({
  interval: 1000,
  wrap: true
});

// pictures
let isDragging = false;
let startX, scrollLeft;

document.querySelectorAll('.img').forEach(img => {
  img.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - img.offsetLeft;
    scrollLeft = img.scrollLeft;
  });

  img.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  img.addEventListener('mouseup', () => {
    isDragging = false;
  });

  img.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - img.offsetLeft;
    const walk = (x - startX) * 2;
    img.scrollLeft = scrollLeft - walk;
  });
});

//video
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true
  });
});

//cart
function showAlert() {
  alert('COMING SOON! STAY TUNED, AGENTS!');
}