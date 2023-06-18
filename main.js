window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 1);
});


//show /hide faq ans


const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    //change icons
    const icon = faq.querySelector('.faq_icon i');
    if(icon.className === "uil uil-plus" ){
        icon.className = "uil uil-minus"
    }
    else{
        icon.className = "uil uil-plus"
    }
  })
});


//ADDING SWRIPER JS
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Add transition to the swiper container
var swiperContainer = document.querySelector(".mySwiper");
swiperContainer.style.transition = "all 400ms ease";


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open_menu-btn");
const closeBtn = document.querySelector("#close_menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener('click', () =>{
  menu.style.display = "none";
  closeBtn.style.display = " none";
  menuBtn.style.display = "inline-block";
});
