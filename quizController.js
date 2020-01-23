function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionindex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionindex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionindex;
}

Quiz.prototype.guess = function(answer) {  
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    this.questionindex++;
}
