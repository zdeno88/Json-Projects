const bol = parseInt(prompt("zadej vek"));
console.log(bol);
console.log(typeof bol);
const body = document.querySelector("body");
const p1 = document.createElement("p");
if (bol >= 18) {
  p1.textContent = `Jsi dospely, je ti ${bol}`;
  body.style.backgroundColor = "lightgreen";
} else {
  p1.textContent = `Nejsi dospely, je ti ${bol}`;
  body.style.backgroundColor = "red";
}
body.append(p1);
const zvire = prompt("zadej zvire");
if (zvire === "dog") {
  body.append(`Pes je zvire ${zvire}`);
} else if (zvire === "cat") {
  body.append(`Kocka je zvire ${zvire}`);
} else if (zvire === "fish") {
  body.append(`Ryba je zvire ${zvire}`);
} else if (zvire === "frog") {
  body.append(`Zaba je zvire ${zvire}`);
} else {
  body.append(`Toto zvire neznam ${zvire}`);
}

body.append(document.createElement("br"));
let lang = prompt("Zadej jazyk").toUpperCase();
switch (lang) {
  case "EN":
    body.append(`Zvoleny jazyk je ${lang}`);
    break;
  case "FR":
    body.append(`Zvoleny jazyk je ${lang}`);
    break;
  case "ES":
    body.append(`Zvoleny jazyk je ${lang}`);
    break;
  case "DE":
    body.append(`Zvoleny jazyk je ${lang}`);
    break;
  default:
    body.append(`Zvoleny jazyk neznam`);
    break;
}
