$(function () {
  $(".w-e-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    cssEase: "linear",
    prevArrow: ".w-e-gallery-list-left",
    nextArrow: ".w-e-gallery-list-right",
  });
});

$(function () {
  $(".w-e-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-e-reviews-list-left",
    nextArrow: ".w-e-reviews-list-right",
  });
});
