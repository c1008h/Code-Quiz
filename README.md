# Code-Quiz

## Project Description
This code-quiz is a perfect way to test your knowledge on coding. Traditional studying methods eventually becomes so boring. Therefore, this code-quiz game was created to keep users engaged while they study. Motivation will make users mot engaged in their studying and studying will be more fun. 

## How to use the code-quiz
When the page loads, the description will be displayed for the users to see along with a start button to begin the game along with the timer. On the top, one side will be the view high score button and the timer on the otherside. 
Users will have 60 seconds to answer five multiple choice questions about coding. For every question that the user gets wrong, five seconds is subtracted from the total seconds left. If the user reaches zero seconds before the questions are all answered then the user will be taken to the loser page. There will be an option to replay the game. If the user wins, they will be taken to user initial input and score save page. After saving score and displaying the previous saved scores, there will also be an option to replay the game. 

## Challenges
Properly displaying localStorage key and value was a hurdle to overcome. While working through the questions, the timer was jumping at random times but as I walked through it and used console.log to find where it could have been from, I realized that using the same variable for each function was not possible because it would refer back to that event in other functions. I've realized that each ID is unique for a reason and should only be used for one thing only to not mix in other elements (can get really messy). 
I've realized that simplifying code and cleaning it up is really important because when it was extremely long and messy I couldn't even figure out what to fix when the code wasn't working properly. I ended up deleting the whole code and rewriting it. In the future, I'll plan out how to structure the code part by part so it will be easy for myself to read and for others to read. 
