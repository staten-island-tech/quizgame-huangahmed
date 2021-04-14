
console.log("connected");

const startButton = document.getElementById('btn-before')
startButton.addEventListener('click', startGame)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion()