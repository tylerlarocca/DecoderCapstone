// Write your tests here!
const { expect } = require("chai");
const substitution = require('../src/substitution').substitution; // Import the function correctly

describe('substitution()', function () {
    it('should return false if the given alphabet isnt exactly 26 char long', () => {
        const givenAlphabet = 'abc'; // Replace with a non-26 character alphabet
        const result = substitution('thinkful', givenAlphabet);
        expect(result).to.equal(false);
    });

    it('should correctly translate the given phrase based on alphabet given', () => {
        const inputPhrase = 'thinkful';
        const givenAlphabet = 'xoyqmcgrukswaflnthdjpzibev';
        const encodedPhrase = substitution(inputPhrase, givenAlphabet);
        const decodedPhrase = substitution(encodedPhrase, givenAlphabet, false);
        expect(decodedPhrase).to.equal(inputPhrase);
    });

    it('should return false if duplicate chars in given alphabet', () => {
        const givenAlphabet = 'abcabcabcabcabcabcabcabcyz'; // Duplicate characters
        const result = substitution('thinkful', givenAlphabet);
        expect(result).to.equal(false);
    });

    it('maintains spaces in message before and after encoding or decoding', () => {
        const inputPhrase = 'qwe rty';
        const givenAlphabet = 'qwertyuiopasdfghjklzxcvbnm';
        const expected = 'abc def';
        const encodedPhrase = substitution(inputPhrase, givenAlphabet);
        const decodedPhrase = substitution(encodedPhrase, givenAlphabet, false);
        expect(decodedPhrase).to.equal(inputPhrase);
    });

    it('should ignore capital letters', () => {
        const inputPhrase = 'You are an excellent spy';
        const expectedPhrase = 'elp xhm xf mbymwwmfj dne'; // Expected result
        const givenAlphabet = 'xoyqmcgrukswaflnthdjpzibev';
        const result = substitution(inputPhrase, givenAlphabet);
        expect(result).to.equal(expectedPhrase);
    });
});


//It returns false if the given alphabet isn't exactly 26 characters long.

//It correctly translates the given phrase, based on the alphabet given to the function.

//It returns false if there are any duplicate characters in the given alphabet.

//It maintains spaces in the message, before and after encoding or decoding.

//It ignores capital letters. (For example, the results of A Message and a message should be the same.)