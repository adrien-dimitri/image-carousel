import createCarousel from "./carousel";
import { getTotalPictures } from "./picture";

export default function startSlideshow() {
  let slideshow = new Slideshow();
  changeSlides(slideshow);
  manageDots(slideshow, getTotalPictures());
}

function changeSlides(Slideshow) {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  prevBtn.addEventListener("click", () => {
    Slideshow.previous();
  });

  nextBtn.addEventListener("click", () => {
    Slideshow.next();
  });
}

class Slideshow {
  constructor() {
    this.currIndex = 0;
    createCarousel(this.currIndex);
  }

  next() {
    this.currIndex += 1;
    this.checkIndex();
    this.updateCarousel(this.currIndex);
  }

  previous() {
    this.currIndex -= 1;
    this.checkIndex();
    this.updateCarousel(this.currIndex);
  }

  updateCarousel(index) {
    return createCarousel(index);
  }

  checkIndex() {
    if (this.currIndex < 0) {
      this.currIndex += getTotalPictures();
    } else if (this.currIndex > 5) {
      this.currIndex -= getTotalPictures();
    }
  }
}

function createDot(index) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.setAttribute("id", index);
  return dot;
}

function initDots(dotDiv, num) {
  const fragment = document.createDocumentFragment();
  let dotsArray = [];

  for (let i = 0; i < num; i++) {
    const dot = createDot(i);
    fragment.appendChild(dot);
    dotsArray.push(dot);
  }

  dotDiv.appendChild(fragment);
  dotsArray[0].classList.add("selected");
  return dotsArray;
}

function manageDots(slideshow, num) {
  const dotDiv = document.querySelector(".dots");
  const dots = initDots(dotDiv, num);

  dotDiv.addEventListener("click", (event) => {
    const targetDot = event.target;
    if (targetDot.classList.contains("dot")) {
      const selectedDot = document.querySelector(".selected");
      if (selectedDot) {
        selectedDot.classList.remove("selected");
      }
      targetDot.classList.add("selected");
      const index = Array.from(dots).indexOf(targetDot);
      slideshow.updateCarousel(index);
    }
  });
}
