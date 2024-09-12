const menu = document.querySelector(".menu");
const slider = document.querySelector(".slider");
menu.addEventListener("click", () => {
  slider.style.transform = "translateX(0px)";
  slider.style.transition = " transform 1s ease-in-out";
});
// document.body.addEventListener( "click",() => {
//   slider.style.transform = "translateX(-500px)";
//   slider.style.transition = " transform 0.5s ease-in-out";
// });
