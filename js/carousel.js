// const numberOfSlides = document.querySelector(".carousel__slides").children
//   .length;
// const arrowLeft = document.querySelector(".slide__arrow--left");
// const arrowRight = document.querySelector(".slide__arrow--right");
// const carouselSlides = document.querySelector(".carousel__slides");
// let index = 0;
// let currentTransformed = 0;
// let clicked = false;

// setInterval(() => {
//   if (!clicked) {
//     transformToRight();
//   }
// }, 3500);

// const transformToLeft = () => {
//   clicked = true;
//   currentTransformed = currentTransformed - 100 / numberOfSlides;
//   const activeSlide = document.querySelector(".slide__active");
//   if (index >= 1) {
//     index--;
//     carouselSlides.style.transform = `translateX(${-currentTransformed}%)`;
//   } else if (index <= 0) {
//     index = numberOfSlides - 1;
//     currentTransformed = (100 / numberOfSlides) * numberOfSlides - 1;
//     carouselSlides.style.transform = `translateX(${
//       (100 / numberofSlides) * 3
//     }%)`;
//   }
//   setTimeout(() => {
//     clicked = false;
//   }, 2000);
//   removeAndAddClass(activeSlide);
// };

// const transformToRight = () => {
//   clicked = true;
//   currentTransformed = currentTransformed + 100 / numberOfSlides;
//   carouselSlides.style.transform = `translateX(${-currentTransformed}%)`;
//   const activeSlide = document.querySelector(".slide__active");
//   if (index < numberOfSlides - 1) {
//     index++;
//   } else {
//     index = 0;
//     carouselSlides.style.transform = `translateX(0%)`;
//     currentTransformed = 0;
//   }
//   setTimeout(() => {
//     clicked = false;
//   }, 2000);
//   removeAndAddClass(activeSlide);
// };

// const removeAndAddClass = (slide) => {
//   slide.classList.remove("slide__active");
//   const newActiveSlide = document.querySelectorAll(".slide")[index];
//   newActiveSlide.classList.add("slide__active");
// };

// arrowLeft.addEventListener("click", transformToLeft);
// arrowRight.addEventListener("click", transformToRight);
