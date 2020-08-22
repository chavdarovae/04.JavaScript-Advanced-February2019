function solve() {
    let sumButton = document.getElementById('sumButton');
    let subtractButton = document.getElementById('subtractButton');

    sumButton.addEventListener('click', add);
    subtractButton.addEventListener('click', substract);

    let fiNum;
    let secNum;
    let result;
    
    function init(selector1, selector2, resultSelector) {
        fiNum = +document.querySelector(selector1).value;
        secNum = +document.querySelector(selector2).value;
        result = document.querySelector(resultSelector);
    }

    function add() {
        init("#num1", "#num2", '#result');
        return result.value = fiNum + secNum;
    }

    function substract() {
        init("#num1", "#num2", '#result');
        return result.value = fiNum - secNum;
    }

    return {
        init: init,
        add: add,
        subtract: substract
    }
}



