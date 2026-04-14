(function () {
  "use strict";

  const themeButtons = document.querySelectorAll(".header__theme-menu-button");
  const htmlElement = document.documentElement;

  const updateActiveButton = (activeTheme) => {
    themeButtons.forEach((button) => {
      const buttonTheme = button.dataset.theme;

      if (buttonTheme === activeTheme) {
        button.classList.add("header__theme-menu-button_active");
        button.setAttribute("aria-pressed", "true");
        button.disabled = true;
      } else {
        button.classList.remove("header__theme-menu-button_active");
        button.setAttribute("aria-pressed", "false");
        button.disabled = false;
      }
    });
  };

  const setTheme = (theme) => {
    // Удаляем все классы тем
    htmlElement.classList.remove("theme-dark", "theme-light", "theme-auto");

    if (theme === "dark" || theme === "light") {
      htmlElement.classList.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
      updateActiveButton(theme);
    } else if (theme === "auto") {
      htmlElement.classList.add("theme-auto");
      localStorage.setItem("theme", "auto");
      updateActiveButton("auto");

      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      if (prefersDark) {
        htmlElement.classList.add("theme-dark");
      } else {
        htmlElement.classList.add("theme-light");
      }
    }
  };

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.theme;
      setTheme(theme);
    });
  });

  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
  } else {
    initTheme();
  }
})();
