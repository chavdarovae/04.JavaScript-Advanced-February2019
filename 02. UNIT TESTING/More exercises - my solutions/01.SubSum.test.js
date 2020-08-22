const assert = require('chai').assert;
const subSum = require('./01.SubSum');

describe('subSum', function () {
    it('should sum a part of an array', function () {
        //Arrange
        let array = [1, 2, 3, 4, 5, 6, 7, 8];
        //Act
        let result = subSum(array, 3, 5);
        //Assert
        assert.equal(result, 15);
    });

    it('should sum a part of an array', function () {
        //Arrange
        let array = [1, 2, 3, 4, 5, 6, 7, 8];
        //Act
        let result = subSum(array, 3, 5);
        //Assert
        assert.equal(result, 0);
    });

    it('should sum a part of an array', function () {
        //Arrange
        let array = [1, 2, 3, 4, 5, 6, 7, 8];
        //Act
        let result = subSum(array, 0, 1);
        //Assert
        assert.equal(result, 3);
    });
});