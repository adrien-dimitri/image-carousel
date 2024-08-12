import createCarousel from "./carousel";
import { getTotalPictures } from "./picture";

export default function startSlideshow() {
  const slideshow = new Slideshow();
  setupNavigation(slideshow);
  manageDots(slideshow, getTotalPictures());
}

function setupNavigation(slideshow) {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  prevBtn.addEventListener("click", () => slideshow.previous());
  nextBtn.addEventListener("click", () => slideshow.next());
}

class Slideshow {
  constructor() {
    this.currIndex = 0;
    this.totalPictures = getTotalPictures();
    this.updateCarousel(this.currIndex);
  }

  next() {
    this.currIndex = (this.currIndex + 1) % this.totalPictures;
    this.updateCarousel(this.currIndex);
  }

  previous() {
    this.currIndex =
      (this.currIndex - 1 + this.totalPictures) % this.totalPictures;
    this.updateCarousel(this.currIndex);
  }

  updateCarousel(index) {
    // Ensure that the DOM elements exist before updating
    if (document.querySelector(".dots")) {
      createCarousel(index);
      this.updateDots(index);
    } else {
      // Retry after a short delay if elements are not yet available
      setTimeout(() => this.updateCarousel(index), 50);
    }
  }

  updateDots(index) {
    const selectedDot = document.querySelector(".dots .selected");
    if (selectedDot) {
      selectedDot.classList.remove("selected");
    }
    const targetDot = document.getElementById(index);
    if (targetDot) {
      targetDot.classList.add("selected");
    }
  }
}

function manageDots(slideshow, num) {
  const dotDiv = document.querySelector(".dots");
  const dots = initDots(dotDiv, num);

  dotDiv.addEventListener("click", (event) => {
    const targetDot = event.target;
    if (targetDot.classList.contains("dot")) {
      const index = dots.indexOf(targetDot);
      slideshow.updateCarousel(index);
    }
  });
}

function createDot(index) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.setAttribute("id", index);
  return dot;
}

function initDots(dotDiv, num) {
  const fragment = document.createDocumentFragment();
  const dotsArray = Array.from({ length: num }, (_, i) => {
    const dot = createDot(i);
    fragment.appendChild(dot);
    return dot;
  });

  dotDiv.appendChild(fragment);
  dotsArray[0].classList.add("selected");
  return dotsArray;
}
