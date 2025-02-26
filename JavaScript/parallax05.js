document.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    document.querySelector(".parallax05 img").style.transform = `translateY(${scrollPos * 0.3}px)`;
});