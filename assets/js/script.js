var questionare = [
    {
        question: "Commonly used data types DO NOT include: ",
        answers: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        correctAnswer: "c. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["a. quotes", "b. curly brackets", "c. parenthesis", "d. square brackets"],
        correctAnswer: "b. curly brackets"
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
var choices1El = document.querySelector('#choices1')
var choices2El = document.querySelector('#choices2')
var choices3El = document.querySelector('#choices3')
var choices4El = document.querySelector('#choices4')
var choices5El = document.querySelector('#choices5')
var result = document.querySelector('#display-results')
var loserLol = document.querySelector('#loser')
var viewScoreBoard = document.querySelector('#View_Highscores')
var endScreen = document.querySelector('#endscreen')
var highScorePage = document.querySelector('#highscore')
var viewScoreBtn = document.querySelector('#viewscorebtn')
var timeEl = document.querySelector('#timer-count');
var secondsLeft = 60; // Seconds Left on timer
var progress = 0

startButton.addEventListener('click', startGame)

function startGame() {
    setTime();
    startScreen.remove()
    function question1() {
        displayQuestion.textContent = questionare[0].question

        for(i = 0; i < questionare[0].answers.length; i++){
            var answer = document.createElement('button')
            answer.setAttribute('class', 'list-group-item list-group-item-action')
            answer.setAttribute('id', questionare[0].answers[i])
            answer.textContent = questionare[0].answers[i]
            choices1El.appendChild(answer)
        }

        choices1El.addEventListener('click', function(event){
        
            console.log(event.target)
            if(event.target.id == questionare[0].correctAnswer && secondsLeft > 0) {
                console.log("c. alerts")
                correctA()

                function removeChildElement(){
                    while(choices1El.firstChild) {
                        choices1El.firstChild.remove()
                    }
                }
                removeChildElement()
                question2()
            } else {
                wrongAnswer();
            }
        })
    }
    question1();

    function question2(){
        displayQuestion.textContent = questionare[1].question

        for(i = 0; i < questionare[1].answers.length; i++){
            var answer = document.createElement('button')
            answer.setAttribute('class', 'list-group-item list-group-item-action')
           
            answer.setAttribute('id', questionare[1].answers[i])
            answer.textContent = questionare[1].answers[i]
            choices2El.appendChild(answer)
        }
        choices2El.addEventListener('click', function(event){
            console.log(event.target)
            if(event.target.id == questionare[1].correctAnswer && secondsLeft > 0) {
                correctA()

                function removeChildElement(){
                    while(choices2El.firstChild) {
                        choices2El.firstChild.remove()
                    }
                }
                removeChildElement()
                question3()
            } else {
                wrongAnswer();
            }
        })
    }

    function question3(){
        displayQuestion.textContent = questionare[2].question

        for(i = 0; i < questionare[2].answers.length; i++){
            var answer = document.createElement('button')
            answer.setAttribute('class', 'list-group-item list-group-item-action')
            answer.setAttribute('id', questionare[2].answers[i])
            answer.textContent = questionare[2].answers[i]
            choices3El.appendChild(answer)
        }

        choices3El.addEventListener('click', function(event){
            console.log(event.target)
            if(event.target.id == questionare[2].correctAnswer && secondsLeft > 0) {
                correctA()

                function removeChildElement(){
                    while(choices3El.firstChild) {
                        choices3El.firstChild.remove()
                    }
                }
                removeChildElement()
                question4()
            } else {
                wrongAnswer();
            }
        })
    }

    function question4(){
        displayQuestion.textContent = questionare[3].question

        for(i = 0; i < questionare[3].answers.length; i++){
            var answer = document.createElement('button')
            answer.setAttribute('class', 'list-group-item list-group-item-action')
            answer.setAttribute('id', questionare[3].answers[i])
           
            answer.textContent = questionare[3].answers[i]
            choices4El.appendChild(answer)
        }
        choices4El.addEventListener('click', function(event){
            console.log(event.target)
            if(event.target.id == questionare[3].correctAnswer && secondsLeft > 0) {
                correctA()

                function removeChildElement(){
                    while(choices4El.firstChild) {
                        choices4El.firstChild.remove()
                    }
                }
                removeChildElement()
                question5()
            } else {
                wrongAnswer();
            }
        })
    }

    function question5(){
        displayQuestion.textContent = questionare[4].question

        for(i = 0; i < questionare[4].answers.length; i++){
            var answer = document.createElement('button')
            answer.setAttribute('class', 'list-group-item list-group-item-action')
             answer.setAttribute('id', questionare[4].answers[i])
            answer.textContent = questionare[4].answers[i]
            choices5El.appendChild(answer)
        }
        choices5El.addEventListener('click', function(event){
            console.log(event.target)
            if(event.target.id == questionare[4].correctAnswer && secondsLeft > 0) {
                correctA()

                function removeChildElement(){
                    while(choices5El.firstChild) {
                        choices5El.firstChild.remove()
                    }
                }
                removeChildElement()
            } else {
                wrongAnswer();
            }
        })
    }
}
function correctA(){
    result.textContent = "Correct!"
    progress++
}
function wrongAnswer(){
    result.textContent = "Wrong!"
    secondsLeft -= 5; 
}
function endScreenDisplay() {
    gameScreen.remove()
    result.remove()
    var h3El = document.getElementById('allDone')
    var h5El = document.getElementById('final-score-is')
    var spanEl = document.getElementById('score-result')
    var initialFormInput = document.createElement('input')
    var submitButton = document.createElement('button')

    initialFormInput.setAttribute('class', 'form-control')
    initialFormInput.setAttribute('type', 'text')
    initialFormInput.setAttribute('placeholder', 'Type Your Initials')
    initialFormInput.setAttribute('id', 'initials-form-input')
    submitButton.setAttribute('type', 'button')
    submitButton.setAttribute('class', 'btn btn-secondary')
    submitButton.textContent = 'Save'

    h3El.textContent = 'All done!'
    h5El.textContent = 'Your final score is: '

    endScreen.appendChild(initialFormInput)
    endScreen.appendChild(submitButton)
    spanEl.textContent = secondsLeft

    submitButton.addEventListener('click', submitInitial)
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " second(s) left.";
        if(progress == 5){
            clearInterval(timerInterval);
            endScreenDisplay();
        }
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            loser()
        }
    }, 1000);
}

function submitInitial() {
    var userInput = document.querySelector('input').value;
        if(document.getElementById('initials-form-input').value.length == 0) {
            alert('Please input initials');
        } else {
            var initials = userInput
            var score = secondsLeft
            localStorage.setItem(initials, score)
            highScoreDisplay()
        }
}
function loser() {
    gameScreen.remove()
    var h2Lol = document.createElement('h2')
    h2Lol.textContent = "You lost! :P"
    var playAgainBtn = document.createElement('button')
    playAgainBtn.textContent = "Play Again"
    playAgainBtn.setAttribute('type', 'button')
    playAgainBtn.setAttribute('class', 'btn btn-secondary')

    loserLol.appendChild(h2Lol)
    loserLol.appendChild(playAgainBtn)

    playAgainBtn.addEventListener('click', window.location.reload.bind(window.location))

}

function highScoreDisplay() {
    endScreen.remove();

    var tableEl = document.createElement('table')
    var theadEl = document.createElement('thead')
    var trEl = document.createElement('tr')
    trEl.setAttribute('class', 'col-12')
    var headScore = document.createElement('th')
    var headInitials = document.createElement('th')
    headScore.setAttribute('scope', 'col')
    headInitials.setAttribute('scope', 'col')
    headScore.textContent = 'Score: '
    headInitials.textContent = 'Initials: '
    
    highScorePage.appendChild(tableEl)
    tableEl.appendChild(theadEl)
    theadEl.appendChild(trEl)
    theadEl.appendChild(headInitials)
    theadEl.appendChild(headScore)

    var tbodyEl = document.createElement('tbody')

    tableEl.appendChild(tbodyEl)

    for(i = 0; i < localStorage.length; i++) {
        var trBodyEl = document.createElement('tr')
        tbodyEl.appendChild(trBodyEl)

        var tdInitials = document.createElement('td')
        var tdScore = document.createElement('td')

        tdScore.textContent = localStorage.getItem(localStorage.key(i))
        tdInitials.textContent = localStorage.key(i)

        trBodyEl.appendChild(tdInitials)
        trBodyEl.appendChild(tdScore)
    }

    var replayButton = document.createElement('button')
    replayButton.textContent = 'Replay'
    replayButton.setAttribute('type', 'button')
    replayButton.setAttribute('class', 'btn btn-secondary')
    highScorePage.appendChild(replayButton)

    replayButton.addEventListener('click', window.location.reload.bind(window.location))
}

viewScoreBtn.addEventListener('click', function(event){
    console.log(event.target)
    viewHighScoreBtnDisplay()
})

function viewHighScoreBtnDisplay() {
    var divModalContent = document.createElement('div')
    var divModalHeader = document.createElement('div')
    var modalTitle = document.createElement('h4')
    var modalBody = document.createElement('div')
    var modalFooter = document.createElement('div')
    var modalCloseBtn = document.createElement('button')

    modalCloseBtn.setAttribute('id', 'modalClose')
    divModalContent.setAttribute('class', 'modal-content')
    divModalContent.setAttribute('id', 'divModal-Content')
    divModalHeader.setAttribute('class', 'modal-header')
    modalTitle.setAttribute('class', 'modal-title')
    modalCloseBtn.setAttribute('type', 'button')
    modalCloseBtn.setAttribute('class', 'btn btn-default')
    modalCloseBtn.setAttribute('data-dismiss', 'modal')
    modalCloseBtn.textContent = 'Close'
    modalTitle.textContent = 'Highscore board'

    var table = document.createElement('table')
    var thead = document.createElement('thead')
    var tr = document.createElement('tr')
    tr.setAttribute('class', 'col-12')
    var headScore1 = document.createElement('th')
    var headInitials1 = document.createElement('th')
    headScore1.setAttribute('scope', 'col')
    headInitials1.setAttribute('scope', 'col')
    headScore1.textContent = 'Score: '
    headInitials1.textContent = 'Initials: '
    
    modalBody.appendChild(table)
    table.appendChild(thead)
    thead.appendChild(tr)
    thead.appendChild(headInitials1)
    thead.appendChild(headScore1)

    var tbody = document.createElement('tbody')
    table.appendChild(tbody)

    for(i = 0; i < localStorage.length; i++) {
        var trBody = document.createElement('tr')
        tbody.appendChild(trBody)

        var tdInitials1 = document.createElement('td')
        var tdScore1 = document.createElement('td')

        tdScore1.textContent = localStorage.getItem(localStorage.key(i))
        tdInitials1.textContent = localStorage.key(i)

        trBody.appendChild(tdInitials1)
        trBody.appendChild(tdScore1)
    }

    viewScoreBoard.appendChild(divModalContent)
    divModalContent.appendChild(divModalHeader)
    divModalHeader.appendChild(modalTitle)
    divModalContent.appendChild(modalBody)
    divModalContent.appendChild(modalFooter)
    modalFooter.appendChild(modalCloseBtn)

    document.getElementById('modalClose').addEventListener('click', function(event) {
        document.getElementById('divModal-Content').remove()
    })
}
