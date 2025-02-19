function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}

window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});