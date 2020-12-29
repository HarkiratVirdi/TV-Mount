// const scrollVariables = {
//   current: 0,
//   target: 0,
//   ease: 0.065,
//   rafId: undefined,
//   containerHeight: undefined,
//   rafActive: false,
//   height: 0,
// };
// const container = document.querySelector(".full_container");

// const setBodyHeight = () => {
//   scrollVariables.height = container.getBoundingClientRect().height;
//   document.body.style.height = scrollVariables.height + "px";
// };

// setBodyHeight();

// window.addEventListener("scroll", function () {
//   function setTransform(el, transform) {
//     el.style.transform = transform;
//     el.style.WebkitTransform = transform;
//   }

//   const setupAnimation = () => {
//     if (scrollVariables.height === 0) {
//       setBodyHeight();
//     }
//     startAnimation();
//   };

//   function startAnimation() {
//     if (!scrollVariables.rafActive) {
//       scrollVariables.rafActive = true;
//       scrollVariables.rafId = requestAnimationFrame(updateAnimation);
//     }
//   }

//   function updateScroll() {
//     scrollVariables.target = window.scrollY || window.pageYOffset;
//     startAnimation();
//   }

//   function updateAnimation() {
//     // Difference between `target` and `current` scroll position
//     var diff = scrollVariables.target - scrollVariables.current;
//     // `delta` is the value for adding to the `current` scroll position
//     // If `diff < 0.1`, make `delta = 0`, so the animation would not be endless
//     var delta = Math.abs(diff) < 0.1 ? 0 : diff * scrollVariables.ease;

//     if (delta) {
//       // If `delta !== 0`
//       // Update `current` scroll position
//       scrollVariables.current += delta;
//       // Round value for better performance
//       scrollVariables.current = parseFloat(scrollVariables.current.toFixed(2));
//       // Call `update` again, using `requestAnimationFrame`
//       scrollVariables.rafId = requestAnimationFrame(updateAnimation);
//     } else {
//       // If `delta === 0`
//       // Update `current`, and finish the animation loop
//       scrollVariables.current = scrollVariables.target;
//       scrollVariables.rafActive = false;
//       cancelAnimationFrame(scrollVariables.rafId);
//     }

//     // Set the CSS `transform` corresponding to the custom scroll effect
//     setTransform(container, "translateY(" + -scrollVariables.current + "px)");
//   }

//   // Listen for `scroll` event to update `target` scroll position
// //
//   window.addEventListener("scroll", updateScroll);
//   window.addEventListener("resize", setupAnimation);
//   // Initial setup
//   setupAnimation();
// });

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

const numberOfSlides = document.querySelector(".carousel__slides").children
  .length;
console.log(numberOfSlides);
const arrowLeft = document.querySelector(".slide__arrow--left");
const arrowRight = document.querySelector(".slide__arrow--right");
const carouselSlides = document.querySelector(".carousel__slides");
let index = 0;
let currentTransformed = 0;

setInterval(() => {
  transformToRight();
}, 5000);

const transformToLeft = () => {
  currentTransformed = currentTransformed - 100 / 5;
  const activeSlide = document.querySelector(".slide__active");
  if (index >= 1) {
    index--;
    carouselSlides.style.transform = `translateX(${-currentTransformed}%)`;
  } else if (index <= 0) {
    index = numberOfSlides - 1;
    currentTransformed = 80;
    carouselSlides.style.transform = `translateX(-80%)`;
  }
  removeAndAddClass(activeSlide);
};

const transformToRight = () => {
  currentTransformed = currentTransformed + 100 / 5;
  carouselSlides.style.transform = `translateX(${-currentTransformed}%)`;
  const activeSlide = document.querySelector(".slide__active");
  if (index < numberOfSlides - 1) {
    index++;
  } else {
    index = 0;
    carouselSlides.style.transform = `translateX(0%)`;
    currentTransformed = 0;
  }
  removeAndAddClass(activeSlide);
};

const removeAndAddClass = (slide) => {
  slide.classList.remove("slide__active");
  const newActiveSlide = document.querySelectorAll(".slide")[index];
  newActiveSlide.classList.add("slide__active");
};

arrowLeft.addEventListener("click", transformToLeft);
arrowRight.addEventListener("click", transformToRight);
