
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTION = [
  'Я на пляже.',
  'Я купаюсь.',
  'Я ем.',
  'Я сплю.',
  'Я отдыхаю',
  'Волк не волк, волк ходить',
  'Я Нионго',
  'Я Ирвинг',
  'Я в Лондоне',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

//random number v diapasone
function getRandomIntegerGenerator(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//po poryadku
function createConsecutiveIntegerGenerator(min, max) {
  const previousValues = [];

  return function () {
    let counter = min;
    let currentValue = counter++;
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue++;
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (array) => array[getRandomIntegerGenerator(0, array.length - 1)];

const generatePhotoId = createConsecutiveIntegerGenerator(1, 25);
const generatePhotoUrl = createConsecutiveIntegerGenerator(1, 25);
const generateCommentId = createConsecutiveIntegerGenerator(1, Infinity);
const generateNumberOfLikes = () => getRandomIntegerGenerator(15, 200);

const generateMessage = () => {
  if (getRandomIntegerGenerator(1, 2) === 1) {
    return getRandomArrayElement(COMMENTS);
  }
  return `${getRandomArrayElement(COMMENTS)} ${getRandomArrayElement(COMMENTS)}`;
};


const getComments = () => {
  const commentsArray = [];
  const numberOfComments = getRandomIntegerGenerator(0, 30);

  while (commentsArray.length <= numberOfComments) {
    const generateAvatarNumber = getRandomIntegerGenerator(1, 6);
    const comment = {
      id: generateCommentId(),
      avatar: `img/avatar-${generateAvatarNumber}.svg`,
      message: generateMessage(),
      name: getRandomArrayElement(NAMES),
    };

    (commentsArray.push(comment));
  }
  return commentsArray;
};

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: generateNumberOfLikes(),
  comments: getComments(),
});


const photosArray = Array.from({length: 25}, createPhoto);

console.log(photosArray);
