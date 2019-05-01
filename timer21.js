var msec, sec, min, hrs;
var a = new Audio("sound/Johnny Drille & Simi - Halleluya.mp3");
// var q = setTimeout();
function start() {
  // msec = Number(mseconds.value);
  sec = Number(seconds.value);
  min = Number(minutes.value);
  hrs = Number(hour.value);
  if (sec != "" && sec > 0) {
	document.getElementById('error').innerHTML='';
    sec--; //sec - 1;
    seconds.value = sec;
    if (sec == 0 && min > 0) {
      seconds.value = 60;
      min--;
      minutes.value = min;
    }
    if (min == 0 && hrs > 0) {
      minutes.value = 60;
      hrs--;
      hour.value = hrs;
    }
    // if (sec == 0 && min == 0 && hrs == 0)
    // {
    // 	clearTimeout(q);
    // 	// alert("stop now");
    // }

    // if (hrs == 0)
    // {
    // 	minutes.value = 60;
    // 	min--;
    // 	seconds.value = 60;
    // 	sec--;
    // }
    // if (hrs < 0)
    // {
    // 	hour.value = 0;
    // }
    // if (min < 0)
    // 	{
    // 		minutes.value = 0;
    // 	}
    // 	seconds.value = 59;
    // 	seconds.value = sec;
    // }
    q = setTimeout(start, 1000);

    if (sec == 0 && min == 0 && hrs == 0) {
      clearTimeout(q);
      a.play();
    }
  }
  else{
	  document.getElementById('error').innerHTML='No input yet';
  }
}

function snooze() {
  a.pause();
  seconds.value = 30;
  // start();
  start();
}
function refresh(){
	clearTimeout(q);
	hour.value="";
	minutes.value="";
	seconds.value="";
}