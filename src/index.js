module.exports = function check(str, bracketsConfig) {
  function checkBracket(bracket) {
    let result;
    bracketsConfig.forEach(element => {
      if (bracket === element[0]) {
        result = element[1];
      }
    });
    return result;
  }

  if (str.length === 0) {
    return false;
  }

  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === checkBracket(str[i])) {
      str = str.slice(0, i) + str.slice(i + 2, str.length);
      i = -1;
    }
  }

  return str.length === 0;
};
