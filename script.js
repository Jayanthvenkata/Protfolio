const menuIcon = document.getElementById("menu-icon");
const navlist = document.getElementById("navlist");

menuIcon.addEventListener("click", () => {
  navlist.classList.toggle("show");
});
