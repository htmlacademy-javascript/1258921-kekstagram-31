import { isEscapeKey, isEnterKey } from './functions.js';
import './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const picture = document.querySelector('.picture');

function openPicture() {
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });

}

function closePicture() {
  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });

  bigPictureCancel.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      bigPicture.classList.add('hidden');
    }
  });
}

picture.addEventListener('click', () => {
  openPicture();
});

picture.addEventListener('click', () => {
  closePicture();
});


