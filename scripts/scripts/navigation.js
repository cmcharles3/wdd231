const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  // Toggle the 'open' class on the nav element
  const isOpen = mainNav.classList.toggle("open");
  
  // Update the aria-expanded attribute for accessibility
  menuBtn.setAttribute("aria-expanded", isOpen);
});