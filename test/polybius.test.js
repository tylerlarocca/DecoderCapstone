// Write your tests here!
const { expect } = require("chai");
let polybius = require('../src/polybius');
polybius = polybius.polybius
describe(polybius('input, encode'), function () {
    it('should translate letters i and j to 42', () => {
        const letterTrick = polybius('i/j');
        const letterTrickNum = polybius('42/42');
        expect(letterTrick).to.equal(letterTrickNum);
    });
    it('should translate number 42 into (i/j)', () => {
        const decodeLetterTrick = polybius('42/42');
        const decodeLetterTrickL = polybius('i/j');
        expect(decodeLetterTrick).to.equal(decodeLetterTrickL);
    });
    it('should ignore capital letters', () => {
        const inputWithCapital = polybius('AbC');
        const inputWithoutCapital = polybius('abc');
        expect(inputWithCapital).to.equal(inputWithoutCapital);
    });
    it('should maintain spaces in the message', () => {
        const givenMessage = polybius('a bc');
        const afterMessage = polybius('11 2131');
        expect(givenMessage).to.equal(afterMessage);
    });
})
//When encoding, it translates the letters i and j to 42.

//When decoding, it translates 42 to (i/j).

//It ignores capital letters. (For example, the results of A Message and a message should be the same.)

//It maintains spaces in the message, before and after encoding or decoding.