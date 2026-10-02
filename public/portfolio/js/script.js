// ============ Ano atual no rodapé ============
document.getElementById("year").textContent = new Date().getFullYear();

// ============ Efeito de digitação ============
const roles = [
  "Engenharia de Software",
  "Desenvolvedor Web",
  "Entusiasta de Tecnologia",
  "Aprendiz de Python",
];

const typedElement = document.getElementById("typed");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 2000; // pausa no fim da palavra
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// ============ Menu mobile ============
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// ============ Header com sombra ao rolar ============
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ============ Botão voltar ao topo ============
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 400);
});

// ============ Link ativo na navegação ============
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      document.querySelectorAll(".nav__link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// ============ Animação de entrada dos elementos ============
const revealTargets = document.querySelectorAll(
  ".skill-card, .goal-card, .timeline__item, .contact-card, .about__text, .about__info"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
