function composeChart(name, age, weightKg, heightCm) {
    const calcBMI = (weightKg, heigthM) => {
        return Math.round(weightKg / heigthM ** 2)
    }

    const generateStatus = (bmi) => {
        if (bmi < 18.5) {
            return 'underweight'
        } else if (bmi < 25) {
            return 'normal'
        } else if (bmi < 30) {
            return 'overweight'
        } else {
            return 'obese'
        }
    }

    const bmi = calcBMI(weightKg, heightCm / 100);
    const chart={
        name,
        personalInfo:{
            age,
            weight: weightKg,
            height: heightCm
        },
        BMI: bmi,
        status: generateStatus(bmi)
    }

    if(chart.status==='obese'){
        chart.recommendation='admission required'
    }
    return chart;
}

console.log(composeChart('Peter', 29, 75, 182));