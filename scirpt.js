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

const TARGET_DATE = new Date("2026-05-25T15:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    const ids = ["H", "M", "S"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "00";
    });
    clearInterval(timer);
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  const elH = document.getElementById("H");
  const elM = document.getElementById("M");
  const elS = document.getElementById("S");

  if (elH) elH.textContent = pad(hours);
  if (elM) elM.textContent = pad(minutes);
  if (elS) elS.textContent = pad(seconds);
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
