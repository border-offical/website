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

document.querySelectorAll("[data-toggle]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.toggle);
    if (!target) return;

    const isOpen = target.classList.contains("open");

    document.querySelectorAll(".toggle-panel.open").forEach((panel) => {
      panel.classList.remove("open");
    });

    if (!isOpen) target.classList.add("open");
  });
});
