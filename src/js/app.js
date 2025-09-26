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

document.addEventListener("DOMContentLoaded", () => {
  // === 1-тапсырма ===
  const oldElement = document.getElementById("old-element");
  const btn = document.getElementById("change-btn");

    btn.addEventListener("click", () => {
      // 1. меняем текст старого элемента
      oldElement.textContent = "Сәлем, әлем!";

      // 2. создаём новый элемент
      const newDiv = document.createElement("div");
      newDiv.textContent = "Мен жаңа элементпін!";
      newDiv.className = "new-div";

      // 3. добавляем его в конец body
      document.body.appendChild(newDiv);
    });

  const paragraph = document.createElement("p");
  paragraph.textContent = "Бұл ауыспалы абзац";
  document.getElementById("task1").appendChild(paragraph);
  paragraph.addEventListener("click", () => {
    paragraph.style.color = "red";
    paragraph.style.fontSize = "20px";
  });

  const deleteBtn = document.getElementById("delete-btn");
    deleteBtn.addEventListener("click", () => {
      oldElement.remove();
    });

  // === 2-тапсырма ===
  const toggleDiv = document.getElementById("toggle-class");
  const classListP = document.getElementById("class-list");

  toggleDiv.addEventListener("click", () => {
    toggleDiv.classList.toggle("active");

    // вывести классы
    const classes = toggleDiv.classList.value;
    console.log(classes);
    classListP.textContent = "Классы: " + classes;
  });

  // === 3-тапсырма (Tabs) ===
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // снять active со всех
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.add("hidden"));

      // активировать выбранный
      tab.classList.add("active");
      const target = document.getElementById("tab-" + tab.dataset.tab);
      target.classList.remove("hidden");
    });
  });
});
