let mode = "";
const modeArray = ["dark", "light"];
const p = document.querySelector("p");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
do {
  mode = prompt("Chcete dark mode, light mode nebo white mode? dark / light");
} while (!modeArray.includes(mode));
{
  if (mode === "dark") {
    body.style.backgroundColor = "black";
    p.style.color = "white";
    h1.style.color = "white";
  }
}
