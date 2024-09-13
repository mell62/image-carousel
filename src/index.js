import "./style.css";
import "./modern-normalize.css";

import { getNextPicture, getPreviousPicture } from "./navigation-arrow";
import { getPictureFromDot, updateActiveDot } from "./navigation-dot";

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("left-arrow")) {
    getPreviousPicture();
    updateActiveDot();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("right-arrow")) {
    getNextPicture();
    updateActiveDot();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("slide")) {
    getPictureFromDot(event.target);
  }
});
