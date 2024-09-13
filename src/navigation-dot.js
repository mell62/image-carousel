import { setPictureVisible } from "./navigation-arrow";

export { getPictureFromDot };

const navigationDots = document.querySelectorAll(".slide");
const navigationDotsArray = [...navigationDots];

function getDotIndex(dotElement) {
  const index = Array.prototype.indexOf.call(navigationDotsArray, dotElement);
  return index;
}

function removeAllActiveDots() {
  navigationDots.forEach((dot) => {
    dot.classList.remove("active-slide");
  });
}

function applyActiveDot(dotElement) {
  removeAllActiveDots();
  const dotIndex = getDotIndex(dotElement);
  navigationDots[dotIndex].classList.add("active-slide");
}

function getPictureFromDot(dotElement) {
  const dotIndex = getDotIndex(dotElement);
  applyActiveDot(dotElement);
  setPictureVisible(dotIndex);
}
