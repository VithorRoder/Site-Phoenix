document.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    let scaleValue = 1 + scrollPos * 0.0005;
    document.querySelector(".parallax05 img").style.transform = `scale(${scaleValue})`;
});