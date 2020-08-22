const lookupChar= require('./03.CharLookup');
const expect=require('chai').expect;

describe('Lookup Char', function(){
    it('return a char when input non-empty string and a number in range', function(){
        let stringInput="Mame";
        let numberInput=2;
        let result=lookupChar(stringInput,numberInput);
        expect(result).to.equal('m');
    })

    it('return undefined when input a non-string and a number in range', function(){
        let stringInput={};
        let numberInput=2;
        let result=lookupChar(stringInput,numberInput);
        expect(result).to.equal(undefined);
    })

    it('return undefined when input a string and a non-integer number', function(){
        let stringInput='plate2';
        let numberInput=2.33;
        let result=lookupChar(stringInput,numberInput);
        expect(result).to.equal(undefined);
    })

    it('return "Incorrect index" when input a string and an integer out of range', function(){
        let stringInput='plate2';

        let numberInput=30;
        let result=lookupChar(stringInput,numberInput);
        expect(result).to.equal("Incorrect index");

        numberInput=-10;
        result=lookupChar(stringInput,numberInput);
        expect(result).to.equal("Incorrect index");
    })
})