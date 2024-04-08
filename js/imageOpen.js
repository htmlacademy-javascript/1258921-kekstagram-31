import { isEscapeKey } from './functions.js';
import { photosArray } from './data.js';
import './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const pictures = document.querySelectorAll('.picture');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const addBigPictureClass = () => {
  bigPicture.classList.add('hidden');
  removeBigPictureListeners();
};

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

function addBigPictureListeners() {
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  bigPictureCancel.addEventListener('click', addBigPictureClass);

  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
}

function removeBigPictureListeners () {
  bigPictureCancel.removeEventListener('click', addBigPictureClass);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.querySelector('body').classList.remove('modal-open');
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
    addBigPictureListeners();
  })
);
