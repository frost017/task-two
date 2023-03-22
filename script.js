const audio = new Audio('blaster-2-81267.mp3');
const dvdLogo = document.querySelector('.dvd-logo');
const container = document.querySelector('.container');
let posX = 0;
let posY = 0;
let directionX = 1;
let directionY = 1;
let speedX = 2;
let speedY = 2;

function moveLogo() {
  let logoRect = dvdLogo.getBoundingClientRect();
  let containerRect = container.getBoundingClientRect();

  if (logoRect.right >= containerRect.right || logoRect.left <= containerRect.left) {
    directionX = -directionX;
    audio.play();
  }
  if (logoRect.bottom >= containerRect.bottom || logoRect.top <= containerRect.top) {
    directionY = -directionY;
    audio.play();
  }

  posX += directionX * speedX;
  posY += directionY * speedY;

  dvdLogo.style.transform = `translate(${posX}px, ${posY}px)`;

  requestAnimationFrame(moveLogo);
}

moveLogo();
