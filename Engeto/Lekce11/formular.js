const formular = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const notName = document.querySelector(".notificationName");
const notEmail = document.querySelector(".notificationEmail");
formular.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(fullName.value);
  console.log(email.value);
  // if (fullName.value === "") {
  //   notName.style.display = "block";
  // }
  // if (email.value === "") {
  //   notEmail.style.display = "block";
  // }
  notName.style.display = fullName.value === "" ? "block" : "none";
  notEmail.style.display = email.value === "" ? "block" : "none";
});
