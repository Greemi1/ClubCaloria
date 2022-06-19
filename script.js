const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    header.classList.toggle('active');
});

const info = document.querySelector('.info-container');
const counters = document.querySelectorAll('.counter');
let bol = false;

window.addEventListener('scroll', () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');

  const sectionOffset = info.offsetTop + info.offsetHeight;

  const pageOffset = window.innerHeight + pageYOffset;
    
  if(pageOffset > sectionOffset && bol === false) {
      counters.forEach((counter) => {
          function updateCount() {
              const target =+ counter.getAttribute('data-target');
              const speed =+ counter.getAttribute('data-speed');
              const count =+ counter.innerText;
              if(count < target) {
                  counter.innerText = count + 1;
                  setTimeout(updateCount, speed);
              } else {
                  counter.innerText = target;
              }
          }
          updateCount();
          bol = true;
      });
  }

});


const reviewsSwiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });