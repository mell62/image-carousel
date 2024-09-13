import { getNextPicture } from "./navigation-arrow";
import { updateActiveDot } from "./navigation-dot";

export { autoNextPicture };

function autoNextPicture() {
  setInterval(() => {
    getNextPicture();
    setTimeout(updateActiveDot, 0);
  }, 5000);
}
