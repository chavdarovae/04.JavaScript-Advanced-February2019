let expect=require('chai').expect;
let isOddOrEven=require('./02.EvenOrOdd')

describe('Even Or Odd', function () {
    it('should return undefined when input is a number',function () {
        let input=20;
        let result=isOddOrEven(input);
        expect(result).to.equal(undefined);
    })

    it('should return even when input is an evenlength string',function () {
        let input='maki';
        let result=isOddOrEven(input);
        expect(result).to.equal('even');
    })

    it('should return odd when input is an oddlength string',function () {
        let input='mak';
        let result=isOddOrEven(input);
        expect(result).to.equal('odd');
    })

    it('should return even when input is an empty string',function () {
        let input='';
        let result=isOddOrEven(input);
        expect(result).to.equal('even');
    })
})