console.log("connected");

const startButton = document.getElementById("btn-before");
console.log(startButton);

const questionContainerElement = document.getElementById("quiz-questions");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("started");
  startButton.classList.add("show");
  //   questionContainerElement.classList.remove("hide");
  //   setNextQuestion();
}

// function setNextQuestion()
