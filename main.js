// AOS Animation
AOS.init({});

// Dark Mode
function darkFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}

// Hero <Parallax
const parallaxEls = document.querySelectorAll('[data-speed]');

window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
  for (const parallaxEl of parallaxEls) {
    const direction = parallaxEl.dataset.direction == 'up' ? '-' : '';
    const transformY = this.pageYOffset * parallaxEl.dataset.speed;
    if (parallaxEl.classList.contains('cover-text')) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    } else {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    }
  }
}
// Read More
var button = document.getElementsByClassName('btn');
var i;
for (i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    if (this.getAttribute('data-more') == 0) {
      this.setAttribute('data-more', 1);
      this.previousElementSibling.style.display = 'block';
      this.innerHTML = 'Read Less';
    } else if (this.getAttribute('data-more') == 1) {
      this.setAttribute('data-more', 0);
      this.previousElementSibling.style.display = '-webkit-box';
      this.innerHTML = 'Read More';
    }
  });
}

// Current Year
document.getElementById('currentYear').innerHTML = new Date().getFullYear();

// Age
// document.getElementById('age').innerHTML = new Date().getFullYear() - 1975;

// Highlight Navigation Item With JQuery
$(document).ready(function () {
  $(window).scroll(function (e) {
    let windowTop = $(this).scrollTop();
    $('.nav a').each(function (event) {
      if (windowTop >= $($(this).attr('href')).offset().top - 100) {
        $('.nav .active').removeClass('active');
        $(this).addClass('active');
      }
    });
  });
});
