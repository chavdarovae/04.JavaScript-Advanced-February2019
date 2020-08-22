let extensions=(function(){
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
    
    Array.prototype.skip = function (n) {
        return this.slice(n);
    }
    
    Array.prototype.take = function (n) {
        if (n < 0) {
            throw new RangeError('Points outside the array range!')
        }
        return this.slice(0, n);
    }
    
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b, 0);
    }
    
    Array.prototype.average = function () {
        return this.reduce((a, b) => a + b, 0) / this.length;
    }
})()

console.log([1, 2, 3, 4, 5].last());
console.log([1, 2, 3, 4, 5].skip(2));
console.log([1, 2, 3, 4, 5].take(2));
console.log([1, 2, 3, 4, 5].averrage());
console.log([1, 2, 3, 4, 5].sum());
