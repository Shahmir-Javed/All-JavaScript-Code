const form = document.querySelector("form");
// console.log(form1)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
//   console.log(height, weight, result)

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = "Please Enter Valid Height and Weight!";
  } else if (weight === "" || weight === 0 || isNaN(weight)) {
    results.innerHTML = "Please Enter Valid Height and Weight!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // console.log(bmi)
    results.innerHTML = `Your BMI is ${bmi}`;
  }
   
});

