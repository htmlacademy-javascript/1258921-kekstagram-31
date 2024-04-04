// import {createPhoto} from './data.js';
import {photosArray} from './main.js';
// const userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

// userDialog.querySelector('.setup-similar').classList.remove('hidden');

const picturesSection = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// const picture = pictureTemplate.cloneNode(true);
// picturesSection.appendChild(picture);
const newPicture = photosArray;

const pictureFragment = document.createDocumentFragment();

newPicture.forEach((photoData) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = photoData.url;
  picture.querySelector('.picture__img').alt = photoData.description;
  picture.querySelector('.picture__likes').textContent = photoData.likes;
  picture.querySelector('.picture__comments').textContent = photoData.comments.length;
  pictureFragment.appendChild(picture);
});

picturesSection.appendChild(pictureFragment);

// export {picturesSection, pictureFragment};
