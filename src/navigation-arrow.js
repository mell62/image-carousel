export { getNextPicture, getPreviousPicture, setPictureVisible };

let currentPicture;
const pictureFrames = document.querySelectorAll(".picture-frame");
const pictureFramesArray = [...pictureFrames];

function getCurrentPicture() {
  const visiblePicture = document.querySelector(".visibility");
  const visiblePictureIndex = Array.prototype.indexOf.call(
    pictureFramesArray,
    visiblePicture
  );
  currentPicture = visiblePictureIndex;
}

function removeAllPictures() {
  pictureFrames.forEach((picture) => {
    picture.classList.remove("visibility");
  });
}

function setPictureVisible(index) {
  removeAllPictures();
  pictureFrames[index].classList.add("visibility");
}

function getNextPicture() {
  getCurrentPicture();
  currentPicture += 1;
  if (currentPicture > 4) {
    currentPicture = 0;
    setPictureVisible(currentPicture);
  } else {
    setPictureVisible(currentPicture);
  }
}

function getPreviousPicture() {
  getCurrentPicture();
  currentPicture -= 1;
  if (currentPicture < 0) {
    currentPicture = 4;
    setPictureVisible(currentPicture);
  } else {
    setPictureVisible(currentPicture);
  }
}
