$(function () {
  $(".w-r-gallery-list").slick({
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
    prevArrow: ".w-r-gallery-list-left",
    nextArrow: ".w-r-gallery-list-right",
  });
});

$(function () {
  $(".w-r-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-r-reviews-list-left",
    nextArrow: ".w-r-reviews-list-right",
  });
});
