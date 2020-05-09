const startButton = document.getElementById('start-btn');
const questionContainerElement =document.getElementById('question-container');
const shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame(){
console.log('Started');
startButton.classList.add('hide');
questionContainerElement.classList.remove('hide');
shuffledQuestions =  questions.sort(()=> Math.random()- .5);
currentQuestionIndex=0
questionContainerElement.classList.remove(hide);
setNextQuestion();
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(){
    
}

const questions = [
    {
        question: 'What is 2+2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]