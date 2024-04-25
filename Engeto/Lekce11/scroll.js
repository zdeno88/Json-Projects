const header = document.querySelector("header");
const heading = document.querySelector("h1");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.style.height = "60px";
    heading.style.lineHeight = "60px";
    heading.style.fontSize = "25px";
  } else {
    header.style.height = "80px";
    heading.style.lineHeight = "80px";
    heading.style.fontSize = "32px";
  }
});
