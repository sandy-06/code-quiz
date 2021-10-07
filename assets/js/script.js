var time= 100;
let timer = document.getElementById("timer");
let questions = ["Inside which HTML element do we put the JavaScript"]
 
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () { time--
      timer.textContent = time;
        if(time <= 0)  {
     end() 
        }
        
},1000)
function end(){
    clearInterval(timer)


    
 < div id = "question" > Question < /div> <
     div id = "answer-buttons"
 class = "btn-grid" >
     <
     button class = "btn" > Answer 1 < /button> <
     button class = "btn" > Answer 2 < /button> <
     button class = "btn" > Answer 3 < /button> <
     button class = "btn" > Answer 4 < /button> <
     button id = "btn1" > solved < /button   