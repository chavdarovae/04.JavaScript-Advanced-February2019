function subtract() {
    let firstInput=document.getElementById('firstNumber');
    let secondInput=document.getElementById('secondNumber');
    let resultDiv=document.getElementById('result');
    
    firstInput.disabled=false;
    secondInput.disabled=false;
    resultDiv.textContent=(Number(firstInput.value)-Number(secondInput.value)).toFixed(2);
}