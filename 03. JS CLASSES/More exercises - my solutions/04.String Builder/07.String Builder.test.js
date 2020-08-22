const StringBuilder = require('./07.String Builder');
const { expect } = require('chai');

describe('String Builder tests', function () {
    let strBilder;
    beforeEach(function () {
        strBilder = new StringBuilder();
    });

    describe('functions are attached to prototype', function () {
        it('returns empty string when no input parameters', function () {
            expect(typeof StringBuilder.prototype.append==='function').to.be.true;
            expect(typeof StringBuilder.prototype.prepend==='function').to.be.true;
            expect(typeof StringBuilder.prototype.remove==='function').to.be.true;
            expect(typeof StringBuilder.prototype.insertAt==='function').to.be.true;
            expect(typeof StringBuilder.prototype.toString==='function').to.be.true;
        });


    });

    describe('Constructor tests', function () {
        it('returns empty string when no input parameters', function () {
            expect(strBilder.toString()).to.equal('', 'Empty string expected')
        });

        it('returns string when valid string input', function () {
            //Arrange
            let expected = 'TEST';
            //Act
            let strBilder = new StringBuilder('TEST');
            //Assert
            expect(strBilder.toString()).to.equal('TEST', `Should retrun ${expected}`)
        });

        it('returns TypeError when non-valid input', function () {
            //Arrange
            //Act
            let errorFunc = () => {
                strBilder = new StringBuilder(12345);
            }
            //Assert
            expect(errorFunc).to.throw(TypeError);
        });
    });

    describe('append tests', function () {
        it('returns error when non-string input', function () {
            //Arrange 
            //Act            
            let errorFunc = () => {
                strBilder.append({});
            };
            //Assert
            expect(errorFunc).to.throw(TypeError)

            errorFunc = () => {
                strBilder.append(1234);
            };
            expect(errorFunc).to.throw(TypeError)

            errorFunc = () => {
                strBilder.append(['12345']);
            };
            expect(errorFunc).to.throw(TypeError)
        });

        it('returns string when valid string input', function () {
            //Arrange
            let expected = '12345TestovTest';
            //Act
            strBilder.append('12345');
            strBilder.append('Testov');
            strBilder.append('Test');
            //Assert
            expect(strBilder.toString()).to.be.equal(expected, `Should retrun ${expected}`);
        });
    });

    describe('prepend tests', function () {
        it('returns error when non-string input', function () {
            //Arrange 
            //Act            
            let errorFunc = () => {
                strBilder.prepend({});
            };
            //Assert
            expect(errorFunc).to.throw(TypeError)

            errorFunc = () => {
                strBilder.prepend(1234);
            };
            expect(errorFunc).to.throw(TypeError)

            errorFunc = () => {
                strBilder.prepend(['12345']);
            };
            expect(errorFunc).to.throw(TypeError)
        });

        it('returns string when valid string input', function () {
            //Arrange
            let expected = 'TestTestov12345';
            //Act
            strBilder.prepend('12345');
            strBilder.prepend('Testov');
            strBilder.prepend('Test');
            //Assert
            expect(strBilder.toString()).to.be.equal(expected, `Should retrun ${expected}`);
        });
    });

    describe('remove tests', function () {
        it('remove in the beginning', function () {
            //Arrange
            let expected = 'Testov12345'
            //Act
            strBilder.append('TestTestov12345');
            strBilder.remove(0, 4);
            //Assert
            expect(strBilder.toString()).to.be.equal(expected, `should return ${expected}`);
        });

        it('remove in the end', function () {
            //Arrange
            let expected = 'TestTestov'
            //Act
            strBilder.append('TestTestov12345');
            strBilder.remove(10, 5);
            //Assert
            expect(strBilder.toString()).to.be.equal(expected, `should return ${expected}`);
        });

        it('remove in the middle', function () {
            //Arrange
            let expected = 'Test12345'
            //Act
            strBilder.append('TestTestov12345');
            strBilder.remove(4, 6);
            //Assert
            expect(strBilder.toString()).to.be.equal(expected, `should return ${expected}`);
        });

        it('returns unmodified string when negative or zero length', function () {
            //Arrange
            let expected = 'TestTestov12345'
            //Act
            strBilder.append('TestTestov12345');
            strBilder.remove(4, -7);
            //Assert
            expect(strBilder.toString()).to.be.equal(expected, `should return ${expected}`);
        });
    });

    describe('insertAt tests', function () {
        it('retruns TypeError when non-valid input', function () {
            //Arrange

            //Act
            let errorFunc = () => {
                strBilder.insertAt(567, 4);
            }
            //Assert
            expect(errorFunc).to.throw(TypeError);
        });

        it('retruns string when valid string input in the beginning', function () {
            //Arrange
            let expected = 'TestTestov12345'
            //Act
            strBilder.append('Testov12345');
            strBilder.insertAt('Test', 0);
            //Assert
            expect(strBilder.toString()).to.be.equal(expected, `should return ${expected}`);
        });

        it('retruns string when valid string input at the end', function () {
            //Arrange
            let expected = 'TestTestov12345'
            //Act
            strBilder.append('TestTestov');
            strBilder.insertAt('12345', 10);
            //Assert
            expect(strBilder.toString()).to.be.equal(expected, `should return ${expected}`);
        });

        it('retruns string when valid string input in the middle', function () {
            //Arrange
            let expected = 'TestTestov12345'
            //Act
            strBilder.append('Test12345');
            strBilder.insertAt('Testov', 4);
            //Assert9
            expect(strBilder.toString()).to.be.equal(expected, `should return ${expected}`);
        });
    });
});
