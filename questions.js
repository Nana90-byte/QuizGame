
var questions = [
    {
        tittle: "Question",
        choices: ["a","b","c","d"],
        answer: ["Correct","Incorrect"]
    
    },
    {
        tittle: "Question2",
        choices: ["r","4","u","e"],
        answer: "c"
    },

    {
        tittle: "Question3",
        choices: ["a","b","c","d"],
        answer: "c"
    },
    {
        tittle: "Question4",
        choices: ["a","b","c","d"],
        answer: "c"
    },
    {
        tittle: "Question5",
        choices: ["a","b","c","d"],
        answer: "c"
    },

]

var verification = ["Correct","Incorrect"]

var questionRecap = function() {
    if (questions[0].choices[1]) {
       answerDisplay.textContent = questions[0].answer[0]
    }
    else if (questions[0].choices[0] || questions[0].choices[2] || questions[0].choices[3]) { 
        answerDisplay.textContent = questions[0].answer[1]
    }

}




