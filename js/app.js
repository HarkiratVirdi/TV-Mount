// import "./navbar.js";
import "./carousel.js";

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let toggler = document.getElementById("toggler");

console.log(toggler);
navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  toggler.classList.toggle("fa-times");
});

let navbar = document.getElementById("js-navbar");
let navBtn = document.getElementById("js-btn-black");
window.onscroll = function () {
  if (
    document.documentElement.scrollTop >= 200 ||
    document.body.scrollTop >= 200
  ) {
    navbar.classList.add("navbar__sticky");
    navBtn.classList.remove("cta-btn--white");
    navBtn.classList.add("cta-btn--black");
  } else {
    //   navbar.classList.add("nav-transparent");
    navBtn.classList.add("cta-btn--white");
    navBtn.classList.remove("cta-btn--black");
    navbar.classList.remove("navbar__sticky");
  }
};
