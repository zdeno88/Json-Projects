const emailInputs = document.querySelectorAll(".email-input");
const paragraphText = document.querySelector(".result-text");

// Funkce
// - načtení hodnot z políček formuláře
const getInputContent = (input) => {
  return input.value;
};
// - naplnění odstavce
const insertContent = (htmlTag, content) => {
  htmlTag.textContent = content;
};
// - přidání a odebrání classy
const addClass = (htmltag, className) => {
  htmltag.classList.add(className);
};
const removeClass = (htmltag, className) => {
  htmltag.classList.remove(className);
};
// - vymazání textu v dostavci, pokud jsou políčka prázdná
const htmlTagCleaner = (input1value, input2value, htmlTag) => {
  if (input1value == "" && input2value == "") {
    htmlTag.textContent = "";
  }
};

emailInputs.forEach((oneInput) => {
  console.log(oneInput);
  oneInput.addEventListener("input", () => {
    const email1Value = getInputContent(emailInputs[0]);
    const email2Value = getInputContent(emailInputs[1]);

    if (email1Value == email2Value) {
      insertContent(paragraphText, "Emaily jsou shodné");
      addClass(paragraphText, "valid");
      removeClass(paragraphText, "invalid");
    } else {
      insertContent(paragraphText, "Emaily nejsou stejné");
      addClass(paragraphText, "invalid");
      removeClass(paragraphText, "valid");
    }

    htmlTagCleaner(email1Value, email2Value, paragraphText);
  });
});
