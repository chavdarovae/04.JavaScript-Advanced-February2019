function attachEventsListeners() {
    let [daysBtn, hoursBtn, minutesBtn, secondsBtn] = Array.from(document.querySelectorAll('input[type="button"]'));

    let [daysInp, hoursInp, minutesInp, secondsInp] = Array.from(document.querySelectorAll('input[type="text"]'));

    [daysBtn, hoursBtn, minutesBtn, secondsBtn].forEach(button => button.addEventListener('click', convertTimeInput));

    function convertTimeInput(event) {
        let timeInSconds = 0;
        switch (event.target) {
            case daysBtn: timeInSconds = 24*60*60* daysInp.value;
                break;
            case hoursBtn: timeInSconds = 60*60* hoursInp.value;
                break;
            case minutesBtn: timeInSconds = 60* minutesInp.value;
                break;
            case secondsBtn: timeInSconds = secondsInp.value;
                break;
        }

        [daysInp.value, hoursInp.value, minutesInp.value, secondsInp.value] =[timeInSconds/(24*60*60),timeInSconds/(60*60),timeInSconds/(60),timeInSconds];
    }
}
