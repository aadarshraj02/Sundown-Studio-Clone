const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const elemContainer = document.querySelector("#elem-container");
const imageContainer = document.querySelector("#image-container");

elemContainer.addEventListener("mouseenter", () => {
  imageContainer.style.display = "block";
});
elemContainer.addEventListener("mouseleave", () => {
  imageContainer.style.display = "none";
});

var elemAll = document.querySelectorAll(".elem");
elemAll.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    var img = e.getAttribute("data-image");
    imageContainer.style.backgroundImage = `url(${img})`;
  });
});

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

const menu = document.querySelector("nav h3");
const fullScr = document.querySelector("#full-scr");
const navImg = document.querySelector("nav img");
var flag = 0;

menu.addEventListener("click", () => {
  if (flag == 0) {
    fullScr.style.top = 0;
    navImg.style.opacity = 0;
    flag = 1;
  } else {
    fullScr.style.top = "-100%";
    navImg.style.opacity = 1;
    flag = 0;
  }
});

swiperAnimation();
