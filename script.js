
  let menuIcon = document.getElementById("menu-icon");
  let navlist = document.getElementById("navlist");

  // Toggle nav on icon click
  menuIcon.addEventListener("click", () => {
    navlist.classList.toggle("show");
  });

  // Close nav when any link is clicked (mobile)
  let navLinks = document.querySelectorAll(".navlist li a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navlist.classList.remove("show");
      }
    });
  });



