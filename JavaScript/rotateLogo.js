const rotatingLogo = document.querySelector('.scrolling-logo');

if (rotatingLogo) {
    let lastScrollTop = 0;
    let rotationDegree = 0;

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const rotationSpeed = 1.6; // Deixar mais suave

        if (scrollPosition > lastScrollTop) {
            rotationDegree += rotationSpeed;
        } else {
            rotationDegree -= rotationSpeed;
        }

        rotatingLogo.style.transform = `rotate(${rotationDegree}deg)`;

        lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
    });
}