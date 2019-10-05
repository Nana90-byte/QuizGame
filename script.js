//Variables to be used

var startButton = document.querySelector("#start");
var timeLeft = document.querySelector("#seconds");
var stopButton = document.querySelector("#stop")



var totalSeconds = 75;
var secondsElapsed = 0;
var interval;
var questions = 0;



//This is the way the numbers will be displayed on the browser


// var secondsLeft = totalSeconds - secondsElapsed;
// var secondsLeft = (totalSeconds - secondsElapsed) % 60;

//   var formattedSeconds;

//   if (secondsLeft < 10) {
//     formattedSeconds = "0" + secondsLeft;
//   } 
//   else {
//     formattedSeconds = secondsLeft;
//   }

//   return formattedSeconds;



//setting my timer
var timer = function() {
    
    interval = setInterval(function() {
      secondsElapsed++;
      showTime();
    }, 1000);
  }
  var showTime = function() {
    var secondsLeft = totalSeconds - secondsElapsed;
    timeLeft.textContent = secondsLeft;
    if (secondsLeft === 0) {stop();}
}


  var start = function(){
    timer();
    
    if (questions < 5) {
    questions ++}
    
    else {
        stop();}
}
  //starting my countdown by assigning a function to showTime
  
 
  var stop = function() {
      console.log("stop")
      clearInterval(interval)
  }
      
  
  
 


  startButton.addEventListener("click", start);





