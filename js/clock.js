setInterval(function(){
  var date = new Date();
  updateClock(date);
  time(date);
}, 1000);

function updateClock(date){
  var secHand = document.getElementById("second-hand").style;
  var minHand = document.getElementById("minute-hand").style;
  var hrHand = document.getElementById("hour-hand").style;

  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";

  var change = date.getHours();
  var sec = date.getSeconds();
    //console.log(date);
}

function time(date) {
  var timewrapper = document.getElementById("time");
  var dayof = date.getDay();
  switch (dayof) {
    case 1:
       dayof = "Monday";
      break;
    case 2:
      dayof = "Tuesday";
      break;
    case 3:
      dayof = "Wednessday";
      break;
    case 4:
      dayof = "Thursday";
      break;
    case 5:
      dayof = "Friday";
      break;
    case 6:
      dayof = "Saturday";
      break;
    case 7:
      dayof = "Sunday";
      break;
  default: dayof = "";
  }

  var day = date.getDate() + " " +dayof;
  timewrapper.innerHTML = day;
}
