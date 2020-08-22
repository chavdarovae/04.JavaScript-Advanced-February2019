const assert = require('chai').assert;
const sum = require('./04.SumOfNumbers.js');

describe('sum', function () {
    it('should sum the elements of an array', function () {
        //Arrange
        let array = [5, 5, 5, 5, 5, 5, 5, 5];
        //Act
        let result = sum(array);
        //Assert
        assert.equal(result, 40);
    });  
    
    it('should sum the elements of an array', function () {
        //Arrange
        let array = [-5, -5, -5, -5, -5, -5, -5, -5];
        //Act
        let result = sum(array);
        //Assert
        assert.equal(result, -40);
    });

    it('should sum the elements of an array', function () {
        //Arrange
        let array = [-5.999999, 0, 0, 0, 0, 0, 0, 0];
        //Act
        let result = sum(array);
        //Assert
        assert.equal(result, -5.999999);
    });
});