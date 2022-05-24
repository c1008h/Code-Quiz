var timerElement = document.querySelector('#timer-count');
var scoreCounter = [] // Tracks points (out of five points)
var timer;
var secondsLeft = 60; // Seconds Left on timer
var score = 0;
var storeInitials = []; // For user to enter initials
var myQuestions = ["Commonly used data types DO NOT include: ", "The condition in an if / else statement is enclosed within ____.", "Arrays in JavaScript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is: "];

var myAnswers = [["strings", "booleans", "alerts", "numbers"],
                ["quotes","curly brackets","parenthesis","square brackets"],
                ["number and strings", "other arrays", "booleans", "all of the above"],
                ["commas","curly brackets","quotes","parenthesis"],
                ["JavaScript","terminal/bash","for loops","console.log"]];
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

function viewHighS () {
    viewHigh.setAttribute('data-toggle', 'View HighScores' )
    viewHigh.setAttribute('title', 'pop')
}
document.getElementById('View_Highscores').addEventListener('click', viewHighS)

function highScorePageLoad () {
    var h3 = document.createElement('h3')
    var table = document.createElement('table')
    var row = document.createElement('tr')
    var initialColLabel = document.createElement('td')
    var scoreColLabel = document.createElement('td')
    var colScore = document.createElement('td')
    var colInitial = document.createElement('td')

    h3.textContent = 'Scoreboard:'


    highScorePage.appendChild(h3)
    highScorePage.appendChild(table)
    highScorePage.appendChild(row)
    highScorePage.appendChild(initialColLabel)
    highScorePage.appendChild(scoreColLabel)

    x = 0;
    for(i = 0; i < score.length; i++){
        colScore[i].textContent = getScore()
        colInitial[i].textContent = getInitials();
        table.appendChild(row[i])
        row.appendChild(colScore[i])
        row.appendChild(colInitial[i])

    }
    x++
}

startButton.addEventListener('click', startGame);

function startGame () {
    setTimer()
    question1()
}
function correctAnswer(){
    result.textContent = "Correct!"
    scoreCounter++
    //countScore();
}
function wrongAnswer(){
    result.textContent = "Wrong!"
    secondsLeft -= 5; 
}
// function countScore() {
//     score.textContent = scoreCounter;
//     localStorage.setItem("scoreCount", scoreCounter);
// }
// function getScore(){
//     var storedPoints = localStorage.getItem("scoreCount")
//     if(storedPoints === null) {
//         scoreCounter = 0;
//     } else {
//         storedPoints = scoreCounter;
//     }
//     score.textContent = scoreCounter;
// }

// function storeInitials() {
//     initial.textContent = storeInitials;
//     localStorage.setItem("storeInitials", storeInitials);
// }
// function getInitials () {
//     var storedInitials = localStorage.getItem("storedInitials")
//     if(storedInitials === null) {
//         storeInitials = [ ]
//     } else{
//        storedInitials = storeInitials;
//     }

// }

function setTimer() {
    timer = setInterval(function() {
        
        if (secondsLeft <= 0) {
            clearInterval(timer);
            timerElement.textContent = secondsLeft;
            return;
        }

        secondsLeft--;
        timerElement.textContent = secondsLeft;
    }, 1000);
}

function question1(){
    startScreen.remove();
    displayQuestion.textContent = myQuestions[0];
    var choiceA = document.createElement('button');
    var choiceB = document.createElement('button');
    var choiceC = document.createElement('button');
    var choiceD = document.createElement('button');
    choiceA.setAttribute("class", "list-group-item list-group-item-action");
    choiceA.setAttribute('id','choiceA')
    choiceB.setAttribute("class", "list-group-item list-group-item-action");
    choiceB.setAttribute('id','choiceB')
    choiceC.setAttribute("class", "list-group-item list-group-item-action");
    choiceC.setAttribute('id','choiceC')
    choiceD.setAttribute("class", "list-group-item list-group-item-action");
    choiceD.setAttribute('id','choiceD')
    choiceA.textContent = myAnswers[0][0]
    choiceB.textContent = myAnswers[0][1]
    choiceC.textContent = myAnswers[0][2]
    choiceD.textContent = myAnswers[0][3]
    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);

    choiceC.addEventListener('click', function() { 
        if(secondsLeft > 0) {
            correctAnswer();
            question2();
            console.log(scoreCounter, 'the score counter')
        }
    })
    
    choiceA.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer();
        }else {
            secondsLeft = 0
        }
        
    }) 
    choiceB.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer();
        }
    }) 
    choiceD.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer();
        }
    })     
}

function question2(){
    displayQuestion.textContent = myQuestions[1];
    choiceA.textContent = myAnswers[1][0]
    choiceB.textContent = myAnswers[1][1]
    choiceC.textContent = myAnswers[1][2]
    choiceD.textContent = myAnswers[1][3]

    choiceB.addEventListener('click', function() { 
        if(secondsLeft > 0) {
            correctAnswer();
            console.log(scoreCounter, 'the score counter')
            question3();
        }
    })
    
    choiceA.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }else {
            secondsLeft = 0
        }
        
    }) 
    choiceC.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }
    }) 
    choiceD.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }
    })     
}

function question3(){
    displayQuestion.textContent = myQuestions[2];
    choiceA.textContent = myAnswers[2][0]
    choiceB.textContent = myAnswers[2][1]
    choiceC.textContent = myAnswers[2][2]
    choiceD.textContent = myAnswers[2][3]
    

    choiceD.addEventListener('click', function() { 
        if(secondsLeft > 0) {
            correctAnswer();
            console.log(scoreCounter, 'the score counter')
            question4();
        }
    })
    
    choiceA.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }else {
            secondsLeft = 0
        }
        
    }) 
    choiceB.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }
    }) 
    choiceC.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }
    })     
}

function question4(){
    displayQuestion.textContent = myQuestions[3];
    choiceA.textContent = myAnswers[3][0]
    choiceB.textContent = myAnswers[3][1]
    choiceC.textContent = myAnswers[3][2]
    choiceD.textContent = myAnswers[3][3]
    

    choiceD.addEventListener('click', function() { 
        if(secondsLeft > 0) {
            correctAnswer();
            console.log(scoreCounter, 'the score counter')
            question5();
        }
    })
    
    choiceA.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }else {
            secondsLeft = 0
        }
        
    }) 
    choiceB.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }
    }) 
    choiceC.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }
    })     
}
function question5(){
    displayQuestion.textContent = myQuestions[4];
    choiceA.textContent = myAnswers[4][0]
    choiceB.textContent = myAnswers[4][1]
    choiceC.textContent = myAnswers[4][2]
    choiceD.textContent = myAnswers[4][3]
    choicesEl.appendChild(choiceA);
    choicesEl.appendChild(choiceB);
    choicesEl.appendChild(choiceC);
    choicesEl.appendChild(choiceD);

    choiceD.addEventListener('click', function() { 
        if(secondsLeft > 0) {
            correctAnswer();
            scoreScreen();
        }
    })
    
    choiceA.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }else {
            secondsLeft = 0
        }
        
    }) 
    choiceB.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }
    }) 
    choiceC.addEventListener('click', function() {
        if(secondsLeft >= 5) {
            wrongAnswer()
        }
    })
      
}
function scoreScreen () {
    gameScreen.remove()
    result.remove()

    var h5 = document.createElement('h5')
    var divContainer = document.createElement('div')
    var divLabel = document.createElement('div')
    var label = document.createElement('label')
    var divInput = document.createElement('div')
    var input = document.createElement('input')
    var submit = document.createElement('button')
    
    h5.textContent = "Your final score score is: " + scoreCounter;
    divContainer.setAttribute('class', 'row g-3 align-items-center')
    divLabel.setAttribute('class', 'col-auto')
    label.setAttribute('for', 'inputInitials')
    label.setAttribute('class', 'col-form-label')
    label.textContent = "Enter your initials"
    divInput.setAttribute('class', 'col-auto')
    input.setAttribute('class', 'form-control')
    input.setAttribute('type','initials')
    input.setAttribute('aria-describedby', 'initialsInline')
    input.setAttribute('id','inputInitials')
    submit.textContent = 'Submit'
    submit.setAttribute('class', 'col-6 btn btn-primary')
    submit.setAttribute('id', 'submitButton')
    submit.disabled = false;


    endScreen.appendChild(h5)
    endScreen.appendChild(divContainer)
    endScreen.appendChild(divLabel)
    endScreen.appendChild(label)
    endScreen.appendChild(divInput)
    endScreen.appendChild(input)
    endScreen.appendChild(submit)
   

    submit.addEventListener('click', storeUserInfo)
    
    // var userInput = document.querySelector('input').value 

    //     if(document.getElementById('inputInitials').value.length == 0) {
    //         alert('Please enter your intials to save your score')
    //     } else {
    //         storeInitials.push(userInput);
    //         countScore();
    //         highScorePageLoad(); 
    //         submit.disabled = true;
    //     }
    // })


function submitInitial() {
    var userInput = document.querySelector('input').value

    if(document.getElementById('inputInitials').value.length == 0) {
        alert('Please enter your initials to save your score')
    } else {
        storeInitials.push(userInput);
        localStorage.setItem("userInitialInput", JSON.stringify(userInput))
    }
}
function submitScore (){
    var lengthScore = scoreCounter.length
    lengthScore.push(score)
    localStorage.setItem("scoreNumber", JSON.stringify(score))
}
    
function renderMessage() {
    var copyInitial = JSON.parse(localStorage.getItem("userInitialInput"))
    var copyScore = JSON.parse(localStorage.getItem("scoreNumber"))

}
function storeUserInfo(){
    submitInitial()
    submitScore()
}
} 
// function init() {
//     getScore();
//     getInitials();
// }

// init();