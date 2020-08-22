const mathEnforcer = require('./04.MathEnforcer');
const expect = require('chai').expect;

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('return a number incremented with 5 when input a fp number', function () {
            let input = 0;
            let result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(0+5);

            input = 5;
            result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(5+5);

            input = -0.999;
            result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(-0.999+5);
        })

        it('return undefined when input a non-number', function () {
            let input = 'abv';
            let result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(undefined);

            input = '2';
            result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(undefined);

            input = [2];
            result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(undefined);

            input = {pesho: 5};
            result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(undefined);

            input = '';
            result = mathEnforcer.addFive(input);
            expect(result).to.be.equal(undefined);
        })
    })

    describe('subtractTen', function () {
        it('return a number decremented with 10 when input a number', function () {
            let input = 0;
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(0-10);

            input = 3;
            result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(3-10);

            input = -0.999;
            result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(-0.999-10);
        })

        it('return undefined when input a non-number', function () {
            let input = 'abv';
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(undefined);

            input = '2';
            result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(undefined);

            input = [2];
            result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(undefined);

            input = {pesho: 5};
            result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(undefined);

            input = '';
            result = mathEnforcer.subtractTen(input);
            expect(result).to.be.equal(undefined);
        })
    })

    describe('sum', function () {
        it('return a number sum of input, when input is two floating point numbers', function () {
            let firstNum = -7;
            let secondNum = 7.89;
            let result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(-7+7.89);

            firstNum = 7.89;
            secondNum = -7;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(-7+7.89);

            firstNum = -7;
            secondNum = 0;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(-7+0);

            firstNum = 0;
            secondNum = -7;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(-7+0);

            firstNum = 0;
            secondNum = +5;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(0+5);

            firstNum = 5;
            secondNum = 0;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(0+5);

            firstNum = 0;
            secondNum = 0;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(0+0);
        })

        it('return undefined when one of the input is a non-number', function () {
            let firstNum = '';
            let secondNum = 5;
            let result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            firstNum = 'abv';
            secondNum = 5;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            firstNum = [2];
            secondNum = 5;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            firstNum = {pesho: 5};
            secondNum = 5;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            secondNum  = '';
            firstNum= 5;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            secondNum  = 'abv';
            firstNum = 5;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            secondNum  = [2];
            firstNum = 5;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            secondNum  = {pesho: 5};
            firstNum = 5;
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);
            
            firstNum = '';
            secondNum = '';
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            firstNum = 'abv';
            secondNum = 'abv';
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            firstNum = [2];
            secondNum = [2];
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);

            firstNum = {pesho: 5};
            secondNum = {pesho: 5};
            result = mathEnforcer.sum(firstNum, secondNum);
            expect(result).to.be.equal(undefined);
            
        })
    })
})