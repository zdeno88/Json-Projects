// const name = "David";
// console.log(typeof name);
// let vekcomma = prompt("zadej vek");
// let vekDot = parseFloat(vekcomma.replace(",", "."));
// console.log(typeof vek);
// console.log(vekDot + 10);
// const ageString = vekDot.toString();
// console.log(typeof ageString);
// console.log(`Vek to string je: ${ageString}`);
const a = parseFloat(prompt("zadej cislo1").replace(",", "."));
const b = parseFloat(prompt("zadej cislo2").replace(",", "."));
const par = document.createElement("p");
par.textContent = a + b;
// par.textContent = 10 + 20;
console.log(par);
const heading2 = document.createElement("h2");
heading2.innerHTML = "Nový nadpis<br>Pokračování nadpisu";
console.log(heading2);
const aboutUs = document.querySelector(".about-us");
console.log(aboutUs);
const h1 = document.createElement("h1");
h1.textContent = "Ahoj nadpis";
const para = document.createElement("p");
para.textContent = "prvni nadpis";
aboutUs.append(h1);
aboutUs.append(par);
aboutUs.prepend(para);