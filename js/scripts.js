//alert("Hello world");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
    navLink.parentElement.classList.remove("active");
    if (navLink.classList.contains(current)) {
      navLink.classList.add("active");
      navLink.parentElement.classList.add("active");
    }
  });
});
