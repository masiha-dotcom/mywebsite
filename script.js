// Terraform Media site JS

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  mobileMenuBtn.classList.toggle("active");
});

// Simple progress animation
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});