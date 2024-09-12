const randomColor = () => {
  const g = Math.floor(Math.random() * 256);
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
console.log(randomColor());
let intervalId;

const startChanging = function () {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChanging = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector("#start").addEventListener("click", startChanging);

document.querySelector("#stop").addEventListener("click", stopChanging);
