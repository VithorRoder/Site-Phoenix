window.addEventListener("scroll", function () {
    let scrolled = window.scrollY;
    document.querySelector(".parallax").style.transform = `translateY(${scrolled * 0.5}px)`;
});