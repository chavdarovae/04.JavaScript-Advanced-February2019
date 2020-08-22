function solve() {
    let fib =(function getFibonator(){
        let firstNum=0;
        let secondNum=1;

        return function(){
            let result=secondNum;
            let sum=firstNum+secondNum;
            firstNum=secondNum;
            secondNum=sum;
            return result;
        }

    })();
    console.log(fib()); // 1
    console.log(fib()); // 1
    console.log(fib()); // 2
    console.log(fib()); // 3
    console.log(fib()); // 5
    console.log(fib()); // 8
    console.log(fib()); // 13

}

solve();
