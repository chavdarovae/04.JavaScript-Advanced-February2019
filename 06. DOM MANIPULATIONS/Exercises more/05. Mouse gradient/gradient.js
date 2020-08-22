function attachGradientEvents() {
    $('#gradient').mousemove(getGradientInPercents);
    $('#gradient').mouseout(hidePercents);
      

    function getGradientInPercents(e) {
        let position = +e.offsetX;
        let elementWidth=+e.target.elementWidth; 
        let gradient=Math.trunc(100*(position)/(elementWidth-1));
        
        $('#result').text(`${gradient}%`);
    }

    function hidePercents(e) {
        $('#result').text('');
    }
}