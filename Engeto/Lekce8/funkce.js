const num1 = parseInt(prompt("Zadej cislo1:"));
const num2 = parseInt(prompt("Zadej cislo2:"));

if (Number.isFinite(num1) && Number.isFinite(num2)) {
  const section = document.querySelector(".result");

  const add = (num1, num2) => {
    return num1 + num2;
  };

  const sub = (num1, num2) => {
    return num1 - num2;
  };

  const div = (num1, num2) => {
    return num1 / num2;
  };

  const mul = (num1, num2) => {
    return num1 * num2;
  };

  const createResult = (text, result, sec) => {
    const p = document.createElement("p");
    p.textContent = `${text} ${num1} a ${num2} je:` + result;
    sec.append(p);
  };

  const resAdd = add(num1, num2);
  const resSub = sub(num1, num2);
  const resMul = mul(num1, num2);
  const resDiv = div(num1, num2);

  createResult("soucet", resAdd, section);
  createResult("odecet", resSub, section);
  createResult("soucin", resMul, section);
  createResult("podil", resDiv, section);
} else {
  console.log("spatne vstupy");
}
