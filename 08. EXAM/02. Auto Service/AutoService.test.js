const AutoService = require('./AutoService');
const assert = require('chai').assert;

describe('AutoService', function () {
    let autoService;
    beforeEach(function () {
        autoService = new AutoService;
    });

    describe('workInProgress array', function () {
        it('workInProgress is an empty array', function () {
            assert.isArray(autoService.workInProgress);
            assert.isEmpty(autoService.workInProgress);
        });

        it('when two inputs and 5 places of garage capacity', function () {
            autoService.garageCapacity = 5;
            autoService.signUpForReview('Pesho', 'M8888EK', { 'engine': 'MFRGG23', 'transmission': 'broken', 'doors': 'broken' });
            autoService.signUpForReview('Lili', 'M8889EK', { 'engine': 'MFRGG23', 'transmission': 'broken', 'doors': 'not broken' });
            autoService.repairCar();

            assert.equal(autoService.workInProgress.length, 1);
        });
    });

    describe('backlogWork array', function () {
        it('backlogWork is an empty array', function () {
            assert.isArray(autoService.backlogWork);
            assert.isEmpty(autoService.backlogWork);
        });

        it('when two inputs and no places of garage capacity', function () {
            autoService.garageCapacity = 0;
            autoService.signUpForReview('Pesho', 'M8888EK', { 'engine': 'MFRGG23', 'transmission': 'broken', 'doors': 'broken' });
            autoService.signUpForReview('Lili', 'M8889EK', { 'engine': 'MFRGG23', 'transmission': 'broken', 'doors': 'not broken' });
            autoService.repairCar();

            assert.equal(autoService.backlogWork.length, 1);
        });
    });


    describe('Function signUpForReview(clientName, plateNumber, carInfo)', function () {
        it('when available space', function () {
            autoService.garageCapacity = 1;
            autoService.signUpForReview('Pesho', 'M8888EK', {})

            assert.equal(autoService.workInProgress.length, 1);
            assert.deepEqual(autoService.workInProgress, [{ "carInfo": {}, "clientName": "Pesho", "plateNumber": "M8888EK" }]);
        });

        it('when no available space', function () {
            autoService.garageCapacity = 0;
            autoService.signUpForReview('Pesho', 'M8888EK', {})

            assert.equal(autoService.backlogWork.length, 1);
            assert.deepEqual(autoService.backlogWork, [{ "carInfo": {}, "clientName": "Pesho", "plateNumber": "M8888EK" }]);
        });

        it('when available places, but too many clients', function () {
            autoService.garageCapacity = 2;
            autoService.signUpForReview('Pesho', 'M8888EK', {});
            autoService.signUpForReview('Mitio', 'M8887EK', {});
            autoService.signUpForReview('Lili', 'M8889EK', {});

            assert.equal(autoService.backlogWork.length, 1);
            assert.deepEqual(autoService.backlogWork, [{ "carInfo": {}, "clientName": "Lili", "plateNumber": "M8889EK" }]);
        });
    });

    describe('Accessor availableSpace()', function () {
        it('standard case of a single input and 5 places garage capacity', function () {
            autoService.garageCapacity = 5;
            autoService.signUpForReview('Pesho', 'M8888EK', {})
            autoService.signUpForReview('Mitio', 'M8887EK', {})

            assert.equal(autoService.availableSpace, 3);
        });
    });

    describe('Function repairCar()', function () {
        it('when no input', function () {

            assert.equal(autoService.repairCar(), 'No clients, we are just chilling...');
        });

        it('when a single input, but nothing to repair', function () {
            autoService.garageCapacity = 5;
            autoService.signUpForReview('Pesho', 'M8888EK', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'not broken' });

            assert.equal(autoService.repairCar(), 'Your car was fine, nothing was repaired.');
            assert.equal(autoService.workInProgress.length, 0);
            assert.equal(autoService.garageCapacity, 5);
        });

        it('when a single input and nothing to repair, but no garage capacity', function () {
            autoService.garageCapacity = 0;
            autoService.signUpForReview('Lili', 'M8889EK', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'not broken' });

            assert.equal(autoService.repairCar(), 'Your car was fine, nothing was repaired.');
            assert.equal(autoService.backlogWork.length, 0);
        });

        it('when a single input with a single item to repair', function () {
            autoService.garageCapacity = 5;
            autoService.signUpForReview('Pesho', 'M8888EK', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
            autoService.signUpForReview('Lili', 'M8889EK', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'not broken' });

            assert.equal(autoService.repairCar(), 'Your doors were repaired.');
            assert.equal(autoService.workInProgress.length, 1);
            assert.equal(autoService.garageCapacity, 5);
        });

        it('when multiple inputs with, but only the second has something to repair, but not garage capacity', function () {
            autoService.garageCapacity = 0;
            autoService.signUpForReview('Lili', 'M8889EK', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'not broken' });
            autoService.signUpForReview('Mitio', 'M8887EK', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });

            assert.equal(autoService.repairCar(), 'Your car was fine, nothing was repaired.');
            assert.equal(autoService.backlogWork.length, 1);
        });

        it('when a single input with tree items to repair', function () {
            autoService.garageCapacity = 5;
            autoService.signUpForReview('Pesho', 'M8888EK', { 'engine': 'broken', 'transmission': 'broken', 'doors': 'broken' });

            assert.equal(autoService.repairCar(), 'Your engine and transmission and doors were repaired.');
        });

        it('when a single input with tree items to repair, but not garage capacity', function () {
            autoService.garageCapacity = 0;
            autoService.signUpForReview('Pesho', 'M8888EK', { 'engine': 'broken', 'transmission': 'broken', 'doors': 'broken' });

            assert.equal(autoService.repairCar(), 'Your engine and transmission and doors were repaired.');
        });
    });

    describe('Function carInfo(plateNumber, clientName)', function () {
        it('when the searched car is not in the garage', function () {
            autoService.garageCapacity = 5;
            autoService.signUpForReview('Pesho', 'M8888EK', {})

            assert.equal(autoService.carInfo('M8887EK', 'Mitio'), 'There is no car with platenumber M8887EK and owner Mitio.');
        });

        it('when the searched car is in workInProgress', function () {
            autoService.garageCapacity = 5;
            autoService.signUpForReview('Pesho', 'M8888EK', {})

            assert.deepEqual(autoService.carInfo('M8888EK', 'Pesho'), { "plateNumber": "M8888EK", "clientName": "Pesho", "carInfo": {}  });
        });

        it('when the searched car is in backlogWork', function () {
            autoService.garageCapacity = 0;
            autoService.signUpForReview('Pesho', 'M8888EK', {})

            assert.deepEqual(autoService.carInfo('M8888EK', 'Pesho'), { "plateNumber": "M8888EK", "clientName": "Pesho", "carInfo": {}  });
        });
    });
});