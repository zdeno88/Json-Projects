const h = document.querySelector("h1");
h.addEventListener("click", () => {
  h.style.backgroundColor = "pink";
  h.style.color = "blue";
  console.log("Bylo kliknuto na nadpis H1");
});

const p = document.querySelector("p");
p.addEventListener("click", () => {
  p.style.color = "yellow";
  p.style.fontSize = "20px";
  p.style.backgroundColor = "black";
});
const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.display = "none";
});
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
img1.addEventListener("mouseenter", () => {
  console.log("najeti mysi");
  img1.style.transform = "scale(1.1)";
});
img1.addEventListener("mouseleave", () => {
  img1.style.transform = "scale(1)";
});
img2.addEventListener("mouseenter", () => {
  img2.style.transform = "rotate(25deg)";
});
img2.addEventListener("mouseleave", () => {
  img2.style.transform = "rotate(0deg)";
});
img1.addEventListener("mouseenter", () => {
  img1.src =
    "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863";
});
img1.addEventListener("mouseleave", () => {
  img1.src =
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg";
});
let isImg2 = true;
img2.addEventListener("click", () => {
  if (isImg2) {
    img2.src =
      "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863";
    isImg2 = false;
  } else {
    img2.src =
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg";
    isImg2 = true;
  }
});
