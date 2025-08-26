// make header slider
const images = ['./images/superhero1.png', './images/superhero2.png', './images/superhero3.png'];
const background = document.querySelector('.images');
const prev = document.querySelector('.images .fa-angle-left');
const next = document.querySelector('.images .fa-angle-right');
const indicators = document.querySelectorAll('.indicators .dot');
let currentIndex = 0;

prev.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    background.style.backgroundImage = `url(${images[currentIndex]})`;
    updateIndicators();
};

function updateIndicators() {
    indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}


next.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    background.style.backgroundImage = `url(${images[currentIndex]})`;
    updateIndicators();
};
