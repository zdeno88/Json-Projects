class Book {
  constructor(title, author, year, price) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
  }
  changePrice(amount) {
    this.price = this.price + amount;
  }
}

// Použití
const myBook = new Book(
  "Harry Potter a Kámen mudrců",
  "J. K. Rowling",
  1997,
  800
);
const myBook2 = new Book(
  "Harry Potter a Tajemná komnata",
  "J. K. Rowling",
  1998,
  900
);
const myBook3 = new Book(
  "Harry Potter a vezeň z Azkabanu",
  "J. K. Rowling",
  1999,
  1000
);
const books = [myBook, myBook2, myBook3];
console.log(books);
myBook.changePrice(12);
myBook2.changePrice(50);
myBook3.changePrice(60);
console.log(books);
