const res = document.querySelector(".result");
const form = document.querySelector("form");
const countryInput = document.querySelector(".country-name");
const createPar = (res, data) => {
  const par = document.createElement("p");
  par.textContent = data;
  res.append(par);
};
const universe = fetch("http://api.open-notify.org/iss-now.json")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data.iss_position.latitude);
    console.log(data.iss_position.longitude);
  });
const linkToWebsite = (linkContent, urlAddress, whereToAdd) => {
  const newLink = document.createElement("a");
  newLink.target = "_blank";
  newLink.textContent = linkContent;
  newLink.href = urlAddress;
  whereToAdd.append(newLink);
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const countryName = countryInput.value;
  const country = async () => {
    res.textContent = "";
    const data = await fetch(
      "https://restcountries.com/v3.1/name/" + countryName
    );
    const json = await data.json();
    createPar(res, json[0].capital[0]);
    createPar(res, json[0].name.common);
    createPar(res, json[0].region);
    countryInput.value = "";
  };
  country();
});
const universe2 = async () => {
  const data = await fetch("http://api.open-notify.org/iss-now.json");
  const json = await data.json();
  latitude = json.iss_position.latitude;
  longitude = json.iss_position.longitude;
  console.log(json.iss_position.latitude);
  createPar(res, "Sirka: " + latitude);
  createPar(res, "Delka: " + longitude);
  const url =
    "https://mapy.cz/zakladni?source=muni&ds=2&x=" +
    longitude +
    "&y=" +
    latitude +
    "&z=6";
  console.log(url);
  linkToWebsite("Odkaz na mapu", url, res);
};
universe2();
