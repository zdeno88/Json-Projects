const characterName = document.querySelector(".character-name");
const characterSection = document.querySelector(".characters");
const createDiv = (image, name) => {
  const div = document.createElement("div");
  div.classList.add("character-box");
  const p = document.createElement("p");
  p.textContent = name;
  const img = document.createElement("img");
  img.src = image;
  div.append(img);
  div.append(p);
  return div;
};
const renderCharancters = (characters) => {
  characterSection.textContent = "";
  characters.forEach((character) => {
    if (character.image) {
      const filledDiv = createDiv(character.image, character.name);
      characterSection.append(filledDiv);
    }
  });
};
const harryApi = () => {
  fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      characterName.addEventListener("input", () => {
        const inputValue = characterName.value;
        const filteredData = data.filter((oneCharacter) => {
          return oneCharacter.name.toLowerCase().includes(inputValue);
        });
        renderCharancters(filteredData);
      });
      renderCharancters(data);
    });
};
harryApi();
