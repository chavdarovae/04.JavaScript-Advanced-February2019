const Calculator = require('./secondTask');
const assert = require('chai').assert;

describe('Calculator', function () {
    let calculator;
    beforeEach(function () {
        calculator = new Calculator;
    });

    it('should work', function () {
        assert.equal(true, true);
    });

    it('is an empty array', function () {
        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
    });

    describe('.add(all data types)', function () {
        it('.add(primitive types)', function () {
            calculator.add(5);
            calculator.add(-5.5);
            calculator.add('text');
            calculator.add(true);
            calculator.add(null);

            assert.deepEqual(calculator.expenses,[5, -5.5,'text',true, null])
        });

        it('.add(reference types)', function () {
            calculator.add({number: 5});
            calculator.add(['text']);
            //calculator.add(()=>true);
            assert.deepEqual(calculator.expenses,[{"number": 5},["text"]])
        });
    });

    describe('.divideNums(the numbers from the array)', function () {
        it('for array of 2 nums', function () {
            calculator.add(100);
            calculator.add(5);
            
            assert.equal(calculator.divideNums(),100/5)
        });

        it('for array of 3 nums', function () {
            calculator.add(100);
            calculator.add(5);
            calculator.add(-2);
            
            assert.equal(calculator.divideNums(),-10)
        });

        //division by floating point nums
        it('division by floating point nums', function () {
            calculator.add(100);
            calculator.add(5.25);
            
            assert.closeTo(calculator.divideNums(), 19.05, 0.01)
        });

        //when an error is supposed to be thrown
        it('no input', function () {
     
            assert.throw(()=>calculator.divideNums(),'There are no numbers in the array!')
        });
       
        it('no number input', function () {
            calculator.add('text');
            calculator.add({});
            calculator.add([6]);
            calculator.add('4');
            
            assert.throw(()=>calculator.divideNums(),'There are no numbers in the array!')
        });

        it('dvide to zero', function () {
            calculator.add(5);
            calculator.add(0);
            calculator.add(3);
            calculator.add(1);
            
            assert.equal(calculator.divideNums(),'Cannot divide by zero')
        });
    });

    describe('.toString()', function () {
        it('when no input', function () {            
            assert.equal(calculator.toString(),'empty array')
        });

        it('when a single input', function () { 
            calculator.add(5);           
            assert.equal(calculator.toString(),'5')
        });

        it('when multiple input', function () { 
            calculator.add(5);          
            calculator.add('text');          
            assert.equal(calculator.toString(),'5 -> text')
        });
    });

    describe('.orderBy()', function () {
        it('when no input', function () {            
            assert.equal(calculator.orderBy(),'empty');
        });

        it('when only numbers input', function () {  
            calculator.add(0);
            calculator.add(-7.90);
            calculator.add(10);
            calculator.add(9.999);
                      
            assert.equal(calculator.orderBy(),'-7.9, 0, 9.999, 10');
        });

        it('when no numbers input', function () {  
            calculator.add('a');
            calculator.add('f');
            calculator.add('A');
            calculator.add('B');
                      
            assert.equal(calculator.orderBy(),'A, B, a, f');
        });

        it('when a single input', function () {  
            calculator.add('a');
                                  
            assert.equal(calculator.orderBy(),'a');
        });
    });
});