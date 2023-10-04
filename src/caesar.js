// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();

    const caesarShift = (char, shift) => {
      if (alphabet.includes(char)) {
        let newIndex = alphabet.indexOf(char) + shift;
        newIndex = (newIndex+26)%26
        char = alphabet[newIndex];
      }
      return char;
    };
    const result = input.split('').map(char => caesarShift(char, encode ? shift : -shift)).join('');

  return result;
  }

  return {
    caesar,
  };
  }
)();

module.exports = { caesar: caesarModule.caesar };


