const pole = ["jan", "adam", "milan"];
pole.push("dan");
pole.pop();
pole.shift();
pole.unshift("jan");
pole.forEach((element) => {
  console.log(element);
});
const array1 = [1, 4, 9, 16];
const res = array1.filter((e) => e > 10);
console.log(res);
const result = array1.map((oneNumber) => oneNumber * 2);
console.log(result);
const length = pole.map((e) => {
  return e.length;
});
console.log(length);
const reduce = array1.reduce((acumulator, value) => acumulator * value);
console.log(reduce);
const sort = array1.sort((a, b) => {
  return b - a;
});
// const sort = array1.sort();
console.log("serazene pole: " + sort);

const headings2 = document.querySelectorAll("h2");
console.log(headings2);
headings2.forEach((element) => {
  element.style.color = "pink";
  console.log(element);
});
const p1 = document.querySelector(".one-person-text");
console.log(p1);
let counter = 0;
p1.addEventListener("click", () => {
  counter++;
  p1.style.color = p1.style.color === "red" ? "blue" : "red";
  console.log(counter);
});
