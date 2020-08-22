let strExtensions=(function(){
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : (str + this).toString();
    }
    
    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : (this + str).toString();
    }
    
    String.prototype.isEmpty = function () {
        return this.toString() === '';
    }
    
    String.prototype.truncate = function (n) {
        let troncStr = '';
        if (n < 4) {
            troncStr = '.'.repeat(n)
        } else if (n < this.length) {
            let slicedStr = this.slice(0, n).trim();
    
            if (!slicedStr.includes(' ')) {
                troncStr = slicedStr.slice(0, slicedStr.length - 3) + '...';
            } else {
                let lastSpace = slicedStr.lastIndexOf(' ');
                troncStr = slicedStr.slice(0, lastSpace) + '...';
            }
        } else if (n >= this.length) {
            troncStr = this.toString();
        }
    
        return troncStr;
    }
    
    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            if (string.includes(`{${i}}`)) {
                string = string.split(`{${i}}`).join(`${params[i]}`);
            }
        }
        return string;
    }
})()

console.log('emilia'.ensureStart('ema'));
console.log('emilia'.ensureEnd('ILIA'));
console.log('dasga'.isEmpty());
console.log('hello my string'.truncate(16));
console.log('hello my string'.truncate(14));
console.log('hello my string'.truncate(8));
console.log('hello my string'.truncate(4));
console.log('hello my string'.truncate(2));
console.log('the quick brown fox jumps over the lazy dog'.truncate(10));
console.log('the quick brown fox jumps over the lazy dog'.truncate(43));
console.log(String.format('The {0} {1} fox',
    'quick', 'brown')
);