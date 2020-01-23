function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionindex = 0;
}

// To get the index of current question
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionindex];
}

// To check if quiz has ended
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionindex;
}

// to check if the current answer is equal 
// to the answer that is selected by user.
Quiz.prototype.guess = function(answer) { 
    this.questionindex++;

    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[0];
            guess("btn" + i, choices[0]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionindex + i;
    var element = document.getElementById("progress");
    element.innerHTML = "question" + currentQuestionNumber + "of" + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = $("<h1>Result</h1>");
    gameOverHTML += $("<h2 id='score'> Your scores: " + quiz.score + "</h2>");
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}


var questions = [
    new Question("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming", ["1", "2", "3", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a _____.", ["Language", "Library", "Framework", "All"], "All"),
]

var quiz = new Quiz(questions);

populate();

var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}