const gallery = document.querySelector('#gallery');
const figure = gallery.querySelector('figure');
const img = figure.querySelector('img');
const figcaption = figure.querySelector('figcaption');
const thumbnails = gallery.querySelectorAll('li img');

function setLargeImageSrc(thumbnail) {
  const thumbnailSrc = thumbnail.getAttribute('src');
  const largeSrc = thumbnailSrc.replace('-small', '-large');
  img.setAttribute('src', largeSrc);
}

function setFigcaption(thumbnail) {
  const captionText = thumbnail.getAttribute('alt');
  figcaption.textContent = captionText;
}

function changeImage(thumbnail) {
  setLargeImageSrc(thumbnail);
  setFigcaption(thumbnail);
}

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    changeImage(thumbnail);
  });
});
