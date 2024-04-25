const button = document.querySelector(".btn");
const button2 = document.querySelector(".btn2");

console.log(button);
let condition = true;

button.addEventListener("click", () => {
  if (condition) {
    button.classList.remove("btn");
    button.classList.add("btn-ok");
    condition = false;
  } else {
    button.classList.remove("btn-ok");
    button.classList.add("btn");
    condition = true;
  }
  console.log(condition);
});
// button.addEventListener("click", () => {
// });
button2.addEventListener("click", () => {
  button2.classList.toggle("btn2-ok");
});

const articles = document.querySelectorAll(".switch-article");
console.log(articles);
articles.forEach((e) => {
  const oneArticle = e;
  oneArticle.addEventListener("click", () => {
    // e.classList.toggle("turn-on");
    oneArticle.classList.add("disappear");
  });
});

const btn2 = document.querySelector(".btn3");
btn2.addEventListener("click", () => {
  articles.forEach((e) => {
    e.classList.add("appear");
  });
});
