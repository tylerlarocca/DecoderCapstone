// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
let standardAlphabet = 'abcdefghijklmnopqrstuvwxyz'
standardAlphabet = standardAlphabet.split("")
const cipher = {};
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const checkForRepeats = new Set(alphabet)
    if(!alphabet || alphabet.length < 26 || checkForRepeats.size < 26) {
      return false;
    };
    alphabet = alphabet.split("");
    if(encode === true) {
      for(let i = 0; i < 26; i ++) {
        cipher[standardAlphabet[i]] = alphabet[i];
      };
    } else {
      for(let i = 0; i < 26; i ++) {
        cipher[alphabet[i]] = standardAlphabet[i];
      };
    };
    input = input.toLowerCase();
    input = input.split("");
    const result = input.map((letter) => {
      if(letter === " ") {
        return " "
      } else {
        return cipher[letter];
      };
    });
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
