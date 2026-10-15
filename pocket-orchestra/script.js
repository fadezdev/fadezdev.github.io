const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");

if (year) year.textContent = new Date().getFullYear();

const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 16);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const elements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );
  elements.forEach((element) => observer.observe(element));
} else {
  elements.forEach((element) => element.classList.add("visible"));
}
