//Variables to be used

var startButton = document.querySelector("#start");
var timeLeft = document.querySelector("#seconds");
var stopButton = document.querySelector("#stop");
var questionaireDisplay = document.querySelector("#questionDisplay");
var choiceDisplay = document.querySelector("#choiceDisplay");
var answerDisplay = document.querySelector("#answerDisplay");
var answerBtn = document.createElement("button");
var btns = document.getElementsByClassName("btn");
var points = document.querySelector("#score")



var totalSeconds = 75;
var secondsElapsed = 0;
var interval;
var questionCount = 0;
var answerCount = 0;
var score = 0;




var timerStarted = false;


//setting my timer

var timer = function () {

    interval = setInterval(function () {
        secondsElapsed++;
        showTime();
    }, 1000);
}
//This function will determine when the timer will stop
var showTime = function () {
    var secondsLeft = totalSeconds - secondsElapsed;
    timeLeft.textContent = secondsLeft;
    if (secondsLeft < 1) {
        timeLeft.textContent = 0; stop(); }
}

//This function start the timer
var start = function () {
    timerStarted = true;
    timer();
    console.log(questions)
    questionaire();
   

    
}
//Function that displays the questions
function questionaire() {
    
    if (questionCount < 5) {
       
        questionaireDisplay.textContent = questions[questionCount].tittle;
        console.log(questionCount)
        
        //clears the previous answer buttons
        choiceDisplay.innerHTML = "";
        answerDisplay.innerHTML = "";
        
        for (var i = 0; i < 4; i++) {

            var answerBtn = document.createElement("button");
          
            
            answerBtn.textContent = questions[questionCount].choices[i];
            answerBtn.setAttribute("class", "btn");
            answerBtn.addEventListener("click", function () {
               
                console.log(answerBtn)
                questionCount++;
                questionaire();
                
            
                    
                if (this.innerText==questions[0].choices[1] || this.innerText==questions[1].choices[0] || this.innerText==questions[2].choices[2] || this.innerText==questions[3].choices[3] || this.innerText==questions[4].choices[2]) {
                    answerDisplay.innerHTML = "Correct";
                    score++;
                  points.textContent = score;
                    
                }
                else {
                   answerDisplay.innerHTML = "Incorrect"; 
                    totalSeconds-=15;
                }
            
               

            })
            choiceDisplay.appendChild(answerBtn);
           
           
            
            

        }

    } else {
        choiceDisplay.innerHTML = ""; questionDisplay.innerHTML = "";
        answerDisplay.innerHTML = "End of Quiz";  stop();
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
       
       
        
    }
    

});