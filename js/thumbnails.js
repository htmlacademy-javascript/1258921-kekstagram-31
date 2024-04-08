import {photosArray} from './data.js';

const picturesSection = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

photosArray.forEach((photoData) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.dataset.id = photoData.id;
  picture.querySelector('.picture__img').src = photoData.url;
  picture.querySelector('.picture__img').alt = photoData.description;
  picture.querySelector('.picture__likes').textContent = photoData.likes;
  picture.querySelector('.picture__comments').textContent = photoData.comments.length;
  pictureFragment.appendChild(picture);
});

picturesSection.appendChild(pictureFragment);
