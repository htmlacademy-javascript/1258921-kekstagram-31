export {getRandomIntegerGenerator};

const checkLength = (aString, maxLength) => aString.length <= maxLength;

const isPalindrome = (string) => {
  string = string.replaceAll(' ','');
  string = string.toLowerCase();
  let resultString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    resultString += string[i];
  }
  return string === resultString;
};

const findNumbers = (string) => {
  let number = '';
  if (Number.isInteger(string)) {
    return string;
  }
  for (let i = 0; i < string.length; i++) {
    if (Number.isInteger(parseInt(string[i], 10))) {
      number += string[i];
    }
  }
  return + number;
};


checkLength('adfad', 6);
isPalindrome('aga bgb Aga');
findNumbers('a2ad0k0.5k2ld2');


//random number v diapasone
function getRandomIntegerGenerator(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
