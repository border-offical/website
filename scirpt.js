const root = document.documentElement;
const checkbox = document.querySelector(".switch input");

// Theme laden
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.classList.add("light");
  checkbox.checked = true;
}

function switchTheme() {
  root.classList.toggle("light");

  if (root.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    checkbox.checked = true;
  } else {
    localStorage.setItem("theme", "dark");
    checkbox.checked = false;
  }
}
