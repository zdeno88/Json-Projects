const quoteBox = document.querySelector(".quote-box");
const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
const googleBtn = document.querySelector(".google-button");
const nextQuoteBtn = document.querySelector(".next-quote");
const loader = document.querySelector(".loader");

const hideLoading = () => {
  if (!loader.hidden) {
    quoteBox.hidden = false;
    loader.hidden = true;
  }
};

const loading = () => {
  quoteBox.hidden = true;
  loader.hidden = false;
};

const getQuote = () => {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      const randomNumber = Math.floor(Math.random() * data.length);
      quoteText.textContent = data[randomNumber].text;

      console.log(randomNumber);
      console.log(data[randomNumber].text);
      console.log(data[randomNumber].author);
      if (data[randomNumber].author.includes(",")) {
        const authorArray = data[randomNumber].author.split(",");
        quoteAuthor.textContent = authorArray[0];
      } else if (data[randomNumber].author === "type.fit") {
        quoteAuthor.textContent = "autor neznamy";
      } else {
        quoteAuthor.textContent = data[randomNumber].author;
      }
      hideLoading();
    });
};
const googleSearch = () => {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent;
  const url = `https://www.google.com/search?q=${quote} - ${author}`;
  window.open(url);
  console.log(quote, author);
};

loading();
getQuote();

googleBtn.addEventListener("click", googleSearch);
nextQuoteBtn.addEventListener("click", getQuote);
