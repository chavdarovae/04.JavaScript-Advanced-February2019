function solve(carObj) {
    let engine = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];
    let carriage = [
        { type: 'hatchback', color: '' },
        { type: 'coupe', color: '' }
    ];

    function selectEngine() {
       // console.log(engine.filter(x => x.power >= carObj.power)[0]);
        return engine.filter(x => x.power >= carObj.power)[0]
    }

    function selectCarriage() {
        let carriageAndColor=carriage.filter(x => x.type===carObj.carriage)[0];
        carriageAndColor.color=carObj.color;
        //console.log(carriageAndColor);
        return carriageAndColor;
    }

   function selectWheels() {
        let wheels=carObj.wheelsize;
        if(wheels%2===0){
            wheels--;
        }
        let wheelsArr=[wheels,wheels,wheels,wheels]
        return wheelsArr;
    }


    return {
        model: carObj.model,
        engine: selectEngine(),
        carriage: selectCarriage(),
        wheels: selectWheels()
    }
}

console.log(
    solve(
        {
            model: 'Opel Vectra',
            power: 90,
            color: 'grey',
            carriage: 'coupe',
            wheelsize: 17
        }
    )
);