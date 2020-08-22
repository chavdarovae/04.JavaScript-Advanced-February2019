function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');
    let inputUnitsSelect = document.getElementById('inputUnits');
    let outputUnitsSelect = document.getElementById('outputUnits');

    document.getElementById('convert').addEventListener('click', convertUnits);

    function convertUnits() {
        let inputUnit = inputUnitsSelect.value;
        let input=+inputDistance.value;
        let distanceInMeters=0;
        switch (inputUnit) {
            case 'km': distanceInMeters=1000*input; break;
            case 'm': distanceInMeters=1*input; break;
            case 'cm': distanceInMeters=0.01*input; break;
            case 'mm': distanceInMeters=0.001*input; break;
            case 'mi': distanceInMeters=1609.34*input; break;
            case 'yrd': distanceInMeters=0.9144*input; break;
            case 'ft': distanceInMeters=0.3048*input; break;
            case 'in': distanceInMeters=0.0254*input; break;
        }

        let outputUnit = outputUnitsSelect.value;
        let output=0;
        switch (outputUnit) {
            case 'km': output=+distanceInMeters/1000; break;
            case 'm': output=+distanceInMeters/1; break;
            case 'cm': output=+distanceInMeters/0.01; break;
            case 'mm': output=+distanceInMeters/0.001; break;
            case 'mi': output=+distanceInMeters/1609.34; break;
            case 'yrd': output=+distanceInMeters/0.9144; break;
            case 'ft': output=+distanceInMeters/0.3048; break;
            case 'in': output=+distanceInMeters/0.0254; break;
        }
        outputDistance.value=output;
    }
}
