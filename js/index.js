$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .menu").toggleClass("active");
    $("body").toggleClass("lock");
    $(".menu").toggleClass("open");
  });

  $(".menu__link").click(function (event) {
    $(".header__burger, .menu").removeClass("active");
    $(".body").removeClass("lock");
  });

  $(".slider__filter").slick({
     arrows: false,
     dots: true,
     slidesToShow: 2,
     draggable: false,
  });
});
