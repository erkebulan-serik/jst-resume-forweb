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