const assert = require('chai').assert;
const isSymmetric = require('./05.CheckForSymmetry');

describe('isSymmetric', function () {
    it('current array is symmetric', function () {
        //Arrange
        let array = ['abc', [], 5, {}, 0, {}, 5, [], 'abc'];
        //Act
        let result = isSymmetric(array);
        //Assert
        assert.equal(result, true);
    });

    it('string is not an array', function () {
        //Arrange
        let array = 'abc';
        //Act
        let result = isSymmetric(array);
        //Assert
        assert.equal(result, false);
    });

    it('number is not an array', function () {
        //Arrange
        let array = 17;
        //Act
        let result = isSymmetric(array);
        //Assert
        assert.equal(result, false);
    });

    it('object is not an array', function () {
        //Arrange
        let array = {firstProp:56, secondProp:67};
        //Act
        let result = isSymmetric(array);
        //Assert
        assert.equal(result, false);
    });

    it('current array is not symmetric', function () {
        //Arrange
        let array = [2,0,'2'];
        //Act
        let result = isSymmetric(array);
        //Assert
        assert.equal(result, false);
    });

});