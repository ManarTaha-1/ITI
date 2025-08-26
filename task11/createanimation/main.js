const marbles = document.querySelectorAll(".marble");
let index = 0; 
let interval;

let currentMarble = marbles[0];
currentMarble.classList.add("active");
    function startAnimation() {
        interval = setInterval(() => {
            currentMarble.classList.remove("active");
            index = (index + 1) % marbles.length;
            currentMarble = marbles[index];
            currentMarble.classList.add("active");
        }, 1000);
    }

    marbles.forEach(marble => {
        marble.addEventListener("mouseenter", () => {
            clearInterval(interval);
        });
        marble.addEventListener("mouseleave", () => {
            startAnimation();
        });
    });

    startAnimation();