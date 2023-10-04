// Write your tests here!
// Write your tests here!
//It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
const { expect } = require("chai");
let caesar = require('../src/caesar');
caesar = caesar.caesar
describe('caesar(input, shift, encode)', function () {
  it('should return false if shift is equal to 0', () => {
    const output = caesar('dasdasd', 0);
    expect(output).to.equal(false);
  });

  it('should return false if less than -25, greater than 25, or not present', () => {
    const output = caesar('dasdasd', -26);
    expect(output).to.equal(false);
  });

  it('should return false if greater than 25, or not present', () => {
    const output = caesar('dasdasd', 26);
    expect(output).to.equal(false);
  });

  it('should return false if not present', () => {
    const output = caesar('dasdasd');
    expect(output).to.equal(false);
  });
  //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
  it('ignores capital letters', () => {
    const outputWithCapital = caesar('daASdvjh');
    const outputWithoutCapital = caesar('daasdvjh');

    expect(outputWithCapital).to.equal(outputWithoutCapital);
  });
  //When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
  it('should wrap around the front of the alphabet', () => {
    const wrapAround = caesar('xyz');
    const wrapAroundComplete = caesar('abc');
    expect(wrapAround).to.equal(wrapAroundComplete);
  });
  //It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
  it('should maintain spaces and nonalphabetic symbols', () => {
    const givenString = caesar('a 3 bc');
    const afterString = caesar('d 3 ef');
    expect(givenString).to.equal(afterString);
  });
})