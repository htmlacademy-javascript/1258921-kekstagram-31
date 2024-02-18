const stringLength = (string, maxLength) => {
  // Почему ругается на тернарный оператор?
  // string <= maxLength ? true : false;
  if (string <= maxLength) {
    return true;
  }
  return false;
};

const palindrome = (string) => {
  string = string.replaceAll(' ','');
  string = string.toLowerCase();
  let resultString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    resultString += string[i];
  }

  if (string === resultString) {
    return true;
  }

  return false;
};

const findNumbers = (string) => {
  let number = '';
  if (Number.isInteger(string)) {
    return string;
  }
  for (let i = 0; i < string.length; i++) {
    if (Number.isInteger(parseInt(string[i], 10))) {
      number += string[i];

      if (i === string.length - 1) {
        return number;
      }
    }

    if (i === string.length - 1) {
      return number;
    }
  }
  // Можно ли как-нибудь оптимизировать эту функцию?
};


stringLength('stack', 4);
palindrome('aga bgb Aga');
findNumbers('a2ad0kk2ld2');
