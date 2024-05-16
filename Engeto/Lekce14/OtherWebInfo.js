const p = document.createElement("p");
const body = document.querySelector("body");
// Asynchronní část - setTimeout
setTimeout(() => {
  p.textContent = "Učím se JavaScript";
  p.style.color = "blue";
  body.prepend(p);
}, 5000);
console.log("test");
const quotes = [
  [
    {
      title: "Bez práce nejsou koláče",
      country: "CZ",
    },
    1,
  ],
  [
    {
      title: "Darovanému koni na zuby nekoukej",
      country: "CZ",
    },
    2,
  ],
  [
    {
      title: "Co je šeptem, to je čertem",
      country: "CZ",
    },
    3,
  ],
  [
    {
      title: "Kto si myslí, že vie všetko, nič nevie.",
      country: "SK",
    },
    4,
  ],
  [
    {
      title: "Ranní ptáče dále doskáče",
      country: "CZ",
    },
    5,
  ],
  [
    {
      title: "Kam nechodí slunce, musí lékař",
      country: "CZ",
    },
    6,
  ],
  [
    {
      title: "Chybami se člověk učí",
      country: "CZ",
    },
    7,
  ],
];
const res = document.querySelector(".result");
const createPar = (res, data) => {
  const par = document.createElement("p");
  par.textContent = data;
  res.append(par);
};
console.log(res);
quotes.forEach((e) => {
  console.log(e[0]["title"]);
});
const request = fetch("https://api.kanye.rest/")
  .then((response) => {
    const resConst = response.json();
    console.log(resConst);
    return resConst;
  })
  .then((data) => {
    console.log(data);
    console.log(data.quote);
    createPar(res, data.quote);
  });
