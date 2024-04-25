const ta = document.querySelector(".message");
const counterParagraph = document.querySelector(".text-counter");

ta.addEventListener("input", () => {
  let lettersCount = ta.value.length;
  console.log(lettersCount);
  if (lettersCount >= 80) {
    ta.style.color = "red";
    counterParagraph.style.color = "red";
  } else if (lettersCount > 40 && lettersCount < 80) {
    ta.style.color = "orange";
    counterParagraph.style.color = "orange";
  } else {
    ta.style.color = "white";
    counterParagraph.style.color = "white";
  }
  counterParagraph.textContent = 80 - lettersCount;
});
