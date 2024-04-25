// console.log(Math.PI);
// // canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
// console.log(Math.round(5.8));
// console.log(Math.round(5.2));
// console.log(Math.round(5.5));
// console.log(Math.random().toFixed(2) * 100);
const section = document.querySelector("section");
const button = document.querySelector(".btn");
const button2 = document.querySelector(".btn2");
const img = document.querySelector(".cube-image");
const p = document.createElement("p");
const p1 = document.createElement("p");
let counter = 0;
let pokus = 0;
button.addEventListener("click", () => {
  let number = Math.floor(Math.random() * 6) + 1;
  img.src = `img/${number}.jpg`;
  counter = counter + number;
  pokus++;
  p1.textContent = "Hazej dal";
  section.append(p1);
  if (pokus === 6) {
    if (counter >= 20) {
      p1.textContent = "Vyhral jste!!!";
    } else {
      p1.textContent = "Prohral jste!!!";
    }
    p.textContent = `hodnota vsech hodu je ${counter}`;
    section.append(p1);
    section.append(p);
    button.style.display = "none";
    button2.style.display = "inline";
  }
});
button2.addEventListener("click", () => {
  location.reload(10000);
});
