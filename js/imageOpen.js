import { isEscapeKey, isEnterKey } from './functions.js';
import { photosArray } from './data.js';
import './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const pictures = document.querySelectorAll('.picture');


for (let i = 0; i < pictures.length; i++) {
  pictures[i].dataset.id = i + 1;
}

const commentFragment = document.createDocumentFragment();
const commentsContainer = document.querySelector('.social__comments');


function makeNewComment(array) {
  array.forEach((comment) => {
    const commentTemplate = document.querySelector('.social__comment').cloneNode(true);
    commentTemplate.querySelector('.social__picture').src = comment.avatar;
    commentTemplate.querySelector('.social__picture').alt = comment.name;
    commentTemplate.querySelector('.social__text').textContent = comment.message;
    commentFragment.append(commentTemplate);
  });
}

pictures.forEach((element) =>
  element.addEventListener('click', () => {

    const currentId = element.dataset.id;
    const currentObject = photosArray[currentId - 1];
    document.querySelector('.big-picture__img img').src = currentObject.url;
    document.querySelector('.likes-count').textContent = currentObject.likes;
    document.querySelector('.social__comment-total-count').textContent = currentObject.comments.length;
    makeNewComment(currentObject.comments);
    commentsContainer.innerHTML = '';
    commentsContainer.appendChild(commentFragment);
    document.querySelector('.social__comment-shown-count').textContent = document.querySelector('.social__comments').children.length;
    document.querySelector('.social__caption').textContent = currentObject.description;
    openPicture();
  })
);

pictures.forEach((element) =>
  element.addEventListener('click', () => {
    closePicture();
  })
);

function openPicture() {
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
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
  document.querySelector('body').classList.remove('modal-open');
}
