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
            var element = document.getElementById("choices" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
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

// // function showScores() {
// //     var gameOverHTML = $('<h1>Result</h1>');
// //     var    gameOverHTML += $('<h2>') id='score'> Your scores: " + quiz.score + "</h2>;
// //         var element = document.getElementById("quiz");
// //         element.innerHTML = gameOverHTML;
// }


var questions = [
    new Questions("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Questions("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Questions("There are ____ main components of object oriented programming", ["1", "2", "3", "4"], "4"),
    new Questions("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Questions("MVC is a _____.", ["Language", "Library", "Framework", "All"], "All"),
]

var quiz = new Quiz(questions);

populate();