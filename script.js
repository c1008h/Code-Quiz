var timerElement = document.querySelector('#timer-count');
var timer;
var secondsLeft = 60; // Seconds Left on timer
var storeInitials = []; // For user to enter initials
// var myQuestions = ["Commonly used data types DO NOT include: ", "The condition in an if / else statement is enclosed within ____.", "Arrays in JavaScript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is: "];
// var myAnswers = [["strings", "booleans", "alerts", "numbers"],
//                 ["quotes","curly brackets","parenthesis","square brackets"],
//                 ["number and strings", "other arrays", "booleans", "all of the above"],
//                 ["commas","curly brackets","quotes","parenthesis"],
//                 ["JavaScript","terminal/bash","for loops","console.log"]];


var questionare = [
    {
        question: "Commonly used data types DO NOT include: ",
        answers: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        correctAnswer: "c. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["a. quotes", "b. curly brackets", "c. parenthesis", "d. square brackets"],
        correctAnswer: "b. square brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: ["a. number and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        correctAnswer: "d. all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.", 
        answers: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        correctAnswer: "d. parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: ["a. JavaScript", "b. terminal/bash", "c. for loops", "d. console.log"],
        correctAnswer: "d. console.log"
    }
]
        
var startScreen = document.querySelector('#startscreen');
var startButton = document.querySelector('#start-button')
var gameScreen = document.querySelector('#quiz-container')
var displayQuestion = document.querySelector('#question');
var choicesEl = document.querySelector('#choices')
var result = document.querySelector('#display-results')
var viewHigh = document.querySelector('#View_Highscores')
var endScreen = document.querySelector('#endscreen')
var highScorePage = document.querySelector('#highscore')
var clickHighScores = document.querySelector('.clickHigh')


startButton.addEventListener('click', startGame)

function startGame() {
    startScreen.remove()

    function question1() {
        displayQuestion.textContent = questionare[0].question

        for(i = 0; i < questionare[0].answers.length; i++){
            var answer = document.createElement('button')
            answer.setAttribute('class', 'list-group-item list-group-item-action')
            answer.setAttribute('id', questionare[0].answers[i])
            answer.textContent = questionare[0].answers[i]
            choicesEl.appendChild(answer)
        }

        choicesEl.addEventListener('click', function(event){
            console.log(event.target)
            if(event.target.id == questionare[00].correctAnswer) {
                console.log("c. alerts")
                correctA()

                function removeChildElement(){
                
                    while(choicesEl.firstChild) {
                        choicesEl.firstChild.remove()
                    }
                }
                removeChildElement()
                question2()
            }
            
        })
    }

    question1();

    function question2(){
        displayQuestion.textContent = questionare[1].question
        // result.textContent = ''

        for(i = 0; i < questionare[1].answers.length; i++){
            var answer = document.createElement('button')
            answer.setAttribute('class', 'list-group-item list-group-item-action')
           
            answer.setAttribute('id', questionare[1].answers[i])
            //console.log(questionare[1].answers[i])
            answer.textContent = questionare[1].answers[i]
            choicesEl.appendChild(answer)
        }
        
    }
    

    // function question3(){
    //     displayQuestion.textContent = questionare[2].question

    //     for(i = 0; i < quesitonaire[2].answers.length; i++){
    //         var answer = document.createElement('button')
    //         answer.setAttribute('class', 'list-group-item list-group-item-action')
            // answer.setAttribute('id', questionare[2].answers[i])
    //         
    //         answer.textContent = questionare[2].answers[i]
    //         choicesEl.appendChild(answer)
    //     }
        
    // }

    // function question4(){
    //     displayQuestion.textContent = questionare[3].question

    //     for(i = 0; i < myAnswers[3].length; i++){
    //         var answer = document.createElement('button')
    //         answer.setAttribute('class', 'list-group-item list-group-item-action')
    // answer.setAttribute('id', questionare[3].answers[i])
    //        
    //         answer.textContent = questionare[3].answers[i]
    //         choicesEl.appendChild(answer)
    //     }
        
    // }

    // function question5(){
    //     displayQuestion.textContent = questionare[4].question

    //     for(i = 0; i < questionare[4]answers.length; i++){
    //         var answer = document.createElement('button')
    //         answer.setAttribute('class', 'list-group-item list-group-item-action')
             //answer.setAttribute('id', questionare[4].answers[i])
    //         answer.textContent = questionare[4].answers[i]
    //         choicesEl.appendChild(answer)
    //     }
        
    // }

}

function correctA(){
    result.textContent = "Correct!"
}
function wrongAnswer(){
    result.textContent = "Wrong!"
    //secondsLeft -= 5; 
}