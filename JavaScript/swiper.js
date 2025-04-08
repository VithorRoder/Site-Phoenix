document.addEventListener("DOMContentLoaded", function () {

    var swiperDesktop = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-container .swiper-button-next",
            prevEl: ".swiper-container .swiper-button-prev",
        },
        pagination: {
            el: ".swiper-container .swiper-pagination",
            clickable: true,
        },
    });

    var swiperMobile = new Swiper(".swiper-container-mobile", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-container-mobile .swiper-button-next",
            prevEl: ".swiper-container-mobile .swiper-button-prev",
        },
        pagination: {
            el: ".swiper-container-mobile .swiper-pagination",
            clickable: true,
        },
    });
});