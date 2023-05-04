const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
    const testWord = new Word("Pog");

    describe("Word constructor function", function () {
        it('should have a "word" property', function () {
            expect(testWord).to.haveOwnProperty("word");
            expect(testWord).to.have.property("word");
        });

        it('should set the "word" property when a new word is created', function () {
            expect(testWord.word).to.equal("Pog");
        });
    });

    describe("removeVowels function", function () {
        it("should return a the word with all vowels removed", function () {
            const pg = testWord.removeVowels();

            expect(pg).to.equal("Pg");
        });
    });

    describe("removeConsonants function", function () {
        it("should return the word with the consonants removed", function () {
            const o = testWord.removeConsonants();

            expect(o).to.equal("o");
        });
    });

    describe("pigLatin function", function () {
        it("should return the word converted to pig latin", function () {
            const ogPay = testWord.pigLatin();

            expect(ogPay).to.equal("ogPay");
        });
    });
});
