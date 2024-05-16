// Logika kódu
class Book {
  constructor(nazevKnihy, autor, rokVydani) {
    this.title = nazevKnihy;
    this.author = autor;
    this.year = rokVydani;
  }
}

// Použití
const myBook = new Book("Harry Potter a Kámen mudrců", "J. K. Rowling", 1997);
const myBook2 = new Book(
  "Harry Potter a Tajemná komnata",
  "J. K. Rowling",
  1998
);
const myBook3 = new Book(
  "Harry Potter a vezeň z Azkabanu",
  "J. K. Rowling",
  1999
);
const books = [myBook, myBook2, myBook3];
console.log(books);

class Car {
  constructor(brand, model, year) {
    this.znacka = brand;
    this.typ = model;
    this.rok = year;
  }
}
const car1 = new Car("audi", "C6", 2002);
const car2 = new Car("volvo", "cx8", 2012);
const car3 = new Car("skoda", "city", 1999);

const cars = [car1, car2, car3];
console.log(cars);
