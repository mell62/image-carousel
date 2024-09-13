export { getNextPicture, getPreviousPicture };

let currentPicture = 3;
const pictureFrames = document.querySelectorAll(".picture-frame");

function removeAllPictures() {
  pictureFrames.forEach((picture) => {
    picture.classList.remove("visibility");
  });
}

function setPictureVisible(index) {
  removeAllPictures();
  pictureFrames[index - 1].classList.add("visibility");
}

function getNextPicture() {
  currentPicture += 1;
  if (currentPicture > 5) {
    currentPicture = 1;
    setPictureVisible(currentPicture);
  } else {
    setPictureVisible(currentPicture);
  }
}

function getPreviousPicture() {
  currentPicture -= 1;
  if (currentPicture < 1) {
    currentPicture = 5;
    setPictureVisible(currentPicture);
  } else {
    setPictureVisible(currentPicture);
  }
}
