const quoteSection = document.querySelector(".result");

const paragraphToWebsite = (content, whereToAdd) => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = content;
  whereToAdd.append(newParagraph);
};
const getQuote = async () => {
  try {
    const response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    paragraphToWebsite(data.quote, quoteSection);
    console.log(data.quote);
  } catch (error) {
    console.log("nastala chyba", error);
  }
};

getQuote();

try {
  const x = 10;
  const y = z + 5; // Záměrně použita proměnné z, která neexistuje
  console.log(x + y);
} catch (error) {
  console.log("Nastala chyba", error);
}
