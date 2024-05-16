class Ucet {
  constructor(firstName, secondName, pin) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.pin = pin;
  }

  vlozit(castka) {
    // možnost napsat určitý kód
  }

  vybrat(castka) {
    // možnost napsat určitý kód
  }

  zobrazitZustatek() {
    // možnost napsat určitý kód
  }
}

class BankonciUcet extends Ucet {
  zobrazitZustatek() {
    console.log("Bankovni ucet ma zustatek XY Kc");
  }
}
class SporiciiUcet extends Ucet {
  zobrazitZustatek() {
    console.log("Sporici ucet ma zustatek XY Kc");
  }
}
const bankUcet = new BankonciUcet("jan", "maly", 1234);
console.log(bankUcet.firstName);
console.log(bankUcet.secondName);
console.log(bankUcet.pin);
bankUcet.zobrazitZustatek();

const sporUcet = new SporiciiUcet("vit", "velky", 1234);
console.log(sporUcet.firstName);
console.log(sporUcet.secondName);
console.log(sporUcet.pin);
sporUcet.zobrazitZustatek();
