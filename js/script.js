$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


$('.projects__body').slick({
  Infinity: true,
  dots: false,
  arrows:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<span class="priv-arrow"> <img src="./img/svg/arrow-left.svg" alt=""> </span>',
  nextArrow: '<span class="next-arrow"> <img src="./img/svg/arrow.svg" alt=""></span>',
  variableWidth: true,
  responsive:[
    {
      breakpoint: 1191,
      settings: {
        dots: true
      }
    }
  ]
});
  
$('.testimonials__slider').slick({
  Infinity: true,
  dots: false,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<span class="priv-arrow"> <img src="./img/svg/white-arrow-left.svg" alt=""> </span>',
  nextArrow: '<span class="next-arrow"> <img src="./img/svg/white-arrow-right.svg" alt=""> </span>',
  variableWidth: true,
  speed: 2000,
  responsive:[
    {
      breakpoint: 1191,
      settings: {
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        speed: 3000,
        autoplaySpeed: 1000,
        autoplay: true,
        dots: false,
        centerMode: true,
      }
    
    }
  ]

  
});


