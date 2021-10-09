let timer = document.getElementById("timer");
let getQuestions = [];
let timeLeft = 100;
let questionIndex = 0;
document.getElementById("start-btn").addEventListener("click", function () {
        
        countdown();
        startGame();
        document.getElementById("class-startDocument").style.display = "none";
        document.getElementById("question-container").style.display = "";
    },

);
let questions = [{
        quest: "inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<javascript>", "<js>", "<script>"],
        answer: "<script>",
    },
    {
        quest: "Where is the correct place to insert a JavaScript",
        options: ["The <body> section", "both the <head> and the <body> section are correct", "The <head> section"],
        answer: "The <head> section",
    },
    {
        quest: "How do you write 'Hello World' in an alert box?",
        options: ["alertBox('Hello World')", "alert('Hello World')", "msgBox('Hello World')", "msg('Hello World')"],
        answer: "alert('Hello World')",
    },
    {
        quest: "How do you call a function named 'myFunction'?",
        options: ["call myFunction", "call function myFunction()", "MyFunction()", "myFunction()"],
        answer: "myFunction",
    },

    {
        quest: "How to write an IF statement for executing some code it 'i' is NOT equal to 5?",
        options: ["if i <> 5", "if(i <> 5)", "if i =!5 then", "if(i != 5)"],
        answer: "if(i != 5)",
    }
];

function countdown() {

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        //As long as the `timeLeft` is greater than 1
        if (timeLeft >= 1) {
            //set the `textContent` of `timer` tro show the remaining seconds
            timer.textContent = timeLeft;
            //Decrement `timeLeft` by 1
            timeLeft--;

        } else {
            //Once `timeLeft` gets to 0, set `timer` to an empty string
            timer.textContent = '';
            // display message done
            endGame();

        }

    }, 1000);
};
// stop the timer to end the game
function endGame() {
    clearInterval(timeLeft);
}

//This function cycles through the object array containing the question to generate the questions and answers
//then print the question and 4 options when one picked correct or false shows
// if false 15 sec is deducted from the time
// then runs again until all questions answered or time runs out.
function startGame() {
    var classStart = document.getElementById("classStart")
    let currentQuestion = questions[questionIndex].quest;
   
    console.log(currentQuestion);
    let answer1 = questions[questionIndex].options[0];
    console.log(answer1);

};