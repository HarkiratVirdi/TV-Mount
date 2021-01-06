gsap.registerPlugin(ScrollTrigger);

let setMenu = false;
const navToggle = document.querySelector(".nav-toggle");
let tl = gsap.timeline();
const navLinks = document.querySelectorAll(".nav-links");

console.log(navLinks);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    setMenu = false;
    closeMenu();
  });
});

navToggle.addEventListener("click", () => {
  if (!setMenu) {
    setMenu = true;
    openMenu();
    console.log("clicked open");
  } else {
    setMenu = false;
    console.log("clicked false");
    closeMenu();
  }
});

const openMenu = () => {
  tl.to("nav", 1, {
    y: "0",
    ease: "power4",
  })

    .to(".hamburger-menu span", 0.6, {
      delay: -1,
      scaleX: 0,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })

    .to(".hamburger-menu-close", 0.6, {
      delay: -0.8,
      css: { display: "block" },
    });
};

const closeMenu = () => {
  tl.to(".hamburger-menu span", 0.6, {
    delay: -0.6,
    scaleX: 1,
    transformOrigin: "50% 0%",
    ease: "expo.inOut",
  })
    .to(".hamburger-menu-close", 0, {
      delay: -0.1,
      css: { display: "none" },
    })
    .to("nav", 1, {
      y: "-1000",
      ease: "power1.inOut",
    });
};

window.addEventListener("resize", function () {
  if (window.innerWidth <= 900 && window.innerWidth >= 850) {
    location.reload();
  }
});

const links = document.querySelectorAll(".nav-links .heading-5");
const footerLinks = document.querySelectorAll(".footer__link");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
for (const link of footerLinks) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
