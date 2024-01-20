const trafficLightRed = document.querySelector('.trafficLightRed');
const trafficLightYellow = document.querySelector('.trafficLightYellow');
const trafficLightGreen = document.querySelector('.trafficLightGreen');


function makeRed() {
    trafficLightRed.style.background = ('red');
    trafficLightRed.removeEventListener('click', makeRed);
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.addEventListener('click', makeYellow);
    trafficLightGreen.addEventListener('click', makeGreen);
}
trafficLightRed.addEventListener('click', makeRed);


function makeYellow() {
    trafficLightYellow.style.background = ('yellow');
    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightGreen.style.background = ('black');
    trafficLightRed.style.background = ('black');
    trafficLightGreen.addEventListener('click', makeGreen);
    trafficLightRed.addEventListener('click', makeRed);
}
trafficLightYellow.addEventListener('click', makeYellow);


function makeGreen() {
    trafficLightGreen.style.background = ('green');
    trafficLightGreen.removeEventListener('click', makeGreen);
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightYellow.addEventListener('click', makeYellow);
    trafficLightRed.addEventListener('click', makeRed);
}
trafficLightGreen.addEventListener('click', makeGreen);
