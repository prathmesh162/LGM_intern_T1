const navLinks = document.querySelector(".navLinks");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", function () {
  toggleFun(navLinks);
});

//toggle function
function toggleFun(clic) {
  clic.classList.toggle("show-navLinks");
}

//Scroll - Navbar
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navFull = document.querySelector(".navFull");
  const navHeight = navFull.offsetHeight;

  if (scrollHeight > navHeight) {
    navFull.classList.add("fixNav");
  } else {
    navFull.classList.remove("fixNav");
  }

  //Back to top link
  const topLink = document.querySelector(".top-link");
  if (scrollHeight > 700) {
    topLink.classList.add("show-top-link");
  } else {
    topLink.classList.remove("show-top-link");
  }
  topLink.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
});

//Image Carousel
let images = [
  "image/img0.jpg",
  "image/img1.jpg",
  "image/img2.jpg",
  "image/img3.jpg",
  "image/img4.jpg",
];

const bigImg = document.querySelector(".big-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const imgs = document.querySelectorAll(".img");
var slider = document.querySelector("#slider");
let i = 0;

function changeImg() {
  let currentImg = 0;
  bigImg.innerHTML = images
    .map(function (image) {
      return `<img src="${image}"/>`;
    })
    .join("");

  let imageNodes = bigImg.querySelectorAll("img");
  imageNodes[currentImg].classList.add("show-big");

  slider.innerHTML = bigImg.innerHTML;

  var sliderNodes = slider.querySelectorAll("img");
  sliderNodes[currentImg].classList.add("active");

  for (let i = 0; i < sliderNodes.length; i++) {
    sliderNodes[i].addEventListener("click", function () {
      slider.querySelector("img.active").classList.remove("active");
      sliderNodes[i].classList.add("active");
      imageNodes[currentImg].classList.remove("show-big");
      currentImg = i;
      imageNodes[currentImg].classList.add("show-big");
    });
  }

  prev.addEventListener("click", function () {
    imageNodes[currentImg].classList.remove("show-big");
    slider.querySelector("img.active").classList.remove("active");
    currentImg--;
    if (currentImg < 0) {
      currentImg = images.length - 1;
    }
    imageNodes[currentImg].classList.add("show-big");
    sliderNodes[currentImg].classList.add("active");
  });

  next.addEventListener("click", function () {
    imageNodes[currentImg].classList.remove("show-big");
    slider.querySelector("img.active").classList.remove("active");
    currentImg++;
    if (currentImg > images.length - 1) {
      currentImg = 0;
    }
    imageNodes[currentImg].classList.add("show-big");
    sliderNodes[currentImg].classList.add("active");
  });
}

// Video carousel

const vidCar = document.querySelector(".vid-car");
const vidSlider = vidCar.querySelector(".vid-slider");
const backBtn = vidCar.querySelector(".back-btn");
const forwardBtn = vidCar.querySelector(".forward-btn");
var videos = [
  "video/vid0.mp4",
  "video/vid1.mp4",
  "video/vid2.mp4",
  "video/vid3.mp4",
];
var titles = ["One", "Two", "Three", "Four"];
let j = 0;
function changeVid() {
  vidSlider.innerHTML = `
  <video src="${videos[j]}" controls autoplay></video> <p class="vid-title">${titles[j]}<p>`;
}

backBtn.addEventListener("click", function () {
  j--;
  if (j < 0) {
    j = videos.length - 1;
  }

  changeVid();
});

forwardBtn.addEventListener("click", function () {
  j++;
  if (j > videos.length - 1) {
    j = 0;
  }
  changeVid();
});

//Onload
changeVid();
changeImg();
