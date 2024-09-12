// -----------Activity 1------------------

let a = 5;
let b = 5;
// console.log(a + b);

let c = 10;
let d = 5;
// console.log(c - d);

let e = 2;
let f = 5;
// console.log(e * f);

let g = 10;
let h = 5;
// console.log(g / h);

let i = 10;
let j = 5;
// console.log(i % j);

// -----------Activity 2------------------
const min = 40;
let max = 60;
// console.log(num1.toLocaleString("en-IN"));
// console.log(Math.floor(Math.random() * (max - min + 1))+ min);
let myDate = new Date("06-12-2024");
// console.log(myDate.toLocaleString())

const hero = [
  "batman",
  "ironman",
  "spiderman",
  "thor",
  ["superman", "wonderwoman", "aquaman", "flash"],
  "black panther",
  "captain america",
];
const realHero = hero.flat(Infinity);
// console.log(realHero);

const arry = "Shahmir";
// console.log(typeof arry);
// console.log(Array.from(arry));
// console.log(arry.concat());
// console.log(typeof arry);

//-------------- Objects -----------------------

const person = {
  name: "Shahmir",
  age: 20,
  email: "shahmir@123",
  "phone number": 123456789,
};
// console.log(person["email"]);
person.email = "shahmir@456";
// console.log(person.email);
Object.freeze(person);
person.email = "shahmir@789";
// console.log("Error");
// console.log(person.email);

person.fun = function () {
  //     return "Hello";
};
// person.funtwo = function(){
// console.log(`Hellow person ${person.name}`);
// }
// console.log(person.fun());
// console.log(person.funtwo());

const person1 = {};

person1.name = "Shahmir";
person1.age = 20;
person1.email = "shahmir@123";
person1["phone number"] = 123456789;

// console.log(person1.email);
// console.log(person1["phone number"]);
// console.log(person1.name);
// console.log(person1.age);

const cars = {
  car1: "BMW",
  car2: "Mercedes",
  car3: "Audi",
  car4: "Ferrari",
  car5: "Lamborghini",
  car6: "Porsche",
  modle: {
    modle1: 2010,
    modle2: 2020,
    modle3: 2015,
    modle4: 2017,
    modle5: 2019,
    modle6: 2021,
  },
};

// console.log(cars.modle.modle3);
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(cars.modle.hasOwnProperty(`modle15`));

// ----------------Functions------------------
function add(a, b) {
  return a + b;
}
// console.log(add(10, 20));

function one() {
  const username = "Shahmir";
  function two() {
    const email = "shahmir@123";
    console.log(`Hello ${username}`);
  }
  // console.log(email);
  // two();
}
one();

if (true) {
  const username = "Shahmir";

  if (username === "Shahmir") {
    const email = "shahmir@123";
    // console.log(`Hello ${username}`);
  }

  // console.log(email);
}

const username = {
  name: "Shahmir",
  age: 20,
  email: "shahmir@123",
  "phone number": 123456789,
  fun: function () {
    // const number = 120;
    // console.log(`Hello ${this.name}, your age is ${this.age}.`);
  },
};
username.fun();
username.name = "Shahmir Javed";
username.age = 21;
username.fun();

// -----------------Arrow Function------------------

(function sum(val1, val2, val3) {
  // console.log(`the sum of three number is ${val1 + val2 + val3}`);
})(20, 100, 100);

// -----------------If else----------------------
// ternaray Operator

const age = 20;
// let message = age >= 18 ? console.log("you can vote") : console.log("you can't vote");
// console.log(message);

// -----------------Loops----------------------

const num = 5;
for (let i = 0; i <= 10; i++) {
  // console.log(`${num} x ${i} = ${num * i}`);?
}

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    // console.log("*");
  }
}

const map = new Map();
map.set("name", "Shahmir");
map.set("age", 20);
map.set("email", "shahmir@123");
map.set("phone number", 123456789);
// console.log(map);

for (const [key, value] of map) {
  // console.log(key, value);
}

for (const [key, value] in map) {
  console.log(key, value);
}

const computer = {
  1: "dell",
  2: "hp",
  3: "lenovo",
  4: "acer",
  5: "asus",
  6: "apple",
  7: "microsoft",
  8: "samsung",
  9: "sony",
  10: "toshiba",
};

for (const key in computer) {
  // console.log(key, computer[key]);
}

const newCars = [
  "bugati",
  "lamborghini",
  "ferrari",
  "audi",
  "bmw",
  "mercedes",
  "volvo",
  "porsche",
  "rollsroyce",
  "bugatti",
];

for (const key in newCars) {
  if (newCars[key] == "bmw") {
    // console.log(`The new car is ${newCars[key]}`);
    continue;
  }
  // console.log(key, newCars[key]);
}

const coding = [
  {
    language: "python",
    fileName: "python.py",
  },

  {
    language: "java",
    fileName: "java.java",
  },

  {
    language: "c++",
    fileName: "c++.cpp",
  },

  {
    language: "c",
    fileName: "c.c",
  },

  {
    language: "javascript",
    fileName: "javascript.js",
  },

  {
    language: "kotlin",
    fileName: "kotlin.kt",
  },
];

coding.forEach((element) => {
  // console.log(element.language, element.fileName)
});

const superCars = [
  "Bugatti",
  "Lamborghini",
  "Ferrari",
  "Audi",
  "BMW",
  "Mercedes",
  "Volvo",
  "Porsche",
  "Rolls-Royce",
  "Bugatti",
];
// const news = superCars.filter((element) => {
//   return element.length;
// });

const newsCars = superCars.filter((element) => {
  if (element.length > 8) {
    // console.log(element);
  }
});

const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
newNum.forEach((element) => {
  // console.log(element+10)
})

const numbers = newNum.filter((element) => {
//  console.log(element+10)
return element
})
// console.log(numbers)







// -()()()()()()()----------------reducs---------------------()()()()()()()-

const books= [
  {
    name: "Histry",
    price: 100
  },

  {
    name: "Math",
    price: 200
  },

  {
    name: "English",
    price: 300
  },

  {
    name: "Physics",
    price: 400
  }
]
const total = books.reduce((acc, book) => {
  // console.log(`acc: ${acc}, book.price: ${book.price}`)
  return acc + book.price
}, 0)
// console.log(total)