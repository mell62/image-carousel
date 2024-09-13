import "./style.css";
import "./modern-normalize.css";

import { getNextPicture, getPreviousPicture } from "./main";

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("left-arrow")) {
    getPreviousPicture();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("right-arrow")) {
    getNextPicture();
  }
});
