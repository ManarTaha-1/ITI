const arr = [
    "./images/image1.png",
    "./images/image2.png",
    "./images/image3.png",
    "./images/image4.png",
    "./images/image5.png",
    "./images/image6.png",
    "./images/image7.png",
    "./images/image8.png"
];
var interval;
let currentIndex = 0;
var img = document.querySelector(".images img");
function sideShow(){
    interval = setInterval(() => {
        var randomIndex = Math.floor(Math.random()*arr.length);
        img.src = arr[randomIndex];
    }, 1000);
}
function stopInterval(){
    clearInterval(interval);
}

function next() {
    currentIndex++;
    if (currentIndex >= arr.length) {
        currentIndex = 0; 
    }
    img.src = arr[currentIndex];
}

function prev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = arr.length - 1; 
    }
    img.src = arr[currentIndex];
}

