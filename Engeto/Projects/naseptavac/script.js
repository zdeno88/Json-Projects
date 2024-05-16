const availableKeywords = [
  "Harry Potter",
  "Hermiona Grangerová",
  "Ronald Weasley",
  "Albus Brumbál",
  "Dobby",
  "Rubeus Hagrid",
];

const input = document.querySelector("input");
const resultBox = document.querySelector(".result-box");
const showAutocompleteResults = () => {
  let inputContent = input.value.toLowerCase();

  let results = inputContent.length
    ? availableKeywords.filter((oneKeyword) =>
        oneKeyword.toLowerCase().includes(inputContent)
      )
    : [];

  //   let results = [];
  //   if (inputContent.length) {
  //     results = availableKeywords.filter((oneKeyword) => {
  //       return oneKeyword.toLowerCase().includes(inputContent);
  //     });
  //   }

  if (results.length) {
    display(results);
  } else {
    resultBox.innerHTML = "";
  }
};

const display = (array) => {
  const ul = document.createElement("ul");
  array.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    li.addEventListener("click", () => {
      input.value = element;
      resultBox.innerHTML = "";
    });
    ul.append(li);
  });
  resultBox.innerHTML = "";
  resultBox.append(ul);
};

input.addEventListener("keyup", showAutocompleteResults);
