//-------------------------------Прелоадер и плавное появление блоков---------------------------------
window.onload = function() {
   let preloader = document.querySelector('.preloader');

   setTimeout(function() {
      preloader.classList.add('hide-preloader');
   },1000)

   setTimeout(function() {
      preloader.classList.add('hidden-preloader');

      //плавное появление
      function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.add('element-show');
          }
        });
      }
      let options = { threshold: [0.1] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.element-animation');
      for (let elm of elements) {
        observer.observe(elm);
      };
      //плавное появление
   }, 1050)
};
//------------------------Уменьшение высоты Хедера-------------------------

var header = document.querySelector('.header');

window.addEventListener('scroll', function() {

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 40) {
        header.style.height = '50px';
        header.style.boxShadow = 'none';
    } else {
        header.style.height = '70px';
        header.style.boxShadow = '0px 5px 10px 0px #555';
    }    
});

//------------------------Бургер меню-------------------------

let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
};
menuBody.addEventListener('click', function (e) {
   if (e.target.matches('a')) {
      menuBody.classList.remove('_active');
      iconMenu.classList.remove('_active');
      document.body.classList.remove('_lock');
   }
});

//------------------------Плавный переход к блоку-------------------------
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight; //отнимаем высоту шапки
         
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   };
};


//------------------------Слайдер. Team----------------------------
const swiper = new Swiper('.swiper', {
  // Optional parameters
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
  },
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },
   autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
});