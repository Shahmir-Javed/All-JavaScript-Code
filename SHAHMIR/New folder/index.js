const str = "my name is shahmir";
const newarray = str.split(" ");
console.log(newarray);
const arry = newarray.map((str) => {
  console.log(str);
  return str[0].toUpperCase() + str.slice(1);
});
console.log(arry);
