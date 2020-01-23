function Questions(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Questions.prototype.correctAnswer = function(choices) {
    return choice === this.answer
}