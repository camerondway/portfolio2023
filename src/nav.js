export function initNavigation() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const navbar = document.querySelector(".navbar");

  hamburgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      hamburgerIcon.classList.remove("active");
    });
  });
}
