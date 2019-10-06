//Variables to be used

var startButton = document.querySelector("#start");
var timeLeft = document.querySelector("#seconds");
var stopButton = document.querySelector("#stop");
var questionaireDisplay = document.querySelector("#questionDisplay");
var choiceDisplay = document.querySelector("#choiceDisplay");
var answerDisplay = document.querySelector("#answerDisplay");
var answerBtn = document.createElement("button");
var btns = document.getElementsByClassName("btn");



var totalSeconds = 75;
var secondsElapsed = 0;
var interval;
var questionCount = 0;

var timerStarted = false;

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

var timer = function () {

    interval = setInterval(function () {
        secondsElapsed++;
        showTime();
    }, 1000);
}
var showTime = function () {
    var secondsLeft = totalSeconds - secondsElapsed;
    timeLeft.textContent = secondsLeft;
    if (secondsLeft === 0) { stop(); }
}


var start = function () {
    timerStarted = true;
    timer();
    console.log(questions)
    questionaire();

    // if (questions < 5) {
    // questions ++}

    // else {
    //     stop();}
}
//Function that displays the question
function questionaire() {
    if (questionCount < 5) {
        // for (var j=0; j<questions.length; j++){
        //     var quest = document.createElement("h3");
        //     quest.textContent = questions[j].tittle;
        //     questionaireDisplay.appendChild(quest);
        questionaireDisplay.textContent = questions[questionCount].tittle;
        console.log(questionCount)
        //clear the previous answer buttons
        choiceDisplay.innerHTML = "";
        for (var i = 0; i < 4; i++) {

            var answerBtn = document.createElement("button");
            answerBtn.textContent = questions[questionCount].choices[i];
            answerBtn.setAttribute("class", "btn");
            answerBtn.addEventListener("click", function () {
                console.log(answerBtn)
                questionCount++;
                questionaire();
                questionRecap();
            })
            choiceDisplay.appendChild(answerBtn);
            
       


            

        }
    } else {
        stop();
    }
}

//starting my countdown by assigning a function to showTime


var stop = function () {
    console.log("stop");
    clearInterval(interval);
}






startButton.addEventListener("click", function () {
    console.log("btn btn press")
    if (timerStarted === false) {
        start();
        console.log("listener true")
        questionaire();
        questionRecap();
    }
    

    //     var mybuttons =  document.getElementsByClassName('btn')
    //     for(var i=0;i<mybuttons.length;i++){
    //         mybuttons[i].addEventListener("click", function() {
    //         console.log(answerBtn)

    //         questionCount++;
    //         questionaire();
    //   } )



});