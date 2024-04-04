import {createPhoto} from './data.js';
// import {picturesSection, pictureFragment} from './thumbnails.js';
import './thumbnails.js';

const photosArray = Array.from({length: 25}, createPhoto);

// console.log(photosArray);
export {photosArray};
