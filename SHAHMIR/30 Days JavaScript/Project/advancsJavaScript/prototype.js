const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Object.prototype.Shahmir = function (num) {
    // console.log("Shahmir is Cool")
};

// console.log(arry.Shahmir()) 
// console.log(Math.PI);
const discripter =  Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(discripter);

const userData = {
    userName: "Shahmir098",
    age: 25,
    gender: "Male",
};
console.log(Object.getOwnPropertyDescriptor(userData, "age"));
Object.defineProperty(userData,"age",{
    writable:false,
    enumerable: false,
    configurable: false
    
})
console.log(Object.getOwnPropertyDescriptor(userData, "age"));

