const stringLength = (string, maxLength) => {
  if (string.length <= maxLength) {
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
    return string === resultString; //Явно не так, но до другого я не додумался.
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
    }
  }
  return number;
};


stringLength('adfgd', 4);
palindrome('aga bgb Aga');
findNumbers('a2ad0k0.5k2ld2');
