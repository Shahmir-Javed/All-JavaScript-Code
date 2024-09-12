// // ---------------Promiss One-----------------------      //
// const promissOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am promiss one");
//     resolve();
//   }, 2000);
// });
// promissOne.then(function () {
//   console.log("I am second promiss");
// });

// // ---------------Promiss Two-----------------------      //

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am promiss two");
//     resolve();
//   }, 2000);
// }).then(() => {
//   console.log("I am promiss  two");
// });

// // ---------------Promiss Three-----------------------      //

// const promissThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ userName: "Shahmir098", age: 25, gender: "Male" });
//   }, 2000);
// });
// promissThree.then(function (userData) {
//   console.log(userData);
//   console.log(typeof userData);
// });

// // ---------------Promiss Four-----------------------      //

// const promissFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let erroe = true;
//     if (!erroe) {
//       resolve({ userName: "Shahmir098", age: 25, gender: "Male" });
//     } else {
//       reject("error");
//     }
//   }, 1000);
// });

// promissFour
//   .then(function (userData) {
//     console.log(userData);
//     return userData;
//   })
//   .then(function (UserDetails) {
//     console.log(UserDetails.userName);
//     console.log(UserDetails.age);
//     console.log(UserDetails.gender);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// // ---------------Promiss Five-----------------------      //

// const promissFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let erroe = true;
//     if (!erroe) {
//       resolve({ userName: "ShahriyarJaved", age: 125, gender: "Male" });
//     } else {
//       reject("error: In PromissFive(5)");
//     }
//   }, 1000);
// });

// async function functionRun() {
//   try {
//     const run = await promissFive;
//     console.log(run);
//   } catch (error) {
//     console.log("Error is Found");
//   }
// }
// functionRun();

// async function gitHubUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     // console.log(data);
//   } catch (error) {
//     console.log("error :!23456778900");
//   }
// }
// gitHubUser();
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(typeof data);
  })
  .catch((error) => {
    console.log("error :!23456778900");
  });
