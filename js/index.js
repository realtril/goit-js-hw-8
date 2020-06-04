import data from "./gallery-items.js";
import { tempImgPic } from "./templateImgJs.js";
let largeImg = document.querySelector(".lightbox__image");

const list = document.querySelector(".js-gallery");

const allLi = data.map((item) => tempImgPic(item)).join("");

list.insertAdjacentHTML("beforeend", allLi);

const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, i) {
  item.setAttribute("data-index", i);
});

list.addEventListener("click", clickList);

let count = 0;

const getIndex = (num) => {
  count = num;
  return count;
};

function clickList(event) {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    const { source, index } = event.target.dataset;
    lightbox.classList.add("is-open");
    console.log("source", source, Number(index));
    getIndex(Number(index));
    document.addEventListener("keyup", tabLeft);
    setLarge(source);
  }
}

const tabLeft = (event) => {
  if (event.keyCode == 37) {
    count -= 1;
    if (count === 0 || count < 0) {
      count = Number(imgs[imgs.length - 1].dataset.index) - 1;
      console.log("barahlo", Number(imgs[imgs.length - 1].dataset.index));
    }
    console.log(count);
    setLarge(imgs[count].dataset.source);
  } else if (event.keyCode == 39) {
    count += 1;
    if (count === 9) {
      count = 0;
    }
    console.log(count);
    setLarge(imgs[count].dataset.source);
  }
};

function setLarge(url) {
  largeImg.src = url;
}

const lightbox = document.querySelector(".lightbox", showModal);

const btnClose = document.querySelector(
  "button[data-action='close-lightbox']",
  closeModal()
);

const overlay = document.querySelector("div.lightbox__overlay", clickByModal);

function closeModal() {
  lightbox.classList.remove("is-open");
  // document.removeEventListener("keyup", tabLeft);
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

// imgs.forEach(function (item, index) {
//   console.log(imgs[index].dataset.index);
// });
