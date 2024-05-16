const switcher = document.querySelector(".switch input");
const header = document.querySelector("header");
const themeText = document.querySelector(".switcher-description p");
const themeIcon = document.querySelector(".switcher-description i");

const darkMode = () => {
  themeText.textContent = "Dark mode";
  themeIcon.classList.replace("fa-sun", "fa-moon");
};
const lignkMode = () => {
  themeText.textContent = "Light mode";
  themeIcon.classList.replace("fa-moon", "fa-sun");
};

const switcherTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lignkMode();
  }
};

switcher.addEventListener("change", switcherTheme);
