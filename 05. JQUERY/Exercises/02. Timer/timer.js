function timer() {
   let hours = $("#hours");
   let minutes = $("#minutes");
   let seconds = $("#seconds");
   let isTicking = false;
   let timer = setInterval(updateSeconds, 1000);

   $("#start-timer").click(function () {
      isTicking = true;
   });
   $("#stop-timer").click(function () {
      isTicking = false;
   });

   function updateSeconds() {
      if (isTicking) {
         if (+seconds.text() < 59) {
            seconds.text(padCounter(+seconds.text() + 1));
            //console.log(seconds.text());
         } else if (+seconds.text() === 59) {
            seconds.text('00');
            //console.log(seconds.text());        

            if (+minutes.text() < 59) {
               minutes.text(padCounter(+minutes.text() + 1));
               //console.log(minutes.text());
            } else if (+minutes.text() === 59) {
               minutes.text('00');
              //console.log(minutes.text());
               hours.text(padCounter(+hours.text() + 1));
               //console.log(minutes.text());
            }
         }
      }
   }

   function padCounter(timeCounter) {
      return timeCounter < 10 ? '0' + timeCounter : timeCounter;
   }
}