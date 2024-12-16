var navLinks = document.getElementById("navLinks");

function toggleMenu() {
  navLinks.style.right = navLinks.style.right === "0" ? "-200px" : "0";
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Cantor College!");
});

