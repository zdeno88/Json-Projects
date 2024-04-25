const students = ["david", "jan", "jakub"];

students.forEach((e) => {
  console.log(e);
});

const section = document.querySelector(".students");

function fillStudent(e) {
  const p = document.createElement("p");
  p.textContent = e;
  section.append(p);
}
students.forEach(fillStudent);
const par = document.querySelectorAll(".about-us p");
console.log(par);

par.forEach((p) => {
  p.addEventListener("mouseenter", () => (p.style.transform = "scale(1.1)"));
  p.addEventListener("mouseleave", () => (p.style.transform = "scale(1)"));
});

for (let index = 1; index <= 10; index++) {
  console.log(`${index}.radek - ahoj`);
}

let condition = "ne";

while (condition !== "ano") {
  condition = prompt("zadej ano: ");
  console.log(`zadej ano, zadal jsi ${condition}`);
}
