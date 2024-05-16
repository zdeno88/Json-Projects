class BankAccount {
  #pin;

  constructor(firstName, secondName, pin) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.#pin = pin;
    this.income = 0;
    this.expense = 0;
    this.movements = [];
    this.currentState = 0;
  }
  pinChecker(pin) {
    if (this.#pin != pin) {
      window.location.replace("bankAppWrong.html");
    }
  }
  createIncome(value) {
    this.income += value;
    this.#addMovement(value);
  }
  createExpense(value) {
    this.expense += value;
    this.#addMovement(value);
  }
  #addMovement(value) {
    this.movements.push(value);
  }
  #returnCurrentStatus() {
    return (this.currentState = this.income + this.expense);
  }
  listingcurrentState(where) {
    where.textContent = "";
    const par = document.createElement("p");
    par.textContent = this.#returnCurrentStatus();
    where.append(par);
  }
}
const account1 = new BankAccount("David", "Setek", 1234);

const pin = parseInt(prompt("zadej pin"));
account1.pinChecker(pin);

const formMovement = document.querySelector(".form-movement form");
const movementInput = document.querySelector(".movement");
const result = document.querySelector(".result");
const button = document.querySelector(".btn-movements");
const write = document.querySelector(".all-movements-result");

formMovement.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = parseInt(movementInput.value);
  if (value > 0) {
    account1.createIncome(value);
  } else {
    account1.createExpense(value);
  }
  movementInput.value = "";
  account1.listingcurrentState(result);
});
button.addEventListener("click", () => {
  write.textContent = "";
  account1.movements.forEach((e) => {
    const par = document.createElement("p");
    par.textContent = e;
    write.append(par);
  });
});
