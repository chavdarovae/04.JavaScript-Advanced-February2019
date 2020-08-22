class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        if (length < 0) {
            length = 0;
        }
        this.innerLength+=length;
    }

    decrease(length) {
        if (length < 0) {
            length = 0;
        }
        this.innerLength=Math.max(0,this.innerLength-length);
    }

    toString(){
        if(this.innerLength<this.innerString.length){
            let output=this.innerString.substr(0,this.innerLength)+'...';
            return output;
        }else{
            return this.innerString;
        }
    }
}

let test=new Stringer('TEST',5);
console.log(test.toString());
test.increase(2);
console.log(test.toString());
test.decrease(2);
console.log(test.toString());
test.decrease(2);
console.log(test.toString());
test.decrease(100);
console.log(test.toString());
test.increase(2);
console.log(test.toString());
test.increase(1);
console.log(test.toString());
test.increase(5);
console.log(test.toString());
test.decrease(4);
console.log(test.toString());
