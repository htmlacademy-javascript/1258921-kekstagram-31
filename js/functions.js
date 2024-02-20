const checkLength = (aString, maxLength) => aString.length <= maxLength;

const palindrome = (string) => {
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
  return typeof(+ number);
};


checkLength('adfad', 6);
palindrome('aga bgb Aga');
findNumbers('a2ad0k0.5k2ld2');
