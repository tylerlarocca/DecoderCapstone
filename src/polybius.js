// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

// Define the polybius function

 function polybius(input, encode = true) {
    //set variable for lookup (encoding), use object key value pair to pair letters with their numbers
    let lookup = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };
    //set variable for reverse lookup (decoding)
    let reverseLookup = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      52: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
    //set variable to put final result in
    let result = "";
    //loop through the input to get each letter
    const inputLowerCase = input.toLowerCase();
    //if encode is true:
    if (encode) {
      for (let i = 0; i < inputLowerCase.length; i++) {
        const currentLetter = inputLowerCase[i];
        //check if currentLetter is in lookup
        if (currentLetter in lookup) {
          //if currentLetter is in lookup, then add the currentLetter to the result
          result += lookup[currentLetter];
        } else {
          result += input[i];
        }
      }
    }
    //if encode is false:
    if (!encode) {
      //remove spaces from input and then check if number is even or odd
      const noSpacesInput = input.split(" ").join("");
      //if number is odd, return false
      if (noSpacesInput.length % 2 !== 0) {
        return false;
      }
      //loop through each character of input
      for (let i = 0; i < input.length; i += 2) {
        //if the value of the current index is a space, add the space to the result and move index back by 1
        if (input[i] === " ") {
          result += " ";
          i--;
        } else {
          //find number pair
          const numberPair = input.slice(i, i + 2);
          //if the numberPair is in reverseLookup, add the value of numberPair to result
          if (numberPair in reverseLookup) {
            result += reverseLookup[numberPair];
          }
        }
      }
    }
    //return result
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };