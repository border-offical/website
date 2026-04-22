<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const checkbox = document.querySelector(".switch input");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    root.classList.add("light");

    if (checkbox) {
      checkbox.checked = true;
    }
  }

  window.switchTheme = function () {
    root.classList.toggle("light");

    const isLight = root.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    if (checkbox) {
      checkbox.checked = isLight;
    }
  };
});
=======
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const checkbox = document.querySelector(".switch input");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    root.classList.add("light");

    if (checkbox) {
      checkbox.checked = true;
    }
  }

  window.switchTheme = function () {
    root.classList.toggle("light");

    const isLight = root.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    if (checkbox) {
      checkbox.checked = isLight;
    }
  };
});
>>>>>>> b34645736c421a461608bdbebab011596ef0a32a
