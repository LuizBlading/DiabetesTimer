function startTimer(duration, display){
  var timer = duration, minutes, seconds;

  var id = setInterval( function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    /*if(--timer < 0){
      timer = duration;
    }*/
    if(--timer <= -1){
      alert("Medir Glicemia!");
      timer = duration;
      clearInterval(id);
    }
  }, 1000);
}

var display = document.querySelector("#timer");

var minutes = 60 * 1;

function exTimer(){
  this.startTimer(minutes, display);
}
