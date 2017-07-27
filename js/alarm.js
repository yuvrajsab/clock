var call = true;

function playAud() {
    document.getElementById('alarmtune').play();
}

function pauseAud() {
    document.getElementById('alarmtune').pause();
}


function callfirst(){
  if(call) playAud();
  else pauseAud();
  call = !call;
}
