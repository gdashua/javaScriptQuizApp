const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startGame);
const nextButton = document.getElementById('next-btn');
const questionContainerElement =document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion();
})

function startGame(){
startButton.classList.add('hide');
shuffledQuestions =  questions.sort(()=> Math.random()- .5);
currentQuestionIndex=0;
questionContainerElement.classList.remove('hide');
setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct);
    })
    if(shuffledQuestions.length> currentQuestionIndex+1){
    nextButton.classList.remove('hide');
    } else {
        startButton.innerText= 'Restart Game';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
element.classList.remove('correct');
element.classList.remove('wrong');
}
const questions = [
    {
        question: 'Which of these is a type of functional Software Testing?',
        answers: [
            {text: 'stress testing', correct: true},
            {text: 'unit testing', correct: false},
            {text: 'usability testing', correct: false},
            {text: 'recovery testing', correct: false}
        ]
    },
    {
        question: 'one of these is not a programming language?',
        answers: [
            {text: 'python', correct: false},
            {text: 'php', correct: false},
            {text: 'html', correct: true},
            {text: 'javaScript', correct: false}
        ]
    },
    {
        question: 'How many tracks do we currently have in start.ng?',
        answers: [
            {text: '3', correct: false},
            {text: '1', correct: false},
            {text: '5', correct: false},
            {text: '4', correct: true}
        ]
    },
    {
        question: 'what does a designer do?',
        answers: [
            {text: 'builts backend', correct: false},
            {text: 'codes the frontend', correct: false},
            {text: 'designs the front end', correct: true},
            {text: 'codes front and back ends', correct: false}
        ]
    },

    {
        question: 'what does STLC stands for?',
        answers: [
            {text: 'Software Tips Logo Cache', correct:false},
            {text: 'Software Testing Lyfe Cycle', correct: true},
            {text: 'Security Tool Loop Computers', correct: false},
            {text: 'Not of the above', correct: false}
        ]
    }

]
