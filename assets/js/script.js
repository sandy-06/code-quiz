let timer = document.getElementById("timer");
let getQuestions = [];
let timeLeft = 100;
let questionIndex = 0;
var result = document.getElementById("result");
var timeInterval;
var highScore = [];
document.getElementById("start-btn").addEventListener("click", function () {
        document.getElementById("class-startDocument").style.display = "none";
        // document.getElementById("t").style.display = "none";
        // make each set of questions visible
        countdown();
        startGame();

        // document.getElementsByClassName("container-questions").style.display = "";
    },

);
//questions for the quiz
let questions = [{
        quest: "inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<javascript>", "<js>", "<script>"],
        solved: "<script>",
    },
    {
        quest: "Where is the correct place to insert a JavaScript",
        options: ["The <body> section", "both the <head> and the <body> section are correct", "The <head> section"],
        solved: "The <head> section",
    },
    {
        quest: "How do you write 'Hello World' in an alert box?",
        options: ["alertBox('Hello World')", "alert('Hello World')", "msgBox('Hello World')", "msg('Hello World')"],
        solved: "alert('Hello World')",
    },
    {
        quest: "How do you call a function named 'myFunction'?",
        options: ["call myFunction", "call function myFunction()", "MyFunction()", "myFunction()"],
        solved: "myFunction",
    },

    {
        quest: "How to write an IF statement for executing some code it 'i' is NOT equal to 5?",
        options: ["if i <> 5", "if(i <> 5)", "if i =!5 then", "if(i != 5)"],
        solved: "if(i != 5)",
    }
];

function countdown() {

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
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




//This function cycles through the object array containing the question to generate the questions and answers
//then print the question and 4 options when one picked correct or false shows
// if false 15 sec is deducted from the time
// then runs again until all questions answered or time runs out.
function startGame() {
    var questionToDoEl = document.querySelector("#question");
    var classStart = document.getElementById("classStart");
    let currentQuestion = questions[questionIndex].quest;
    var taskItemEl = document.getElementById("h2");
    taskItemEl.textContent = currentQuestion;
    questionToDoEl.appendChild(taskItemEl);

    console.log(currentQuestion);

    let answer1 = questions[questionIndex].options[0];
    var ans1ItemEl = document.getElementById("ans1");
    ans1ItemEl.setAttribute("value", answer1);
    ans1ItemEl.textContent = answer1;


    let answer2 = questions[questionIndex].options[1];
    var ans2ItemEl = document.getElementById("ans2");
    ans2ItemEl.setAttribute("value", answer2)
    ans2ItemEl.textContent = answer2

    let answer3 = questions[questionIndex].options[2];
    var ans3ItemEl = document.getElementById("ans3");
    ans3ItemEl.setAttribute("value", answer3)
    ans3ItemEl.textContent = answer3

    let answer4 = questions[questionIndex].options[3];
    var ans4ItemEl = document.getElementById("ans4");
    ans4ItemEl.setAttribute("value", answer4)
    ans4ItemEl.textContent = answer4

    ans1ItemEl.onclick = checkAns;
    ans2ItemEl.onclick = checkAns;
    ans3ItemEl.onclick = checkAns;
    ans4ItemEl.onclick = checkAns;


    //find which answer they clicked so can compare to solution
    var buttonEl = document.querySelector("#save-task");
    var tasksToDoEl = document.querySelector("#tasks-to-do");


};

function checkAns() {
    console.log(this.value);
    if (this.value !== questions[questionIndex].solved) {
        timeLeft = timeLeft - 15;

        result.textContent = "Wrong Answer";
    } else {
        result.textContent = "Correct"
    }
    result.setAttribute("class", "")
    setTimeout(function () {
        result.setAttribute("class", "hide")
    }, 1000);
    questionIndex++;
    if (questionIndex === questions.length) {
        endGame();
    } else {
        startGame();
    }
}

function endGame() {
    clearInterval(timeInterval)
    var score = document.getElementById("score");
    score.removeAttribute("class");
    var quest = document.getElementById("question-container");
    quest.setAttribute("class", "hide");

    //all done page
    document.getElementById("final").innerHTML = "Your score is " + timeLeft + ".";
    highScore
    initials: score;


    document.getElementById("submit").addEventListener("click", function () {
        document.getElementById("score").style.display = "none";

        document.getElementById("end").classList.remove("hide");
    });

    document.getElementById("goback").addEventListener("click", function() {
       timeLeft = 100;
       questionIndex = 0;
       startGame();
    });
    document.getElementById("clear").addEventListener("click", function(){
        endGameOver();
    })

}
function endGameOver(){
    document.getElementById("main").style.display = "none";
}