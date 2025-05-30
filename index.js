// Your code here
var questionsArr = [
        {
            question: 'Did Charlie Kaufman write the screenplay for Eternal Sunshine of the Spotless Mind?',
            answer: true
        }, 
        {
            question: 'Was the first Iron Man movie released in 2010?',
            answer: false
        }, 
        {
            question: 'Did David Lynch have final cut of Dune (1984)?',
            answer: false
        }, 
        {
            question: 'Was Leonardo Dicaprio orignially casted to play Spider-Man in a version of the film created by James Cameron?',
            answer: true
        },
        {
            question: 'Is James Gunn the new executive producer of the DC cinematic universe?',
            answer: true
        }
    ]

// Run the quiz
function runQuiz() {
    var correctAnswers = 0;
    
    // Loop through questions
    for (var i=0; i < questionsArr.length; i++) {
        var answer = confirm(questionsArr[i].question);
        if (answer === questionsArr[i].answer) {
            correctAnswers++;
        }
    }

    // Calculate score
    var percentage = (correctAnswers / questionsArr.length) * 100;

    // Show final Score
    alert(`You got ${percentage}% correct!`);

}