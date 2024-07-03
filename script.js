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
swiperAnimation();
