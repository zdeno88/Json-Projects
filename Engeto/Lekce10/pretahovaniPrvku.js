const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");

boxes.forEach((oneBox) => {
  oneBox.addEventListener("dragover", (event) => {
    event.preventDefault();
    oneBox.classList.add("hovering");
  });
  oneBox.addEventListener("dragleave", () => {
    oneBox.classList.remove("hovering");
  });
  oneBox.addEventListener("drop", () => {
    oneBox.append(image);
    oneBox.classList.remove("hovering");
  });
});
