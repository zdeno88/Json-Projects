const form = document.getElementById("form");
const emailInput = document.querySelector(".email");
const resultText = document.querySelector(".text");
const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");

    resultText.textContent = "Váš email je ve správném formátu";
    resultText.style.color = "#00ff00";
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");

    resultText.textContent = "Váš email není ve správném formátu";
    resultText.style.color = "#ff0000";
  }
  if (email.includes("@")) {
    console.log("obsahuje @");
  }
});
