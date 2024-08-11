import createImg from "./picture";
import { getTotalPictures } from "./picture";

export default function createCarousel(currentIndex = 0) {
  const currentDiv = document.querySelector(".current");
  const previousDiv = document.querySelector(".previous");
  const nextDiv = document.querySelector(".next");

  const { previousIndex, currentIndex: current, nextIndex } = calcIndex(currentIndex, getTotalPictures());

  currentDiv.innerHTML = '';
  previousDiv.innerHTML = '';
  nextDiv.innerHTML = '';

  currentDiv.appendChild(createImg(current));
  previousDiv.appendChild(createImg(previousIndex));
  nextDiv.appendChild(createImg(nextIndex));
}

function calcIndex(currentIndex, total) {
  const current = (currentIndex + total) % total;
  const previous = (current + (total - 1)) % total;
  const next = (current + 1) % total;

  return { previousIndex: previous, currentIndex: current, nextIndex: next };
}
