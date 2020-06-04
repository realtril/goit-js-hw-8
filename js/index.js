import data from "./gallery-items.js";
import { tempImgPic } from "./templateImgJs.js";
const largeImg = document.querySelector(".lightbox__image");

const list = document.querySelector(".js-gallery");

const allLi = data.map((item) => tempImgPic(item)).join("");

list.insertAdjacentHTML("beforeend", allLi);

list.addEventListener("click", clickList);

function clickList(event) {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    const { source } = event.target.dataset;
    lightbox.classList.add("is-open");
    setLarge(source);
  }
}

function setLarge(url) {
  largeImg.src = url;
}

const lightbox = document.querySelector(".lightbox", showModal);

const btnClose = document.querySelector(
  "button[data-action='close-lightbox']",
  closeModal
);

const overlay = document.querySelector("div.lightbox__overlay", clickByModal);

function closeModal() {
  lightbox.classList.remove("is-open");
}

function showModal() {
  lightbox.classList.add("active");
}

function clickByModal(e) {
  if (e.target !== e.currentTarget) return;
  console.log(e.target, e.currentTarget);
  overlay.classList.remove("active");
}

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 27) {
    closeModal();
  }
});
