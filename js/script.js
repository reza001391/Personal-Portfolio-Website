// ===== Select the menu icon and navigation bar =====
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// ===== Select all sections and nav links =====
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// ===== Change active nav link on scroll =====
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// ===== Toggle mobile menu icon and navbar visibility =====
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.addEventListener("resize", () => {
  // بستن منو هنگام تغییر اندازه
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // اگر Swiper دارید و تنظیماتش تغییر می‌کنه، دوباره initialize کنید (در صورت نیاز)
  swiper.update();
});
document.querySelector(".contact form").addEventListener("click", function (e) {
  e.stopPropagation();
});
