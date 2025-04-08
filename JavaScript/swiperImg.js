const mobileImages = [
    "Images/Anuncio01M.png",
    "Images/Anuncio02M.png",
    "Images/Anuncio03M.png",
    "Images/Anuncio04M.png"
];

const desktopImages = [
    "Images/Anuncio01.png",
    "Images/Anuncio02.png",
    "Images/Anuncio03.png",
    "Images/Anuncio04.png"
];

function updateSliderImages() {
    const images = window.innerWidth <= 900 ? mobileImages : desktopImages;
    document.querySelectorAll('.swiper-slide img').forEach((img, index) => {
        img.src = images[index];
    });
}

window.addEventListener('load', updateSliderImages);
window.addEventListener('resize', updateSliderImages);