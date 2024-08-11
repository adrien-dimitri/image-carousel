import spaghetti_carbonara from "./images/menu/spaghetti_carbonara.jpg";
import penne_arrabbiata from "./images/menu/penne_arrabbiata.jpg";
import lasagna from "./images/menu/lasagna.jpg";
import ravioli from "./images/menu/ravioli.jpg";
import pesto_genovese from "./images/menu/pesto_genovese.jpg";
import fettuccine_alfredo from "./images/menu/fettuccine_alfredo.jpg";

export default function getPicture(index) {
  const pictureArray = generatePictures();
  const picture = pictureArray[index];

  return picture;
}

export function createImg(Picture) {
  const img = document.createElement("img");
  img.src = Picture.pictureBundle;
  img.alt = Picture.recipeName;

  return img;
}

export function getTotalPictures() {
  return generatePictures().length;
}

class Picture {
  constructor(picturePath) {
    this.picturePath = picturePath;
  }

  get recipeName() {
    return this.generateRecipe();
  }

  get pictureBundle() {
    return this.getBundledPicture();
  }

  getBundledPicture() {
    switch (this.picturePath) {
      case "./images/menu/spaghetti_carbonara.jpg":
        return spaghetti_carbonara;
      case "./images/menu/penne_arrabbiata.jpg":
        return penne_arrabbiata;
      case "./images/menu/lasagna.jpg":
        return lasagna;
      case "./images/menu/ravioli.jpg":
        return ravioli;
      case "./images/menu/pesto_genovese.jpg":
        return pesto_genovese;
      case "./images/menu/fettuccine_alfredo.jpg":
        return fettuccine_alfredo;
      default:
        return null;
    }
  }

  generateRecipe() {
    const spiltPath = this.picturePath.split("/")[3];
    let recipeName = spiltPath.split(".")[0];
    if (recipeName.includes("_")) {
      const words = recipeName.split("_");
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1),
      );
      recipeName = capitalizedWords.join(" ");
    } else {
      recipeName = recipeName.charAt(0).toUpperCase() + recipeName.slice(1);
    }
    return recipeName;
  }
}

const generatePictures = () => {
  const pictures = [
    new Picture("./images/menu/spaghetti_carbonara.jpg"),
    new Picture("./images/menu/penne_arrabbiata.jpg"),
    new Picture("./images/menu/lasagna.jpg"),
    new Picture("./images/menu/ravioli.jpg"),
    new Picture("./images/menu/pesto_genovese.jpg"),
    new Picture("./images/menu/fettuccine_alfredo.jpg"),
  ];
  return pictures;
};
