import createCarousel from "./carousel";
import { getTotalPictures } from "./picture";

export default function startSlideshow() {
  let slideshow = new Slideshow();
  changeSlides(slideshow);
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
