// === app.js ===

document.addEventListener("DOMContentLoaded", () => {
  console.log("CozySite загружен!");
 const cards = document.querySelectorAll(".card");
  const glowClasses = ["glow-red", "glow-blue", "glow-green"];

  cards.forEach(card => {
    const randomGlow = glowClasses[Math.floor(Math.random() * glowClasses.length)];
    card.classList.add(randomGlow);
  });

  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-theme", savedTheme);
  toggleBtn.setAttribute("aria-pressed", savedTheme === "dark" ? "true" : "false");

  toggleBtn.addEventListener("click", () => {
    const isDark = body.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    body.setAttribute("data-theme", newTheme);
    toggleBtn.setAttribute("aria-pressed", isDark ? "false" : "true");

    localStorage.setItem("theme", newTheme);
  });
});
// это для анимаций
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.classList.add("page-transition");

  // плавное появление
  setTimeout(() => {
    body.classList.add("page-loaded");
  }, 10);

  // плавный уход при клике по ссылке
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    link.addEventListener("click", e => {
      const target = link.getAttribute("href");

      if (target && !target.startsWith("#") && !target.startsWith("mailto:")) {
        e.preventDefault();
        body.classList.remove("page-loaded");

        setTimeout(() => {
          window.location.href = target;
        }, 600); // время такое же, как transition
      }
    });
  });
});
