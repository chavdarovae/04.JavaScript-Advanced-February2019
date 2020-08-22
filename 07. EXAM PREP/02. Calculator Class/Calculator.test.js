const Calculator = require('./Calculator');
const assert = require('chai').assert;

describe('Calculator', function () {
    // it('Should work', function (){
    //     assert.equal(true,true)
    // });
    let calculator;
    beforeEach(function () {
        calculator = new Calculator();
    })

    it('Contains a property expenses that is initialized to an empty array', function () {
        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
        assert.deepEqual(calculator.expenses, [])
    });

    describe('Function add(data)', function () {
        it('Add only primitive types', function () {
            calculator.add(5);
            calculator.add('text');
            calculator.add(true);
            calculator.add(-12.45);
            calculator.add(0);
            assert.deepEqual(calculator.expenses, [5, 'text', true, -12.45, 0])
        });

        it('Add referent types', function () {
            calculator.add([5, 6]);
            calculator.add({ key: 'value' });
            calculator.add(true);
            calculator.add('12');
            assert.deepEqual(calculator.expenses, [[5, 6], { key: 'value' }, true, '12'])
        });
    });

    describe('Function divideNums()', function () {

        it('Error when input of no numbers', function () {
            calculator.add('5');
            calculator.add('text');
            calculator.add(true);
            calculator.add([67]);
            calculator.add({ key: 23 });
            assert.throw(() => calculator.divideNums(), 'There are no numbers in the array!')
        });

        it('Error when no input', function () {
            assert.throw(() => calculator.divideNums(), 'There are no numbers in the array!')
        });

        it('Error when 0 among input', function () {
            calculator.add(6);
            calculator.add(3);
            calculator.add(0);
            calculator.add(4);
            assert.equal(calculator.divideNums(), 'Cannot divide by zero')
        });

        it('Standard case of integer and floating point intput', function () {
            calculator.add(10);
            calculator.add(2);
            calculator.add(5);
            calculator.add(-0.5);
            assert.closeTo(calculator.divideNums(), -2, 0.01)
        });

    });

    describe('Function toString() ', function () {
        it('Message expected when no input', function () {
            assert.equal(calculator.toString(), 'empty array')
        });

        it('String expected when various type input', function () {
            calculator.add(5);
            calculator.add('text');
            calculator.add(true);
            calculator.add(-12.45);
            calculator.add(0);
            assert.deepEqual(calculator.toString(), '5 -> text -> true -> -12.45 -> 0');
        });

        it('String expected when a single input', function () {
            calculator.add(5);
            assert.deepEqual(calculator.toString(), '5');
        });

    });

    describe('Function orderBy()  ', function () {
        it('Message expected when no input', function () {
            assert.equal(calculator.orderBy() , 'empty')
        });

        it('String expected when only numbers input', function () {
            calculator.add(5);
            calculator.add(120);
            calculator.add(0);
            calculator.add(-12.45);
            calculator.add(0.0001);
            assert.equal(calculator.orderBy(), '-12.45, 0, 0.0001, 5, 120');
        });

        it('String expected when various type input', function () {
            calculator.add(5);
            calculator.add('120');
            calculator.add(['emilia',12,true]);
            calculator.add({age: undefined});
            calculator.add(-0.0001);
            assert.equal(calculator.orderBy(), "-0.0001, 120, 5, [object Object], emilia,12,true");
        });

        it('String expected when a single input', function () {
            calculator.add(5);
            assert.equal(calculator.orderBy(), '5');
        });
    });
});
