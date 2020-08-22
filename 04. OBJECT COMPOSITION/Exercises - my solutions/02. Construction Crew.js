function solve(workerObj) {
    Object.getPrototypeOf(workerObj).correctAlchohol=function (){
        if(this.handsShaking===true){
            this.bloodAlcoholLevel+=0.1*+this.weight*+this.experience;
            this.handsShaking=false;
        }
    }
    workerObj.correctAlchohol();
    console.log(workerObj);

    let emi=Object.create(workerObj);
    emi.weight=50;
    emi.handsShaking=true;
    emi.correctAlchohol();
    console.log(emi);
}

solve(
    {
        weight: 80,
        experience: 2,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
)