import getPicture from "./picture";
import { createImg, getTotalPictures } from "./picture";

export default function createCarousel(index = 0) {
  const currentDiv = document.querySelector(".current");
  const previousDiv = document.querySelector(".previous");
  const nextDiv = document.querySelector(".next");

  const { previousIndex, currentIndex, nextIndex } = calcIndex(
    index,
    getTotalPictures(),
  );

  currentDiv.innerHTML = "";
  previousDiv.innerHTML = "";
  nextDiv.innerHTML = "";

  const currPic = getPicture(currentIndex);
  const prevPic = getPicture(previousIndex);
  const nextPic = getPicture(nextIndex);

  const recipeNameDiv = document.createElement("div");
  recipeNameDiv.classList.add("recipe-name");
  recipeNameDiv.innerHTML = currPic.recipeName;
  currentDiv.appendChild(recipeNameDiv);

  currentDiv.appendChild(createImg(currPic));
  previousDiv.appendChild(createImg(prevPic));
  nextDiv.appendChild(createImg(nextPic));
}

function calcIndex(currentIndex, total) {
  const current = (currentIndex + total) % total;
  const previous = (current + (total - 1)) % total;
  const next = (current + 1) % total;

  return { previousIndex: previous, currentIndex: current, nextIndex: next };
}
