const progress = document.querySelector('.progress');
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

const progressVolume = document.querySelector('.progressVolume')
progressVolume.addEventListener('input', function(){
    const valueVolume = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueVolume}%, #fff ${valueVolume}%, white 100%)`
})



//animation slider start

const btnPrev = document.querySelector('.slider-arrow-left');
const btnNext = document.querySelector('.slider-arrow-right');

const slides = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.slider-square');

const currentPage = document.querySelector('.page-number.first');
const totalPages = document.querySelector('.page-number.second');
totalPages.textContent = `0${slides.length}`;

let index = 0;

console.log(dots);

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  for(dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
  currentPage.textContent = `0${index + 1}`;
}

const nextSlide = () =>{
  if(index == slides.length - 1){
    index = 0;
    prepareCurrentSlide(index);
  }else{
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () =>{
  if(index == 0){
    index = slides.length - 1;
    prepareCurrentSlide(index);
  }else{
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  })
})

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

setInterval(nextSlide, 4000);

//animation slider end




$(document).ready(function(){
  $('.slick-slider-players').slick({
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
    dots: true,
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed : 3000,
    pauseOnFocus: true,
    variableWidth: true,
    appendDots: $('.video-slider-pagination-circles')
  });
})

const btnWelcomeMenu = document.querySelector('.burger-menu');
const stateWelcomeBtn = document.querySelector('.welcome-pop-up-menu');
const welcomeMenuIcon = document.querySelector('.menu-icon');
const welcomeMenuItems = document.querySelectorAll('.welcome-pop-up-li');

btnWelcomeMenu.addEventListener('click', () => {
  stateWelcomeBtn.classList.toggle('active');
  welcomeMenuIcon.classList.toggle('active');
})

if(window.innerWidth <= 1024){

  for (let i = 0; i < welcomeMenuItems.length; i++){
    welcomeMenuItems[i].addEventListener('click', () => {
      stateWelcomeBtn.classList.remove('active');
      welcomeMenuIcon.classList.toggle('active');
    });
  };
}





